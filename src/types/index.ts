// Nutrition Types
export interface NutritionFormData {
  name: string;
  email: string;
  phone: string;
  fitnessGoal: FitnessGoal;
  dietaryRestrictions: string;
  age?: number;
  gender?: Gender;
  weight?: number;
  height?: number;
  activityLevel?: ActivityLevel;
}

export type FitnessGoal = 
  | 'weight-loss' 
  | 'muscle-gain' 
  | 'strength' 
  | 'endurance' 
  | 'general-fitness' 
  | 'athletic-performance';

export type Gender = 'male' | 'female' | 'other';

export type ActivityLevel = 'sedentary' | 'lightly-active' | 'moderately-active' | 'very-active' | 'extremely-active';

export interface NutritionTip {
  id: string;
  title: string;
  content: string;
  icon: string;
  color: string;
  category: 'pre-workout' | 'post-workout' | 'hydration' | 'timing' | 'balance' | 'supplements';
}

export interface MealPlan {
  id: string;
  name: string;
  description: string;
  calories: string;
  protein: string;
  carbs: string;
  features: string[];
  price?: number;
  duration?: string;
}

export interface NutritionGuide {
  id: string;
  userId: string;
  personalizedRecommendations: PersonalizedRecommendation[];
  mealPlan: MealPlan;
  calorieTarget: number;
  macroTargets: MacroTargets;
  createdAt: Date;
  downloadUrl?: string;
}

export interface PersonalizedRecommendation {
  category: string;
  recommendation: string;
  reasoning: string;
  priority: 'high' | 'medium' | 'low';
}

export interface MacroTargets {
  protein: number; // grams
  carbs: number; // grams
  fat: number; // grams
  fiber: number; // grams
}

// Trainer Types
export interface Trainer {
  id: string;
  name: string;
  title: string;
  experience: string;
  certifications: string[];
  specialties: string[];
  image: string;
  rating: number;
  clients: number;
  bio?: string;
  hourlyRate?: number;
  availability?: TrainerAvailability[];
}

export interface TrainerAvailability {
  day: string;
  timeSlots: string[];
}

// Membership Types
export interface MembershipPlan {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  price: string;
  period: string;
  popular: boolean;
  features: string[];
  description?: string;
  benefits?: string[];
}

// Form Validation Types
export interface FormValidationError {
  field: string;
  message: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  errors?: FormValidationError[];
}

// User Types
export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  membershipPlan?: string;
  fitnessGoals?: FitnessGoal[];
  preferences?: UserPreferences;
  createdAt: Date;
}

export interface UserPreferences {
  dietaryRestrictions: string[];
  preferredWorkoutTimes: string[];
  communicationPreferences: {
    email: boolean;
    sms: boolean;
    push: boolean;
  };
}

// Analytics Types
export interface NutritionAnalytics {
  totalGuideDownloads: number;
  availableGuides: number;
  popularFitnessGoals: { goal: FitnessGoal; count: number }[];
  conversionRate: number;
}
