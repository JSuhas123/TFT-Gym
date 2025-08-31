import { motion } from 'framer-motion';
import { Download, Eye, EyeOff, Lock, Shield, Trash2 } from 'lucide-react';
import React, { useEffect, useState } from 'react';

interface NutritionSubmission {
  name: string;
  email: string;
  phone: string;
  age: number;
  weight: number;
  height: number;
  fitnessGoal: string;
  activityLevel: string;
  dietaryRestrictions: string;
  submittedAt: string;
}

const AdminPage: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [submissions, setSubmissions] = useState<NutritionSubmission[]>([]);
  const [stats, setStats] = useState({
    total: 0,
    today: 0,
    thisWeek: 0,
    topGoal: 'None'
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Admin password (you can change this)
  const ADMIN_PASSWORD = 'ThrustFit2024!';
  const NUTRITION_STORAGE_KEY = 'nutrition_submissions_v1';

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
      loadSubmissions();
    } else {
      setError('Invalid password. Please try again.');
      setPassword('');
    }
  };

  const loadSubmissions = () => {
    try {
      const data = JSON.parse(localStorage.getItem(NUTRITION_STORAGE_KEY) || '[]');
      setSubmissions(data);
      calculateStats(data);
      setSuccess('Data loaded successfully');
      setTimeout(() => setSuccess(''), 3000);
    } catch {
      setError('Error loading data');
    }
  };

  const calculateStats = (data: NutritionSubmission[]) => {
    const today = new Date().toDateString();
    const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    
    const todayCount = data.filter(sub => 
      sub.submittedAt && new Date(sub.submittedAt).toDateString() === today
    ).length;
    
    const weekCount = data.filter(sub => 
      sub.submittedAt && new Date(sub.submittedAt) >= oneWeekAgo
    ).length;

    const goalCounts: { [key: string]: number } = {};
    data.forEach(sub => {
      if (sub.fitnessGoal) {
        goalCounts[sub.fitnessGoal] = (goalCounts[sub.fitnessGoal] || 0) + 1;
      }
    });

    const topGoal = Object.keys(goalCounts).reduce((a, b) => 
      goalCounts[a] > goalCounts[b] ? a : b, 'None'
    );

    setStats({
      total: data.length,
      today: todayCount,
      thisWeek: weekCount,
      topGoal: topGoal.replace('-', ' ').toUpperCase()
    });
  };

  const exportCSV = () => {
    try {
      if (submissions.length === 0) {
        setError('No data to export');
        return;
      }

      const headers = ['Name', 'Email', 'Phone', 'Age', 'Weight', 'Height', 'Fitness Goal', 'Activity Level', 'Dietary Restrictions', 'Submitted At'];
      const csvHeader = headers.join(',');
      const csvRows = submissions.map(row => [
        `"${row.name || ''}"`,
        `"${row.email || ''}"`,
        `"${row.phone || ''}"`,
        `"${row.age || ''}"`,
        `"${row.weight || ''}"`,
        `"${row.height || ''}"`,
        `"${row.fitnessGoal || ''}"`,
        `"${row.activityLevel || ''}"`,
        `"${row.dietaryRestrictions || ''}"`,
        `"${row.submittedAt || ''}"`
      ].join(','));
      
      const csv = [csvHeader, ...csvRows].join('\r\n');

      const blob = new Blob([csv], { type: 'text/csv' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `nutrition_submissions_${new Date().toISOString().split('T')[0]}.csv`;
      document.body.appendChild(link);
      link.click();
      setTimeout(() => {
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }, 100);

      setSuccess('CSV exported successfully!');
      setTimeout(() => setSuccess(''), 3000);
    } catch {
      setError('Error exporting CSV');
    }
  };

  const exportExcel = () => {
    try {
      if (submissions.length === 0) {
        setError('No data to export');
        return;
      }

      const headers = ['Name', 'Email', 'Phone', 'Age', 'Weight', 'Height', 'Fitness Goal', 'Activity Level', 'Dietary Restrictions', 'Submitted At'];
      const tsvHeader = headers.join('\t');
      const tsvRows = submissions.map(row => [
        row.name || '',
        row.email || '',
        row.phone || '',
        row.age || '',
        row.weight || '',
        row.height || '',
        row.fitnessGoal || '',
        row.activityLevel || '',
        row.dietaryRestrictions || '',
        row.submittedAt || ''
      ].join('\t'));
      
      const tsv = [tsvHeader, ...tsvRows].join('\r\n');

      const blob = new Blob([tsv], { type: 'application/vnd.ms-excel' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `nutrition_submissions_${new Date().toISOString().split('T')[0]}.xls`;
      document.body.appendChild(link);
      link.click();
      setTimeout(() => {
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }, 100);

      setSuccess('Excel file exported successfully!');
      setTimeout(() => setSuccess(''), 3000);
    } catch {
      setError('Error exporting Excel file');
    }
  };

  const clearAllData = () => {
    if (window.confirm('⚠️ Are you sure you want to delete ALL nutrition submissions? This cannot be undone!')) {
      try {
        localStorage.removeItem(NUTRITION_STORAGE_KEY);
        setSubmissions([]);
        setStats({ total: 0, today: 0, thisWeek: 0, topGoal: 'None' });
        setSuccess('All data cleared successfully');
        setTimeout(() => setSuccess(''), 3000);
      } catch {
        setError('Error clearing data');
      }
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setPassword('');
    setSubmissions([]);
  };

  // Keyboard shortcut for quick export
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isAuthenticated && e.ctrlKey && e.altKey && e.key.toLowerCase() === 'e') {
        e.preventDefault();
        exportCSV();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800 p-8 rounded-xl shadow-2xl border border-gray-700 w-full max-w-md"
        >
          <div className="text-center mb-8">
            <Shield className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-white mb-2">Admin Access</h1>
            <p className="text-gray-400">Enter password to access nutrition data</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Admin Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  placeholder="Enter admin password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-red-900/50 border border-red-500 text-red-200 px-4 py-3 rounded-lg"
              >
                {error}
              </motion.div>
            )}

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
            >
              <Lock className="h-5 w-5 mr-2" />
              Access Admin Panel
            </motion.button>
          </form>

          <div className="mt-6 text-center text-gray-500 text-sm">
            <p>🔒 Secure access to Thrust Fit Tribe nutrition data</p>
            <p className="mt-2 text-xs">💡 Access: /tft-secure-admin-2024 or Ctrl+Shift+A+D+M</p>
            <p className="text-xs">🔑 Password: ThrustFit2024!</p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-center mb-8"
        >
          <div>
            <h1 className="text-4xl font-bold text-yellow-400 mb-2">🔒 Admin Dashboard</h1>
            <p className="text-gray-400">Nutrition Form Submissions Management</p>
            <p className="text-xs text-gray-500 mt-1">
              💡 Hidden URL: /tft-secure-admin-2024 | Secret Key: Ctrl+Shift+A+D+M
            </p>
          </div>
          <motion.button
            onClick={logout}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Logout
          </motion.button>
        </motion.div>

        {/* Success/Error Messages */}
        {success && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-green-900/50 border border-green-500 text-green-200 px-4 py-3 rounded-lg mb-6"
          >
            {success}
          </motion.div>
        )}

        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-900/50 border border-red-500 text-red-200 px-4 py-3 rounded-lg mb-6"
          >
            {error}
          </motion.div>
        )}

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
        >
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">{stats.total}</div>
            <div className="text-gray-300">Total Submissions</div>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">{stats.today}</div>
            <div className="text-gray-300">Today</div>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">{stats.thisWeek}</div>
            <div className="text-gray-300">This Week</div>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 text-center">
            <div className="text-lg font-bold text-purple-400 mb-2">{stats.topGoal}</div>
            <div className="text-gray-300">Top Goal</div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap gap-4 mb-8"
        >
          <motion.button
            onClick={loadSubmissions}
            whileHover={{ scale: 1.05 }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            🔄 Refresh Data
          </motion.button>
          <motion.button
            onClick={exportCSV}
            whileHover={{ scale: 1.05 }}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center"
          >
            <Download className="h-5 w-5 mr-2" />
            Export CSV
          </motion.button>
          <motion.button
            onClick={exportExcel}
            whileHover={{ scale: 1.05 }}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center"
          >
            <Download className="h-5 w-5 mr-2" />
            Export Excel
          </motion.button>
          <motion.button
            onClick={clearAllData}
            whileHover={{ scale: 1.05 }}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center"
          >
            <Trash2 className="h-5 w-5 mr-2" />
            Clear All Data
          </motion.button>
        </motion.div>

        {/* Data Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden"
        >
          <div className="p-6 border-b border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-2">Nutrition Submissions</h2>
            <p className="text-gray-400">
              {submissions.length} total submissions • Press Ctrl+Alt+E for quick CSV export
            </p>
          </div>
          
          <div className="overflow-x-auto">
            {submissions.length === 0 ? (
              <div className="text-center py-12 text-gray-400">
                <Shield className="h-16 w-16 mx-auto mb-4 opacity-50" />
                <p className="text-xl">No submissions found</p>
                <p>Click "Refresh Data" to load nutrition form submissions</p>
              </div>
            ) : (
              <table className="w-full">
                <thead className="bg-gray-700">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-200">#</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-200">Name</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-200">Email</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-200">Phone</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-200">Goal</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-200">Age</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-200">Activity</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-200">Submitted</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {submissions.map((submission, index) => (
                    <tr key={`submission-${submission.submittedAt || index}`} className="hover:bg-gray-750">
                      <td className="px-6 py-4 text-sm text-gray-300">{index + 1}</td>
                      <td className="px-6 py-4 text-sm text-white font-medium">{submission.name || 'N/A'}</td>
                      <td className="px-6 py-4 text-sm text-gray-300">{submission.email || 'N/A'}</td>
                      <td className="px-6 py-4 text-sm text-gray-300">{submission.phone || 'N/A'}</td>
                      <td className="px-6 py-4 text-sm text-gray-300">
                        <span className="bg-yellow-400/20 text-yellow-400 px-2 py-1 rounded-full text-xs">
                          {submission.fitnessGoal?.replace('-', ' ').toUpperCase() || 'N/A'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-300">{submission.age || 'N/A'}</td>
                      <td className="px-6 py-4 text-sm text-gray-300">{submission.activityLevel?.replace('-', ' ') || 'N/A'}</td>
                      <td className="px-6 py-4 text-sm text-gray-300">
                        {submission.submittedAt ? new Date(submission.submittedAt).toLocaleDateString() : 'N/A'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminPage;
