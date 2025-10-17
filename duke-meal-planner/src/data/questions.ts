import { Question, MealPlans } from '../types';

// Questions and scoring configuration for Duke Meal Plan Calculator
export const questions: Question[] = [
  {
    id: 'coffee',
    category: 'Coffee & Drinks',
    question: 'How often do you expect to buy coffee, protein shakes, smoothies, etc. on campus?',
    options: [
      { label: 'Never', value: 0, score: 0 },
      { label: 'Once or twice a week', value: 1, score: 10 },
      { label: 'Most weekdays (3-4 days)', value: 2, score: 17.5 },
      { label: 'Every weekday (5 days)', value: 3, score: 25 }
    ]
  },
  {
    id: 'breakfast_frequency',
    category: 'Breakfast',
    question: 'How often do you expect to buy breakfast on campus?',
    options: [
      { label: 'Never/Rarely', value: 0, score: 0 },
      { label: 'Once or twice a week', value: 1, score: 1 },
      { label: 'Most weekdays (3-4 days)', value: 2, score: 3.5 },
      { label: 'Every weekday (5 days)', value: 3, score: 5 },
      { label: 'Every day including weekends', value: 4, score: 7 }
    ]
  },
  {
    id: 'breakfast_size',
    category: 'Breakfast',
    question: 'When you DO buy breakfast, how big do your breakfasts tend to be?',
    options: [
      { label: 'Small snack (coffee & pastry)', value: 0, price: 4 },
      { label: 'Medium (biscuit, egg and cheese)', value: 1, price: 5.5 },
      { label: 'Large (combo meal)', value: 2, price: 7 }
    ]
  },
  {
    id: 'lunch_frequency',
    category: 'Lunch',
    question: 'How often do you expect to buy lunch on campus?',
    options: [
      { label: 'Never/Rarely', value: 0, score: 0 },
      { label: 'Once or twice a week', value: 1, score: 1 },
      { label: 'Most weekdays (3-4 days)', value: 2, score: 4 },
      { label: 'Every weekday (5 days)', value: 3, score: 5 },
      { label: 'Every day including weekends', value: 4, score: 7 }
    ]
  },
  {
    id: 'lunch_size',
    category: 'Lunch',
    question: 'When you DO buy lunch, how big do you expect your lunches to be?',
    options: [
      { label: 'Small (salad, soup)', value: 0, price: 8 },
      { label: 'Medium (sandwich or bowl)', value: 1, price: 10 },
      { label: 'Large (full meal with sides)', value: 2, price: 12 }
    ]
  },
  {
    id: 'dinner_frequency',
    category: 'Dinner',
    question: 'How often do you expect to buy dinner on campus?',
    options: [
      { label: 'Never/Rarely', value: 0, score: 0 },
      { label: 'Once or twice a week', value: 1, score: 1 },
      { label: 'Most weekdays (3-4 days)', value: 2, score: 4 },
      { label: 'Every weekday (5 days)', value: 3, score: 5 },
      { label: 'Every day including weekends', value: 4, score: 7 }
    ]
  },
  {
    id: 'dinner_size',
    category: 'Dinner',
    question: 'When you DO buy dinner, how big do you expect your dinners to be?',
    options: [
      { label: 'Small (light meal)', value: 0, price: 8 },
      { label: 'Medium (regular entree)', value: 1, price: 10 },
      { label: 'Large (full meal with sides)', value: 2, price: 12 }
    ]
  },
  {
    id: 'sweet_treats',
    category: 'Extras',
    question: 'How often do you anticipate purchasing "sweet treats" on campus (ice cream, milkshakes, desserts)?',
    options: [
      { label: 'Never', value: 0, score: 0 },
      { label: 'Once or twice a week', value: 1, score: 7.5 },
      { label: 'Most days (3-4 times/week)', value: 2, score: 16 },
      { label: 'Daily', value: 3, score: 25 }
    ]
  },
  {
    id: 'snacks',
    category: 'Extras',
    question: 'How often do you anticipate buying snacks between meals?',
    options: [
      { label: 'Never', value: 0, score: 0 },
      { label: 'Once or twice a week', value: 1, score: 6 },
      { label: 'Most days (3-4 times/week)', value: 2, score: 16.5 },
      { label: 'Daily or more', value: 3, score: 27 }
    ]
  },
  {
    id: 'late_night',
    category: 'Extras',
    question: 'How often do you see yourself getting late-night food on campus (e.g., Pitchforks)?',
    options: [
      { label: 'Never', value: 0, score: 0 },
      { label: 'Once or twice a week', value: 1, score: 11 },
      { label: 'Most nights (3-4 times/week)', value: 2, score: 41 },
      { label: 'Every night', value: 3, score: 71 }
    ]
  },
  {
    id: 'mop',
    category: 'Delivery & Other',
    question: 'How often do you see yourself ordering food for delivery using Merchants On Points (MOP)?',
    options: [
      { label: 'Never', value: 0, score: 0 },
      { label: 'Once or twice a week', value: 1, score: 24 },
      { label: '3-4 times a week', value: 2, score: 84 },
      { label: '5+ times a week', value: 3, score: 120 }
    ]
  },
  {
    id: 'alcohol',
    category: 'Delivery & Other',
    question: 'How often do you see yourself purchasing alcoholic beverages at on-campus bars (e.g. Devil\'s Krafthouse, Gothic Grill)?',
    options: [
      { label: 'Never', value: 0, score: 0 },
      { label: 'Once or twice a week', value: 1, score: 6 },
      { label: '3-4 times a week', value: 2, score: 9 },
      { label: '5+ times a week', value: 3, score: 12 }
    ]
  },
  {
    id: 'duke_store',
    category: 'Delivery & Other',
    question: 'How many food points would you like to budget for purchases at the Duke Store (convenience items, snacks, drinks)?',
    type: 'number',
    options: [
      { label: 'None ($0/week)', value: 0, score: 0 },
      { label: 'Minimal ($5-10/week)', value: 1, score: 7.5 },
      { label: 'Moderate ($15-25/week)', value: 2, score: 20 },
      { label: 'Significant ($30+/week)', value: 3, score: 35 }
    ]
  }
];

// Meal plan thresholds and information
export const mealPlans: MealPlans = {
  planA: {
    name: 'Plan A - Light User',
    range: [0, 199],
    description: 'Best for students who eat on campus occasionally',
    details: [
      'You primarily cook or eat off-campus',
      'You buy food on campus a few times per week',
      'You prefer flexibility and lower upfront costs',
      'Estimated weekly campus spending: $0-199'
    ],
    recommendation: 'Consider the smaller meal plan or pay-as-you-go with food points'
  },
  planB: {
    name: 'Plan B - Moderate User',
    range: [200, 249],
    description: 'Best for students who eat on campus most days',
    details: [
      'You eat on campus for most meals during the week',
      'You occasionally eat off-campus or cook',
      'You want a balance of structure and flexibility',
      'Estimated weekly campus spending: $200-249'
    ],
    recommendation: 'The medium meal plan offers good value for your eating habits'
  },
  planC: {
    name: 'Plan C - Heavy User',
    range: [250, 1000],
    description: 'Best for students who eat most meals on campus',
    details: [
      'You eat almost all meals on campus daily',
      'You frequently use campus delivery and extras',
      'You want unlimited access without worrying about costs',
      'Estimated weekly campus spending: $250+'
    ],
    recommendation: 'The unlimited or large meal plan provides the best value and convenience'
  }
};
