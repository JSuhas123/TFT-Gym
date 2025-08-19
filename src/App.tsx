import { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { PageLayout } from './components/PageLayout';
import { AboutPage } from './pages/AboutPage';
import { ClassesPage } from './pages/ClassesPage';
import ContactPage from './pages/ContactPage';
import { GalleryPage } from './pages/GalleryPage';
import { HomePage } from './pages/HomePage';
import { NutritionPage } from './pages/NutritionPage';
//import { ProgramsPage } from './pages/ProgramsPage';
import { TrainersPage } from './pages/TrainersPage';

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleLogin = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <Router>
      <div className="min-h-screen bg-black">
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
            path="/classes" 
            element={
              <PageLayout onLogin={handleLogin}>
                <ClassesPage />
              </PageLayout>
            } 
          />
          <Route 
            path="/nutritio" 
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;