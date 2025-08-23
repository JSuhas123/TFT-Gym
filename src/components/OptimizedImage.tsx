import React, { useEffect, useState } from 'react';
import { FALLBACK_IMAGES, validateImageUrl } from '../utils/imageUtils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
  loading?: 'lazy' | 'eager';
  retryCount?: number;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  fallbackSrc = FALLBACK_IMAGES.trainer,
  loading = 'lazy',
  retryCount = 2
}) => {
  const [imgSrc, setImgSrc] = useState(() => {
    // Validate initial src and use fallback if invalid
    return validateImageUrl(src) ? src : fallbackSrc;
  });
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [attempts, setAttempts] = useState(0);

  // Reset state when src prop changes
  useEffect(() => {
    const validSrc = validateImageUrl(src) ? src : fallbackSrc;
    if (validSrc !== imgSrc) {
      setImgSrc(validSrc);
      setIsLoading(true);
      setHasError(false);
      setAttempts(0);
    }
  }, [src, fallbackSrc, imgSrc]);

  const handleImageLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
    
    // Try fallback strategies
    if (attempts < retryCount) {
      setAttempts(prev => prev + 1);
      
      // First attempt: try with different extension if it's a local file
      if (attempts === 0 && imgSrc.startsWith('/')) {
        const baseName = imgSrc.replace(/\.[^/.]+$/, '');
        const currentExt = imgSrc.split('.').pop()?.toLowerCase();
        
        let newSrc = imgSrc;
        if (currentExt === 'jpg') {
          newSrc = baseName + '.jpeg';
        } else if (currentExt === 'jpeg') {
          newSrc = baseName + '.png';
        } else if (currentExt === 'png') {
          newSrc = baseName + '.jpg';
        }
        
        if (newSrc !== imgSrc) {
          setImgSrc(newSrc);
          setIsLoading(true);
          return;
        }
      }
      
      // Second attempt: use fallback
      if (attempts === 1 && imgSrc !== fallbackSrc) {
        setImgSrc(fallbackSrc);
        setIsLoading(true);
        return;
      }
    }
    
    // Final fallback: show placeholder
    setHasError(true);
    setImgSrc(FALLBACK_IMAGES.placeholder);
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {isLoading && !hasError && (
        <div className="absolute inset-0 bg-gray-800 animate-pulse rounded-lg flex items-center justify-center z-10">
          <div className="w-8 h-8 border-2 border-yellow-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      <img
        src={imgSrc}
        alt={alt}
        loading={loading}
        onLoad={handleImageLoad}
        onError={handleImageError}
        className={`${className.includes('w-') ? '' : 'w-full h-full'} object-cover transition-all duration-500 ${
          isLoading ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
        } ${hasError ? 'filter grayscale' : ''}`}
        style={{
          minHeight: hasError ? '200px' : 'auto'
        }}
      />
      
      {hasError && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex flex-col items-center justify-center text-center p-4">
          <div className="w-16 h-16 bg-yellow-600/20 rounded-full flex items-center justify-center mb-3">
            <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <span className="text-gray-400 text-sm font-medium">{alt}</span>
          <span className="text-gray-500 text-xs mt-1">Image temporarily unavailable</span>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
