// Image asset management for Thrust Fit Tribe
// This ensures consistent image loading across all environments

export const TRAINER_IMAGES = {
  jacob: '/Jacob.JPG',
  karan: '/Karan.jpg',
  sendil: '/Sendil.jpg',
  vinod: '/Vinod.JPG',
  vishal: '/vishal.jpg'
} as const;

export const FALLBACK_IMAGES = {
  trainer: '/logo1.png',
  logo: '/logo1.png',
  placeholder: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMUYyOTM3Ii8+CjxwYXRoIGQ9Ik0yMDAgMTUwQzIyMS4yMDcgMTUwIDIzOCAxMzMuMjA3IDIzOCAxMTJDMjM4IDkwLjc5MjkgMjIxLjIwNyA3NCAyMDAgNzRDMTc4Ljc5MyA3NCAxNjIgOTAuNzkyOSAxNjIgMTEyQzE2MiAxMzMuMjA3IDE3OC43OTMgMTUwIDIwMCAxNTBaIiBmaWxsPSIjNDc0NzQ3Ii8+CjxwYXRoIGQ9Ik0xNDAgMjI2VjIxNEMxNDAgMTk2LjMyNyAxNTQuMzI3IDE4MiAxNzIgMTgySDIyOEMyNDUuNjczIDE4MiAyNjAgMTk2LjMyNyAyNjAgMjE0VjIyNkgxNDBaIiBmaWxsPSIjNDc0NzQ3Ii8+Cjx0ZXh0IHg9IjIwMCIgeT0iMjYwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjRENCNDA0IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiPkltYWdlIE5vdCBBdmFpbGFibGU8L3RleHQ+Cjwvc3ZnPgo='
} as const;

// Supported image formats for deployment
export const SUPPORTED_IMAGE_FORMATS = ['.jpg', '.jpeg', '.png', '.webp', '.svg'] as const;

// Enhanced image validation utility for production environments
export const validateImageUrl = (url: string): boolean => {
  if (!url || url.trim() === '') return false;
  
  // Check if it's an external URL
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return true;
  }
  
  // Check if it's a valid local path
  if (url.startsWith('/')) {
    const extension = url.toLowerCase().match(/\.(jpg|jpeg|png|webp|svg)$/);
    return extension !== null;
  }
  
  return false;
};

// Get optimized image URL with fallback and case handling
export const getImageUrl = (imageName: string, fallback: string = FALLBACK_IMAGES.trainer): string => {
  const url = TRAINER_IMAGES[imageName as keyof typeof TRAINER_IMAGES] || imageName;
  
  if (validateImageUrl(url)) {
    return url;
  }
  
  return fallback;
};

// Enhanced trainer image getter with multiple fallback strategies
export const getTrainerImage = (trainerName: string): string => {
  const normalizedName = trainerName.toLowerCase();
  const imageUrl = getImageUrl(normalizedName, FALLBACK_IMAGES.trainer);
  
  // For production deployment, ensure the path is absolute
  if (imageUrl.startsWith('/') && !imageUrl.includes('data:')) {
    return imageUrl;
  }
  
  return imageUrl;
};

export default {
  TRAINER_IMAGES,
  FALLBACK_IMAGES,
  SUPPORTED_IMAGE_FORMATS,
  validateImageUrl,
  getImageUrl
};
