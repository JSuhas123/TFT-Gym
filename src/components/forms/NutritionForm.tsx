import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle, Download, Users } from 'lucide-react';
import React, { useEffect } from 'react';
import { useNutritionAnalytics, useNutritionForm } from '../../hooks/useNutrition';
import { FormInput, FormSelect, FormTextarea, LoadingSpinner, ProgressBar, SuccessMessage } from '../ui/FormComponents';

const NutritionForm: React.FC = () => {
  const {
    formData,
    updateFormData,
    isSubmitted,
    isLoading,
    errors,
    nutritionGuide,
    generateNutritionGuide,
    resetForm
  } = useNutritionForm();

  const { analytics, trackGoalSelection } = useNutritionAnalytics();

  const fitnessGoalOptions = [
    { value: 'weight-loss', label: 'Weight Loss' },
    { value: 'muscle-gain', label: 'Muscle Gain' },
    { value: 'strength', label: 'Strength Building' },
    { value: 'endurance', label: 'Endurance' },
    { value: 'general-fitness', label: 'General Fitness' },
    { value: 'athletic-performance', label: 'Athletic Performance' }
  ];

  const genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' }
  ];

  const activityLevelOptions = [
    { value: 'sedentary', label: 'Sedentary (little to no exercise)' },
    { value: 'lightly-active', label: 'Lightly Active (light exercise 1-3 days/week)' },
    { value: 'moderately-active', label: 'Moderately Active (moderate exercise 3-5 days/week)' },
    { value: 'very-active', label: 'Very Active (hard exercise 6-7 days/week)' },
    { value: 'extremely-active', label: 'Extremely Active (very hard exercise, physical job)' }
  ];

  // Store submissions in localStorage (hidden from users)
  const NUTRITION_STORAGE_KEY = 'nutrition_submissions_v1';
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fitnessGoal) {
      trackGoalSelection(formData.fitnessGoal);
    }
    // Save submission to localStorage (append, not overwrite)
    try {
      const prev = JSON.parse(localStorage.getItem(NUTRITION_STORAGE_KEY) || '[]');
      const toStore = { ...formData, submittedAt: new Date().toISOString() };
      localStorage.setItem(NUTRITION_STORAGE_KEY, JSON.stringify([...prev, toStore]));
    } catch {
      // fail silently if localStorage is not available
    }
    await generateNutritionGuide();
  };

  // Hidden admin-only export: Ctrl+Alt+N to download CSV
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.altKey && e.key.toLowerCase() === 'n') {
        try {
          const data = JSON.parse(localStorage.getItem(NUTRITION_STORAGE_KEY) || '[]');
          if (!Array.isArray(data) || data.length === 0) return;
          
          // Convert to CSV with proper formatting
          const keys = Object.keys(data[0]);
          const csvHeader = keys.join(',');
          const csvRows = data.map(row => 
            keys.map(key => {
              const value = String(row[key] ?? '').replace(/"/g, '""');
              return `"${value}"`;
            }).join(',')
          );
          const csv = [csvHeader, ...csvRows].join('\r\n');
          
          // Download CSV file
          const blob = new Blob([csv], { type: 'text/csv' });
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = `nutrition_submissions_${Date.now()}.csv`;
          document.body.appendChild(link);
          link.click();
          setTimeout(() => {
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
          }, 100);
        } catch {
          // fail silently if export fails
        }
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const isEligible = analytics.availableGuides > 0;

  if (isSubmitted && nutritionGuide) {
    return (
      <SuccessMessage
        title="Success! Your Nutrition Guide is Ready"
        message="Your personalized nutrition guide has been generated successfully. Check your email for the complete guide and recommendations."
        additionalInfo={`Guide #${analytics.totalGuideDownloads + 1} | Calorie Target: ${nutritionGuide.calorieTarget} calories/day`}
        onReset={resetForm}
      />
    );
  }

  return (
    <motion.div
      className="bg-gray-50 p-6 sm:p-8 rounded-lg"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {isEligible ? (
        <>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center text-green-600">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span className="font-semibold">Available: {analytics.availableGuides} guides remaining</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Users className="h-5 w-5 mr-2" />
              <span>{analytics.totalGuideDownloads} people have unlocked this guide</span>
            </div>
          </div>

          <ProgressBar 
            current={analytics.totalGuideDownloads} 
            total={200} 
            label="Guide Availability" 
          />

          {errors.length > 0 && (
            <motion.div 
              className="bg-red-50 border border-red-200 p-4 rounded-lg mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="flex items-start">
                <AlertCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-red-800 font-semibold mb-2">Please fix the following errors:</h4>
                  <ul className="list-disc list-inside text-red-700 space-y-1">
                    {errors.map((error: string) => (
                      <li key={error}>{error}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}

          {isLoading ? (
            <LoadingSpinner message="Generating your personalized nutrition guide..." />
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Information */}
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormInput
                    id="name"
                    label="Full Name"
                    value={formData.name}
                    onChange={(value: string | number) => updateFormData('name', value)}
                    placeholder="Enter your full name"
                    required
                  />

                  <FormInput
                    id="email"
                    label="Email Address"
                    type="email"
                    value={formData.email}
                    onChange={(value: string | number) => updateFormData('email', value)}
                    placeholder="Enter your email"
                    required
                  />

                  <FormInput
                    id="phone"
                    label="Phone Number"
                    type="tel"
                    value={formData.phone}
                    onChange={(value: string | number) => updateFormData('phone', value)}
                    placeholder="Enter your phone number"
                    required
                  />

                  <FormSelect
                    id="fitnessGoal"
                    label="Primary Fitness Goal"
                    value={formData.fitnessGoal}
                    onChange={(value:string) => updateFormData('fitnessGoal', value)}
                    options={fitnessGoalOptions}
                    required
                  />
                </div>
              </div>

              {/* Physical Information (Optional) */}
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Physical Information</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Optional: Provide these details for more accurate calorie and macro calculations
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <FormInput
                    id="age"
                    label="Age"
                    type="number"
                    value={formData.age}
                    onChange={(value: string | number) => updateFormData('age', value)}
                    placeholder="Enter your age"
                  />

                  <FormSelect
                    id="gender"
                    label="Gender"
                    value={formData.gender}
                    onChange={(value: string) => updateFormData('gender', value)}
                    options={genderOptions}
                  />

                  <FormInput
                    id="weight"
                    label="Weight (kg)"
                    type="number"
                    value={formData.weight}
                    onChange={(value: string | number) => updateFormData('weight', value)}
                    placeholder="Enter weight in kg"
                  />

                  <FormInput
                    id="height"
                    label="Height (cm)"
                    type="number"
                    value={formData.height}
                    onChange={(value: string | number) => updateFormData('height', value)}
                    placeholder="Enter height in cm"
                  />
                </div>
              </div>

              {/* Lifestyle Information */}
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Lifestyle Information</h3>
                <div className="space-y-6">
                  <FormSelect
                    id="activityLevel"
                    label="Activity Level"
                    value={formData.activityLevel}
                    onChange={(value: string) => updateFormData('activityLevel', value)}
                    options={activityLevelOptions}
                    required
                  />

                  <FormTextarea
                    id="dietaryRestrictions"
                    label="Dietary Restrictions/Preferences"
                    value={formData.dietaryRestrictions}
                    onChange={(value: string) => updateFormData('dietaryRestrictions', value)}
                    placeholder="Tell us about any dietary restrictions, allergies, or preferences (e.g., vegetarian, gluten-free, lactose intolerant)..."
                    rows={4}
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={isLoading}
                className="w-full bg-yellow-400 hover:bg-yellow-500 disabled:bg-gray-400 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
                whileHover={{ scale: isLoading ? 1 : 1.02 }}
                whileTap={{ scale: isLoading ? 1 : 0.98 }}
              >
                <Download className="h-5 w-5 mr-2" />
                {isLoading ? 'Generating Guide...' : 'Get My Free Nutrition Guide'}
              </motion.button>
            </form>
          )}
        </>
      ) : (
        <motion.div 
          className="text-center py-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <AlertCircle className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">Guide Currently Unavailable</h3>
          <p className="text-gray-600 mb-6">
            We've reached our limit of 200 free nutrition guides. Check back next month for new availability!
          </p>
          <motion.button 
            className="bg-gray-400 text-white py-3 px-6 rounded-lg font-semibold cursor-not-allowed"
            disabled
          >
            Limit Reached ({analytics.totalGuideDownloads}/200)
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default NutritionForm;
