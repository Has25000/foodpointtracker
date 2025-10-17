// Type definitions for Duke Meal Plan Calculator

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
}

export interface ScoreBreakdown {
  coffee?: number;
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
