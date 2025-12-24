// Type definitions for Duke Meal Plan Calculator

// Drink item state for the new Coffee & Drinks section
export interface DrinkItem {
  id: string;
  name: string;
  frequencyIndex: number;  // which frequency option is selected
  useCustomPrice: boolean;
  customPrice: number;
  defaultPrice: number;    // $5 default
}

export interface DrinksState {
  coffee: DrinkItem;
  proteinShakes: DrinkItem;
  smoothies: DrinkItem;
  other: DrinkItem;
}

export interface DrinksBreakdown {
  coffee: number;
  proteinShakes: number;
  smoothies: number;
  other: number;
  total: number;
}

// Alcohol state - uses frequency options with direct weekly values
export interface AlcoholState {
  frequencyIndex: number;  // which frequency option is selected
  useCustomPrice: boolean;
  customPrice: number;
  defaultPrice: number;    // used when custom price is enabled
}

// Meal state for Breakfast, Lunch, Dinner
export interface MealSizeOption {
  label: string;
  price: number;
}

export interface MealFrequencyOption {
  label: string;
  score: number;  // times per week
}

export interface MealState {
  frequencyIndex: number;      // which frequency option is selected
  sizeIndex: number;           // which size option is selected
  useCustomPrice: boolean;
  customPrice: number;
}

export interface MealConfig {
  name: string;
  frequencyOptions: MealFrequencyOption[];
  sizeOptions: MealSizeOption[];
}

export interface MealsState {
  breakfast: MealState;
  lunch: MealState;
  dinner: MealState;
}

// Generic frequency item for Extras and Delivery sections
export interface FrequencyItem {
  id: string;
  name: string;
  frequencyIndex: number;    // which frequency option is selected
  useCustomPrice: boolean;
  customPrice: number;
  defaultPrice: number;
}

export interface FrequencyOption {
  label: string;
  timesPerWeek: number;  // actual frequency for calculation
}

export interface FrequencyItemConfig {
  id: string;
  name: string;
  question: string;
  defaultPrice: number;
  frequencyOptions: FrequencyOption[];
}

// Extras state (Sweet Treats, Snacks, Late Night)
export interface ExtrasState {
  sweetTreats: FrequencyItem;
  snacks: FrequencyItem;
  lateNight: FrequencyItem;
}

// Delivery state (MOP, Duke Store)
export interface DeliveryState {
  mop: FrequencyItem;
  dukeStore: FrequencyItem;
}

export interface QuestionOption {
  label: string;
  value: number;
  score?: number;
  price?: number;
}

export interface Question {
  id: string;
  category: string;
  question: string;
  type?: 'slider' | 'number';
  options: QuestionOption[];
}

export interface MealPlan {
  name: string;
  range: [number, number];
  description: string;
  details: string[];
  recommendation: string;
}

export interface MealPlans {
  planA: MealPlan;
  planB: MealPlan;
  planC: MealPlan;
  planD: MealPlan;
  planE: MealPlan;
}

export interface ScoreBreakdown {
  drinks?: DrinksBreakdown;
  breakfast?: number;
  breakfastItemPrice?: number;
  lunch?: number;
  lunchItemPrice?: number;
  dinner?: number;
  dinnerItemPrice?: number;
  sweetTreats?: number;
  snacks?: number;
  lateNight?: number;
  mop?: number;
  alcohol?: number;
  dukeStore?: number;
}

export interface ScoreResult {
  total: number;
  breakdown: ScoreBreakdown;
}

export interface Answers {
  [key: string]: QuestionOption;
}
