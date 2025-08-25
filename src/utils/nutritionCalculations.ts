import { ActivityLevel, FitnessGoal, Gender, MacroTargets, PersonalizedRecommendation } from '../types';

// Calorie calculation based on Harris-Benedict equation
export const calculateBMR = (weight: number, height: number, age: number, gender: Gender): number => {
  if (gender === 'male') {
    return 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
  } else {
    return 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
  }
};

export const calculateTDEE = (bmr: number, activityLevel: ActivityLevel): number => {
  const multipliers = {
    'sedentary': 1.2,
    'lightly-active': 1.375,
    'moderately-active': 1.55,
    'very-active': 1.725,
    'extremely-active': 1.9
  };
  
  return bmr * multipliers[activityLevel];
};

export const calculateCalorieTarget = (
  tdee: number,
  fitnessGoal: FitnessGoal
): number => {
  switch (fitnessGoal) {
    case 'weight-loss':
      return Math.round(tdee * 0.8); // 20% deficit
    case 'muscle-gain':
      return Math.round(tdee * 1.15); // 15% surplus
    case 'strength':
      return Math.round(tdee * 1.1); // 10% surplus
    case 'endurance':
      return Math.round(tdee * 1.05); // 5% surplus
    case 'athletic-performance':
      return Math.round(tdee * 1.1); // 10% surplus
    default:
      return Math.round(tdee); // maintenance
  }
};

export const calculateMacroTargets = (
  calories: number,
  fitnessGoal: FitnessGoal
): MacroTargets => {
  let proteinRatio: number;
  let fatRatio: number;
  let carbRatio: number;

  switch (fitnessGoal) {
    case 'weight-loss':
      proteinRatio = 0.35; // High protein for muscle preservation
      fatRatio = 0.25;
      carbRatio = 0.40;
      break;
    case 'muscle-gain':
      proteinRatio = 0.30;
      fatRatio = 0.25;
      carbRatio = 0.45;
      break;
    case 'strength':
      proteinRatio = 0.25;
      fatRatio = 0.25;
      carbRatio = 0.50;
      break;
    case 'endurance':
      proteinRatio = 0.20;
      fatRatio = 0.25;
      carbRatio = 0.55;
      break;
    case 'athletic-performance':
      proteinRatio = 0.27;
      fatRatio = 0.23;
      carbRatio = 0.50;
      break;
    default:
      proteinRatio = 0.25;
      fatRatio = 0.30;
      carbRatio = 0.45;
  }

  return {
    protein: Math.round((calories * proteinRatio) / 4), // 4 calories per gram
    carbs: Math.round((calories * carbRatio) / 4), // 4 calories per gram
    fat: Math.round((calories * fatRatio) / 9), // 9 calories per gram
    fiber: Math.round(calories / 1000 * 14) // 14g per 1000 calories
  };
};

export const generatePersonalizedRecommendations = (
  fitnessGoal: FitnessGoal,
  dietaryRestrictions: string,
  activityLevel: ActivityLevel,
  age?: number
): PersonalizedRecommendation[] => {
  const recommendations: PersonalizedRecommendation[] = [];

  // Goal-specific recommendations
  switch (fitnessGoal) {
    case 'weight-loss':
      recommendations.push({
        category: 'Calorie Management',
        recommendation: 'Focus on creating a moderate calorie deficit through portion control and nutrient-dense foods.',
        reasoning: 'A 500-750 calorie daily deficit promotes sustainable weight loss of 1-2 pounds per week.',
        priority: 'high'
      });
      recommendations.push({
        category: 'Protein Intake',
        recommendation: 'Increase protein to 1.2-1.6g per kg of body weight to preserve muscle mass during weight loss.',
        reasoning: 'Higher protein intake helps maintain lean muscle mass and increases satiety.',
        priority: 'high'
      });
      break;

    case 'muscle-gain':
      recommendations.push({
        category: 'Calorie Surplus',
        recommendation: 'Maintain a moderate calorie surplus of 300-500 calories above maintenance.',
        reasoning: 'A controlled surplus provides energy for muscle growth while minimizing fat gain.',
        priority: 'high'
      });
      recommendations.push({
        category: 'Protein Timing',
        recommendation: 'Consume 20-40g of protein within 2 hours post-workout for optimal muscle protein synthesis.',
        reasoning: 'Post-workout protein intake maximizes muscle recovery and growth.',
        priority: 'high'
      });
      break;

    case 'endurance':
      recommendations.push({
        category: 'Carbohydrate Loading',
        recommendation: 'Consume 7-12g of carbs per kg body weight daily, focusing on complex carbohydrates.',
        reasoning: 'Adequate carb intake ensures glycogen stores are optimized for endurance performance.',
        priority: 'high'
      });
      break;
  }

  // Activity level recommendations
  if (activityLevel === 'very-active' || activityLevel === 'extremely-active') {
    recommendations.push({
      category: 'Hydration',
      recommendation: 'Increase fluid intake to 3-4 liters daily, more during intense training days.',
      reasoning: 'High activity levels increase fluid needs for optimal performance and recovery.',
      priority: 'medium'
    });
  }

  // Dietary restriction considerations
  if (dietaryRestrictions.toLowerCase().includes('vegetarian') || 
      dietaryRestrictions.toLowerCase().includes('vegan')) {
    recommendations.push({
      category: 'Plant-Based Protein',
      recommendation: 'Combine complementary proteins (rice + beans, quinoa + nuts) to ensure complete amino acid profiles.',
      reasoning: 'Plant-based diets require strategic protein combining for optimal amino acid intake.',
      priority: 'medium'
    });
  }

  if (dietaryRestrictions.toLowerCase().includes('gluten')) {
    recommendations.push({
      category: 'Gluten-Free Carbs',
      recommendation: 'Focus on naturally gluten-free carbs: rice, quinoa, sweet potatoes, and fruits.',
      reasoning: 'These provide sustained energy without gluten-related digestive issues.',
      priority: 'medium'
    });
  }

  // Age-specific recommendations
  if (age && age > 50) {
    recommendations.push({
      category: 'Bone Health',
      recommendation: 'Ensure adequate calcium (1200mg) and vitamin D (800-1000 IU) intake daily.',
      reasoning: 'Older adults have increased needs for bone-supporting nutrients.',
      priority: 'medium'
    });
  }

  return recommendations;
};

export const validateNutritionForm = (formData: Record<string, unknown>): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  const name = formData.name as string;
  const email = formData.email as string;
  const phone = formData.phone as string;
  const fitnessGoal = formData.fitnessGoal as string;
  const age = formData.age as number;
  const weight = formData.weight as number;
  const height = formData.height as number;

  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    errors.push('Name must be at least 2 characters long');
  }

  if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push('Please enter a valid email address');
  }

  if (!phone || typeof phone !== 'string' || !/^\+?[\d\s-()]+$/.test(phone)) {
    errors.push('Please enter a valid phone number');
  }

  if (!fitnessGoal || typeof fitnessGoal !== 'string') {
    errors.push('Please select a fitness goal');
  }

  if (age && (typeof age !== 'number' || age < 13 || age > 100)) {
    errors.push('Age must be between 13 and 100');
  }

  if (weight && (typeof weight !== 'number' || weight < 30 || weight > 300)) {
    errors.push('Weight must be between 30 and 300 kg');
  }

  if (height && (typeof height !== 'number' || height < 100 || height > 250)) {
    errors.push('Height must be between 100 and 250 cm');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

export const formatMacroDisplay = (macros: MacroTargets): string => {
  return `${macros.protein}P / ${macros.carbs}C / ${macros.fat}F`;
};

export const calculateMacroPercentages = (macros: MacroTargets): { protein: number; carbs: number; fat: number } => {
  const totalCalories = (macros.protein * 4) + (macros.carbs * 4) + (macros.fat * 9);
  
  return {
    protein: Math.round((macros.protein * 4) / totalCalories * 100),
    carbs: Math.round((macros.carbs * 4) / totalCalories * 100),
    fat: Math.round((macros.fat * 9) / totalCalories * 100)
  };
};
