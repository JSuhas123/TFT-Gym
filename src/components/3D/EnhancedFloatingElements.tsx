import { motion } from 'framer-motion';
import React from 'react';

interface FloatingElementProps {
  className?: string;
  delay?: number;
  duration?: number;
  children: React.ReactNode;
}

const FloatingElement: React.FC<FloatingElementProps> = ({ 
  className = "", 
  delay = 0, 
  duration = 4,
  children 
}) => (
  <motion.div
    className={`absolute ${className}`}
    animate={{
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      scale: [1, 1.05, 1],
    }}
    transition={{
      duration,
      repeat: Infinity,
      delay,
      ease: "easeInOut"
    }}
  >
    {children}
  </motion.div>
);

const FloatingDumbbell: React.FC<{ className?: string; delay?: number }> = ({ 
  className = "", 
  delay = 0 
}) => (
  <FloatingElement className={className} delay={delay}>
    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-2xl">
      <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29l-1.43-1.43z"/>
      </svg>
    </div>
  </FloatingElement>
);

const FloatingIcon: React.FC<{ 
  className?: string; 
  delay?: number; 
  icon: React.ReactNode;
  color?: string;
}> = ({ 
  className = "", 
  delay = 0, 
  icon,
  color = "yellow"
}) => (
  <FloatingElement className={className} delay={delay} duration={6}>
    <div className={`w-12 h-12 bg-gradient-to-br from-${color}-400 to-${color}-600 rounded-full flex items-center justify-center shadow-lg opacity-80`}>
      {icon}
    </div>
  </FloatingElement>
);

const EnhancedFloatingElements: React.FC<{ variant?: 'fitness' | 'nutrition' | 'trainers' | 'membership' }> = ({ 
  variant = 'fitness' 
}) => {
  const getIcons = () => {
    switch (variant) {
      case 'nutrition':
        return [
          <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24" key="apple">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>,
          <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24" key="leaf">
            <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z"/>
          </svg>
        ];
      case 'trainers':
        return [
          <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24" key="user">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>,
          <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24" key="trophy">
            <path d="M7 4V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2h4a1 1 0 0 1 1 1v5a4 4 0 0 1-4 4h-1.41A7.96 7.96 0 0 1 20 20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1 7.96 7.96 0 0 1 3.41-6H6a4 4 0 0 1-4-4V5a1 1 0 0 1 1-1h4z"/>
          </svg>
        ];
      default:
        return [
          <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24" key="dumbbell">
            <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29l-1.43-1.43z"/>
          </svg>,
          <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24" key="heart">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        ];
    }
  };

  const icons = getIcons();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <FloatingDumbbell className="top-20 left-10 hidden sm:block" delay={0} />
      <FloatingDumbbell className="top-40 right-20 hidden md:block" delay={1} />
      <FloatingDumbbell className="bottom-32 left-1/4 hidden lg:block" delay={2} />
      <FloatingDumbbell className="bottom-20 right-10 hidden sm:block" delay={0.5} />
      
      {/* Floating Icons */}
      <FloatingIcon 
        className="top-1/3 left-1/3 hidden md:block" 
        delay={0.5} 
        icon={icons[0]} 
      />
      <FloatingIcon 
        className="bottom-1/3 right-1/4 hidden lg:block" 
        delay={1.5} 
        icon={icons[1]} 
        color="orange"
      />
      
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-1/4 right-1/3 w-8 h-8 bg-yellow-400 opacity-20 hidden md:block"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 left-1/5 w-6 h-6 bg-yellow-500 rounded-full opacity-30 hidden sm:block"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Additional animated elements */}
      <motion.div
        className="absolute top-3/4 right-1/5 w-4 h-4 bg-gradient-to-r from-yellow-300 to-yellow-500 transform rotate-45 opacity-40 hidden lg:block"
        animate={{
          rotate: [45, 405],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default EnhancedFloatingElements;
