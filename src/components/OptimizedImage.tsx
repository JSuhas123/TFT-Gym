import React, { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
  loading?: 'lazy' | 'eager';
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  fallbackSrc = '/logo1.png',
  loading = 'lazy'
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleImageLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
    setHasError(true);
    if (imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
    }
  };

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-800 animate-pulse rounded-lg flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-yellow-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <img
        src={imgSrc}
        alt={alt}
        loading={loading}
        onLoad={handleImageLoad}
        onError={handleImageError}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
      />
      {hasError && imgSrc === fallbackSrc && (
        <div className="absolute inset-0 bg-gray-800 rounded-lg flex items-center justify-center">
          <span className="text-gray-400 text-sm">Image unavailable</span>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
