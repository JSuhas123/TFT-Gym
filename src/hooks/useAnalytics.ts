import { track } from '@vercel/analytics';

// Custom analytics tracking functions
export const analyticsEvents = {
  // Navigation tracking
  pageView: (page: string) => {
    track('page_view', { page });
  },

  // Social media clicks
  socialClick: (platform: string) => {
    track('social_click', { platform });
  },

  // Contact interactions
  contactFormSubmit: () => {
    track('contact_form_submit');
  },

  phoneClick: () => {
    track('phone_click');
  },

  emailClick: () => {
    track('email_click');
  },

  // Map interactions
  mapDirectionsClick: (service: string) => {
    track('map_directions_click', { service });
  },

  // Class/program interests
  classInterest: (className: string) => {
    track('class_interest', { class: className });
  },

  trainerView: (trainerName: string) => {
    track('trainer_view', { trainer: trainerName });
  },

  // Gallery interactions
  galleryImageView: (imageType: string) => {
    track('gallery_image_view', { type: imageType });
  },

  // Video interactions
  videoLoaded: () => {
    track('hero_video_loaded');
  },

  videoError: () => {
    track('hero_video_error');
  },

  // Performance tracking
  pageLoadTime: (duration: number) => {
    track('page_load_time', { duration });
  },

  // Error tracking
  errorOccurred: (error: string, context: string) => {
    track('error_occurred', { error, context });
  }
};

// Hook for easy analytics tracking
export const useAnalytics = () => {
  return analyticsEvents;
};
