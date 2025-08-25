import { motion } from 'framer-motion';
import { Instagram, Sparkles, Trophy, Zap } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { useAnalytics } from '../hooks/useAnalytics';


export const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const analytics = useAnalytics();

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Preload video metadata
      video.load();
      
      const handleCanPlay = () => {
        setVideoLoaded(true);
        analytics.videoLoaded();
      };
      
      const handleError = () => {
        setVideoError(true);
        analytics.videoError();
      };
      
      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('error', handleError);
      
      return () => {
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('error', handleError);
      };
    }
  }, [analytics]);

  const socialLinks = [
    { icon: Instagram, url: "https://www.instagram.com/thrust.fitness?igsh=d2NveHA2cjJreHg3", label: "Instagram" },
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        {/* Fallback background while video loads */}
        {(!videoLoaded || videoError) && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800" />
        )}
        
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/logo1.png"
          className={`w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded && !videoError ? 'opacity-100' : 'opacity-0'
          }`}
          onLoadedData={() => setVideoLoaded(true)}
          onError={() => setVideoError(true)}
        >
          <source src="/TFTPage.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-60" />
      </div>

      {/* Social Media Icons - Fixed Position */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="fixed left-3 sm:left-4 lg:left-6 top-1/2 transform -translate-y-1/2 z-20 flex flex-col space-y-3 sm:space-y-4 hidden md:flex"
      >
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.label}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.7 + index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.2, x: 10 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => analytics.socialClick(social.label.toLowerCase())}
          >
            <motion.div 
              className="w-10 h-10 sm:w-12 sm:h-12 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center border border-yellow-600/30 hover:bg-yellow-600/20 hover:border-yellow-600/60 transition-all duration-300"
              whileHover={{ 
                boxShadow: "0 0 20px rgba(202, 138, 4, 0.4)",
                borderColor: "rgba(202, 138, 4, 0.8)"
              }}
            >
              <social.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-yellow-400 transition-colors" />
            </motion.div>
            
            {/* Tooltip */}
            <motion.div
              className="absolute left-12 sm:left-16 top-1/2 transform -translate-y-1/2 bg-black/80 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-md text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap"
              initial={{ opacity: 0, x: -10 }}
              whileHover={{ opacity: 1, x: 0 }}
            >
              {social.label}
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-black/80 rotate-45"></div>
            </motion.div>
          </motion.a>
        ))}
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white mb-4 sm:mb-6 leading-tight"
        >
          <motion.span 
            className="text-yellow-600"
            animate={{ 
              textShadow: [
                "0 0 20px rgba(202, 138, 4, 0.5)",
                "0 0 40px rgba(202, 138, 4, 0.8)",
                "0 0 20px rgba(202, 138, 4, 0.5)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Thrust
          </motion.span>{' '}
          <br className="sm:hidden" />
          Fit Tribe
        </motion.h1>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mb-8 sm:mb-10 lg:mb-12"
        >
          <motion.p 
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Get ready to transform your body and mind. Join our Gym and be the first to experience the 
            <motion.span 
              className="text-yellow-400 font-semibold"
              animate={{ color: ["#fde68a", "#facc15", "#fde68a"] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {" "}future of fitness
            </motion.span>.
          </motion.p>
        </motion.div>

        {/* Features Preview */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
          className="mt-8 sm:mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-white"
        >
          {[
            { icon: Zap, number: "5:30AM-10:30PM", label: "Access", delay: 0 },
            { icon: Trophy, number: "40+", label: "Equipment", delay: 0.1 },
            { icon: Sparkles, number: "Expert", label: "Trainers", delay: 0.2 }
          ].map((feature, index) => (
            <motion.div 
              key={feature.label}
              className="text-center group cursor-pointer"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.1 + feature.delay, duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
            >
              <motion.div 
                className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-yellow-600/20 rounded-full mb-3 sm:mb-4 group-hover:bg-yellow-600/40 transition-colors"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-yellow-400" />
              </motion.div>
              <motion.div 
                className="text-xl sm:text-2xl lg:text-3xl font-bold text-yellow-600 mb-1 sm:mb-2"
                animate={{ 
                  scale: [1, 1.1, 1],
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  delay: index * 0.5 
                }}
              >
                {feature.number}
              </motion.div>
              <div className="text-sm sm:text-base lg:text-lg group-hover:text-yellow-200 transition-colors">
                {feature.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Social Media Bar - Mobile Only */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mt-12 sm:mt-16 lg:mt-20 block md:hidden"
        >
          <div className="flex justify-center space-x-4 sm:space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 2 + index * 0.1, duration: 0.3 }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => analytics.socialClick(social.label.toLowerCase())}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center border border-yellow-600/30 hover:bg-yellow-600/20 hover:border-yellow-600/60 transition-all duration-300">
                  <social.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-yellow-400 transition-colors" />
                </div>
              </motion.a>
            ))}
          </div>
          <motion.p 
            className="text-gray-400 text-xs sm:text-sm mt-3 sm:mt-4 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.5 }}
          >
            Follow us for updates and fitness tips
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;