// Test file to verify nutrition calculations
import { ActivityLevel, FitnessGoal, Gender } from '../types';
import {
    calculateBMR,
    calculateCalorieTarget,
    calculateMacroTargets,
    calculateTDEE,
    generatePersonalizedRecommendations
} from '../utils/nutritionCalculations';

// Test data
const testUser = {
  weight: 70, // kg
  height: 175, // cm
  age: 25,
  gender: 'male' as Gender,
  activityLevel: 'moderately-active' as ActivityLevel,
  fitnessGoal: 'muscle-gain' as FitnessGoal
};

console.log('=== Nutrition Calculator Test ===');

// Test BMR calculation
const bmr = calculateBMR(testUser.weight, testUser.height, testUser.age, testUser.gender);
console.log(`BMR: ${Math.round(bmr)} calories/day`);

// Test TDEE calculation
const tdee = calculateTDEE(bmr, testUser.activityLevel);
console.log(`TDEE: ${Math.round(tdee)} calories/day`);

// Test calorie target
const calorieTarget = calculateCalorieTarget(tdee, testUser.fitnessGoal);
console.log(`Calorie Target: ${calorieTarget} calories/day`);

// Test macro calculations
const macros = calculateMacroTargets(calorieTarget, testUser.fitnessGoal);
console.log('Macronutrients:');
console.log(`  Protein: ${macros.protein}g (${Math.round(macros.protein * 4)} calories)`);
console.log(`  Carbs: ${macros.carbs}g (${Math.round(macros.carbs * 4)} calories)`);
console.log(`  Fat: ${macros.fat}g (${Math.round(macros.fat * 9)} calories)`);

// Test recommendations
const recommendations = generatePersonalizedRecommendations(
  testUser.fitnessGoal,
  '',
  testUser.activityLevel,
  testUser.age
);

console.log('\nPersonalized Recommendations:');
recommendations.forEach((rec, index) => {
  console.log(`${index + 1}. ${rec.category}: ${rec.recommendation}`);
  console.log(`   Reasoning: ${rec.reasoning}`);
  console.log(`   Priority: ${rec.priority}`);
});

export default function testNutritionCalculations() {
  return {
    bmr: Math.round(bmr),
    tdee: Math.round(tdee),
    calorieTarget,
    macros,
    recommendations
  };
}
