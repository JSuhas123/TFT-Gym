import { Component, Suspense, lazy } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { LoadingPage } from './components/LoadingPage';
import { PageLayout } from './components/PageLayout';
import SecretAdminAccess from './components/SecretAdminAccess';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage').then(module => ({ default: module.AboutPage })));
const TrainersPage = lazy(() => import('./pages/TrainersPage').then(module => ({ default: module.TrainersPage })));
const NutritionPage = lazy(() => import('./pages/NutritionPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage').then(module => ({ default: module.GalleryPage })));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const AdminPage = lazy(() => import('./pages/AdminPage'));

// Error Boundary Component
class ErrorBoundary extends Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): { hasError: boolean } {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white">
          <h1 className="text-3xl font-bold mb-4">Something went wrong.</h1>
          <p className="text-lg">Please refresh the page or try again later.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  const handleLogin = () => {
    // Login modal functionality can be implemented here
    console.log('Login functionality to be implemented');
  };

  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-black">
          <SecretAdminAccess />
          <Suspense fallback={<LoadingPage />}>
            <Routes>
              <Route 
                path="/" 
                element={
                  <PageLayout onLogin={handleLogin}>
                    <HomePage />
                  </PageLayout>
                } 
              />
              <Route 
                path="/about" 
                element={
                  <PageLayout onLogin={handleLogin}>
                    <AboutPage />
                  </PageLayout>
                } 
              />
              <Route 
                path="/trainers" 
                element={
                  <PageLayout onLogin={handleLogin}>
                    <TrainersPage />
                  </PageLayout>
                } 
              />
              <Route 
                path="/nutrition" 
                element={
                  <PageLayout onLogin={handleLogin}>
                    <NutritionPage />
                  </PageLayout>
                } 
              />
              <Route 
                path="/gallery" 
                element={
                  <PageLayout onLogin={handleLogin}>
                    <GalleryPage />
                  </PageLayout>
                } 
              />
              <Route 
                path="/contact" 
                element={
                  <PageLayout onLogin={handleLogin}>
                    <ContactPage />
                  </PageLayout>
                } 
              />
              {/* Hidden Admin Route - Secret URL with password protection */}
              <Route 
                path="/tft-secure-admin-2024" 
                element={<AdminPage />} 
              />
              {/* Catch-all route for 404s */}
              <Route 
                path="*" 
                element={
                  <PageLayout onLogin={handleLogin}>
                    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center text-center">
                      <div>
                        <h1 className="text-4xl font-bold text-white mb-4">404 - Page Not Found</h1>
                        <p className="text-gray-400 mb-6">The page you're looking for doesn't exist.</p>
                        <a
                          href="/"
                          className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded transition-colors"
                        >
                          Go Home
                        </a>
                      </div>
                    </div>
                  </PageLayout>
                } 
              />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;