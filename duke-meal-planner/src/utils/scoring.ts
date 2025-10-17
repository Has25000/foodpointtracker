import { Answers, ScoreResult, MealPlan, MealPlans } from '../types';

// Scoring calculation logic for Duke Meal Plan Calculator
export const calculateScore = (answers: Answers): ScoreResult => {
  let totalScore = 0;
  const breakdown: ScoreResult['breakdown'] = {};

  // Coffee score (direct score)
  if (answers.coffee !== undefined) {
    breakdown.coffee = answers.coffee.score || 0;
    totalScore += breakdown.coffee;
  }

  // Breakfast score (frequency * price)
  if (answers.breakfast_frequency !== undefined && answers.breakfast_size !== undefined) {
    const frequency = answers.breakfast_frequency.score || 0;
    const price = answers.breakfast_size.price || 0;
    breakdown.breakfast = frequency * price;
    breakdown.breakfastItemPrice = price;
    totalScore += breakdown.breakfast;
  }

  // Lunch score (frequency * price)
  if (answers.lunch_frequency !== undefined && answers.lunch_size !== undefined) {
    const frequency = answers.lunch_frequency.score || 0;
    const price = answers.lunch_size.price || 0;
    breakdown.lunch = frequency * price;
    breakdown.lunchItemPrice = price;
    totalScore += breakdown.lunch;
  }

  // Dinner score (frequency * price)
  if (answers.dinner_frequency !== undefined && answers.dinner_size !== undefined) {
    const frequency = answers.dinner_frequency.score || 0;
    const price = answers.dinner_size.price || 0;
    breakdown.dinner = frequency * price;
    breakdown.dinnerItemPrice = price;
    totalScore += breakdown.dinner;
  }

  // Sweet treats score (direct score)
  if (answers.sweet_treats !== undefined) {
    breakdown.sweetTreats = answers.sweet_treats.score || 0;
    totalScore += breakdown.sweetTreats;
  }

  // Snacks score (direct score)
  if (answers.snacks !== undefined) {
    breakdown.snacks = answers.snacks.score || 0;
    totalScore += breakdown.snacks;
  }

  // Late night score (direct score)
  if (answers.late_night !== undefined) {
    breakdown.lateNight = answers.late_night.score || 0;
    totalScore += breakdown.lateNight;
  }

  // MOP score (direct score)
  if (answers.mop !== undefined) {
    breakdown.mop = answers.mop.score || 0;
    totalScore += breakdown.mop;
  }

  // Alcohol score (direct score)
  if (answers.alcohol !== undefined) {
    breakdown.alcohol = answers.alcohol.score || 0;
    totalScore += breakdown.alcohol;
  }

  // Duke Store score (direct score)
  if (answers.duke_store !== undefined) {
    breakdown.dukeStore = answers.duke_store.score || 0;
    totalScore += breakdown.dukeStore;
  }

  return {
    total: Math.round(totalScore * 10) / 10, // Round to 1 decimal place
    breakdown
  };
};

export const getMealPlan = (score: number, mealPlans: MealPlans): MealPlan => {
  if (score < mealPlans.planB.range[0]) {
    return mealPlans.planA;
  } else if (score < mealPlans.planC.range[0]) {
    return mealPlans.planB;
  } else {
    return mealPlans.planC;
  }
};

export const getScorePercentage = (score: number): number => {
  // Normalize score to a 0-100 scale for visual representation
  // Assuming max realistic score is around 400
  const maxScore = 400;
  return Math.min(100, (score / maxScore) * 100);
};
