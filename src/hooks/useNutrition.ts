import { useCallback, useEffect, useState } from 'react';
import { FitnessGoal, NutritionAnalytics, NutritionFormData, NutritionGuide } from '../types';
import {
    calculateBMR,
    calculateCalorieTarget,
    calculateMacroTargets,
    calculateTDEE,
    generatePersonalizedRecommendations,
    validateNutritionForm
} from '../utils/nutritionCalculations';

export const useNutritionForm = () => {
  const [formData, setFormData] = useState<Partial<NutritionFormData>>({
    name: '',
    email: '',
    phone: '',
    fitnessGoal: 'general-fitness',
    dietaryRestrictions: '',
    age: undefined,
    gender: undefined,
    weight: undefined,
    height: undefined,
    activityLevel: 'moderately-active'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [nutritionGuide, setNutritionGuide] = useState<NutritionGuide | null>(null);

  const updateFormData = useCallback((field: keyof NutritionFormData, value: string | number | undefined) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    // Clear errors when user starts typing
    if (errors.length > 0) {
      setErrors([]);
    }
  }, [errors.length]);

  const validateForm = useCallback(() => {
    const validation = validateNutritionForm(formData);
    setErrors(validation.errors);
    return validation.isValid;
  }, [formData]);

  const generateNutritionGuide = useCallback(async () => {
    if (!validateForm()) {
      return false;
    }

    setIsLoading(true);
    try {
      // Calculate nutrition metrics if physical data is provided
      let calorieTarget = 2000; // Default
      let macroTargets = calculateMacroTargets(calorieTarget, formData.fitnessGoal!);

      if (formData.weight && formData.height && formData.age && formData.gender) {
        const bmr = calculateBMR(formData.weight, formData.height, formData.age, formData.gender);
        const tdee = calculateTDEE(bmr, formData.activityLevel!);
        calorieTarget = calculateCalorieTarget(tdee, formData.fitnessGoal!);
        macroTargets = calculateMacroTargets(calorieTarget, formData.fitnessGoal!);
      }

      const recommendations = generatePersonalizedRecommendations(
        formData.fitnessGoal!,
        formData.dietaryRestrictions || '',
        formData.activityLevel!,
        formData.age
      );

      const guide: NutritionGuide = {
        id: Date.now().toString(),
        userId: formData.email!,
        personalizedRecommendations: recommendations,
        mealPlan: {
          id: `${formData.fitnessGoal}-plan`,
          name: `${formData.fitnessGoal} Plan`,
          description: `Customized meal plan for ${formData.fitnessGoal}`,
          calories: calorieTarget.toString(),
          protein: 'Optimized',
          carbs: 'Balanced',
          features: ['Personalized', 'Goal-specific', 'Science-based']
        },
        calorieTarget,
        macroTargets,
        createdAt: new Date(),
        downloadUrl: `/api/guides/${Date.now()}.pdf`
      };

      setNutritionGuide(guide);
      setIsSubmitted(true);

      // Save to localStorage for persistence
      localStorage.setItem('nutritionGuide', JSON.stringify(guide));
      
      // Update analytics
      const currentCount = parseInt(localStorage.getItem('nutritionUnlockCount') || '0');
      localStorage.setItem('nutritionUnlockCount', (currentCount + 1).toString());

      return true;
    } catch (error) {
      console.error('Error generating nutrition guide:', error);
      setErrors(['Failed to generate nutrition guide. Please try again.']);
      return false;
    } finally {
      setIsLoading(false);
    }
  }, [formData, validateForm]);

  const resetForm = useCallback(() => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      fitnessGoal: 'general-fitness',
      dietaryRestrictions: '',
      age: undefined,
      gender: undefined,
      weight: undefined,
      height: undefined,
      activityLevel: 'moderately-active'
    });
    setIsSubmitted(false);
    setErrors([]);
    setNutritionGuide(null);
  }, []);

  return {
    formData,
    updateFormData,
    isSubmitted,
    isLoading,
    errors,
    nutritionGuide,
    generateNutritionGuide,
    resetForm,
    validateForm
  };
};

export const useNutritionAnalytics = () => {
  const [analytics, setAnalytics] = useState<NutritionAnalytics>({
    totalGuideDownloads: 0,
    availableGuides: 200,
    popularFitnessGoals: [],
    conversionRate: 0
  });

  useEffect(() => {
    const loadAnalytics = () => {
      const currentCount = parseInt(localStorage.getItem('nutritionUnlockCount') || '0');
      const goalCounts = JSON.parse(localStorage.getItem('fitnessGoalCounts') || '{}');
      
      setAnalytics({
        totalGuideDownloads: currentCount,
        availableGuides: Math.max(0, 200 - currentCount),
        popularFitnessGoals: Object.entries(goalCounts).map(([goal, count]) => ({
          goal: goal as FitnessGoal,
          count: count as number
        })),
        conversionRate: currentCount > 0 ? (currentCount / (currentCount + 50)) * 100 : 0
      });
    };

    loadAnalytics();
    
    // Update analytics every minute
    const interval = setInterval(loadAnalytics, 60000);
    
    return () => clearInterval(interval);
  }, []);

  const trackGoalSelection = useCallback((goal: string) => {
    const goalCounts = JSON.parse(localStorage.getItem('fitnessGoalCounts') || '{}');
    goalCounts[goal] = (goalCounts[goal] || 0) + 1;
    localStorage.setItem('fitnessGoalCounts', JSON.stringify(goalCounts));
  }, []);

  return {
    analytics,
    trackGoalSelection
  };
};
