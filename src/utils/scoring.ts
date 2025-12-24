import { ScoreResult, MealPlan, MealPlans, DrinksState, DrinksBreakdown, DrinkItem, AlcoholState, MealsState, MealState, MealConfig, ExtrasState, DeliveryState, FrequencyItem, FrequencyItemConfig } from '../types';
import { mealConfigs, extrasConfigs, deliveryConfigs, drinkFrequencyOptions, alcoholFrequencyOptions } from '../data/questions';

// Calculate individual drink item score using frequency options
const getDrinkItemScore = (item: DrinkItem): number => {
  const price = item.useCustomPrice ? item.customPrice : item.defaultPrice;
  const frequency = drinkFrequencyOptions[item.frequencyIndex]?.timesPerWeek || 0;
  return frequency * price;
};

// Calculate drinks breakdown
export const getDrinksBreakdown = (drinksState: DrinksState): DrinksBreakdown => {
  const coffee = getDrinkItemScore(drinksState.coffee);
  const proteinShakes = getDrinkItemScore(drinksState.proteinShakes);
  const smoothies = getDrinkItemScore(drinksState.smoothies);
  const other = getDrinkItemScore(drinksState.other);

  return {
    coffee,
    proteinShakes,
    smoothies,
    other,
    total: coffee + proteinShakes + smoothies + other
  };
};

// Calculate total drinks score
export const calculateDrinksScore = (drinksState: DrinksState): number => {
  return getDrinksBreakdown(drinksState).total;
};

// Calculate alcohol score using frequency options with direct weekly values
export const calculateAlcoholScore = (alcoholState: AlcoholState): number => {
  if (alcoholState.useCustomPrice) {
    return alcoholState.customPrice;
  }
  return alcoholFrequencyOptions[alcoholState.frequencyIndex]?.weeklyValue || 0;
};

// Calculate individual meal score
export const calculateMealScore = (mealState: MealState, mealConfig: MealConfig): { score: number; price: number } => {
  const frequency = mealConfig.frequencyOptions[mealState.frequencyIndex]?.score || 0;
  const price = mealState.useCustomPrice
    ? mealState.customPrice
    : mealConfig.sizeOptions[mealState.sizeIndex]?.price || 0;
  return {
    score: frequency * price,
    price
  };
};

// Calculate frequency item score (for Extras and Delivery)
export const calculateFrequencyItemScore = (item: FrequencyItem, config: FrequencyItemConfig): number => {
  const frequency = config.frequencyOptions[item.frequencyIndex]?.timesPerWeek || 0;
  const price = item.useCustomPrice ? item.customPrice : item.defaultPrice;
  return frequency * price;
};

// Scoring calculation logic for Duke Meal Plan Calculator
export const calculateScore = (
  drinksState?: DrinksState,
  alcoholState?: AlcoholState,
  mealsState?: MealsState,
  extrasState?: ExtrasState,
  deliveryState?: DeliveryState
): ScoreResult => {
  let totalScore = 0;
  const breakdown: ScoreResult['breakdown'] = {};

  // Drinks score (from drinks section)
  if (drinksState) {
    breakdown.drinks = getDrinksBreakdown(drinksState);
    totalScore += breakdown.drinks.total;
  }

  // Meal scores (from meal sections)
  if (mealsState) {
    const breakfastResult = calculateMealScore(mealsState.breakfast, mealConfigs.breakfast);
    breakdown.breakfast = breakfastResult.score;
    breakdown.breakfastItemPrice = breakfastResult.price;
    totalScore += breakdown.breakfast;

    const lunchResult = calculateMealScore(mealsState.lunch, mealConfigs.lunch);
    breakdown.lunch = lunchResult.score;
    breakdown.lunchItemPrice = lunchResult.price;
    totalScore += breakdown.lunch;

    const dinnerResult = calculateMealScore(mealsState.dinner, mealConfigs.dinner);
    breakdown.dinner = dinnerResult.score;
    breakdown.dinnerItemPrice = dinnerResult.price;
    totalScore += breakdown.dinner;
  }

  // Extras scores (from extras section)
  if (extrasState) {
    breakdown.sweetTreats = calculateFrequencyItemScore(extrasState.sweetTreats, extrasConfigs.sweetTreats);
    totalScore += breakdown.sweetTreats;

    breakdown.snacks = calculateFrequencyItemScore(extrasState.snacks, extrasConfigs.snacks);
    totalScore += breakdown.snacks;

    breakdown.lateNight = calculateFrequencyItemScore(extrasState.lateNight, extrasConfigs.lateNight);
    totalScore += breakdown.lateNight;
  }

  // Alcohol score (from alcohol section - monthly converted to weekly)
  if (alcoholState) {
    breakdown.alcohol = calculateAlcoholScore(alcoholState);
    totalScore += breakdown.alcohol;
  }

  // Delivery scores (from delivery section)
  if (deliveryState) {
    breakdown.mop = calculateFrequencyItemScore(deliveryState.mop, deliveryConfigs.mop);
    totalScore += breakdown.mop;

    breakdown.dukeStore = calculateFrequencyItemScore(deliveryState.dukeStore, deliveryConfigs.dukeStore);
    totalScore += breakdown.dukeStore;
  }

  return {
    total: Math.round(totalScore * 10) / 10, // Round to 1 decimal place
    breakdown
  };
};

export const getMealPlan = (score: number, mealPlans: MealPlans): MealPlan => {
  // A: <222, B: <245, C: <263, D: <287, E: >=287
  if (score < 222) {
    return mealPlans.planA;
  } else if (score < 245) {
    return mealPlans.planB;
  } else if (score < 263) {
    return mealPlans.planC;
  } else if (score < 287) {
    return mealPlans.planD;
  } else {
    return mealPlans.planE;
  }
};

export const getScorePercentage = (score: number): number => {
  // Normalize score to a 0-100 scale for visual representation
  // Assuming max realistic score is around 400
  const maxScore = 400;
  return Math.min(100, (score / maxScore) * 100);
};
