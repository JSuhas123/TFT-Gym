import { motion } from 'framer-motion';
import React from 'react';
import OptimizedImage from './OptimizedImage';

export const LoadingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
      <div className="text-center">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <OptimizedImage
            src="/logo1.png"
            alt="Thrust Fit Tribe"
            className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4"
            loading="eager"
            retryCount={3}
          />
          <h1 className="text-2xl sm:text-3xl font-bold text-white">
            <span className="text-yellow-600">Thrust</span> Fitness
          </h1>
        </motion.div>

        {/* Loading Animation */}
        <div className="flex justify-center items-center space-x-2">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-3 h-3 bg-yellow-600 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: index * 0.2,
              }}
            />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-gray-400 mt-4 text-sm sm:text-base"
        >
          Loading your fitness journey...
        </motion.p>
      </div>
    </div>
  );
};

export default LoadingPage;
