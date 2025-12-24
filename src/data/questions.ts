import { Question, MealPlans, DrinksState, AlcoholState, MealConfig, MealsState, FrequencyItemConfig, ExtrasState, DeliveryState } from '../types';

// Drink frequency options (from drink_freq_per_week_from_C)
export const drinkFrequencyOptions = [
  { label: 'Never', timesPerWeek: 0 },
  { label: 'Once or twice a week', timesPerWeek: 2 },
  { label: 'Most weekdays', timesPerWeek: 3.5 },
  { label: 'Every weekday', timesPerWeek: 5 },
  { label: 'Every day, including weekends', timesPerWeek: 7 },
  { label: 'Multiple times a day', timesPerWeek: 10 }
];

// Default state for the Coffee & Drinks section
export const drinkDefaults: DrinksState = {
  coffee: {
    id: 'coffee',
    name: 'Coffee',
    frequencyIndex: 0,
    useCustomPrice: false,
    customPrice: 5,
    defaultPrice: 5
  },
  proteinShakes: {
    id: 'proteinShakes',
    name: 'Protein Shakes',
    frequencyIndex: 0,
    useCustomPrice: false,
    customPrice: 5,
    defaultPrice: 5
  },
  smoothies: {
    id: 'smoothies',
    name: 'Smoothies',
    frequencyIndex: 0,
    useCustomPrice: false,
    customPrice: 5,
    defaultPrice: 5
  },
  other: {
    id: 'other',
    name: 'Other Drinks',
    frequencyIndex: 0,
    useCustomPrice: false,
    customPrice: 5,
    defaultPrice: 5
  }
};

// Alcohol frequency options with direct weekly values (from alcoholic_drinks_value_from_N)
export const alcoholFrequencyOptions = [
  { label: 'Never', weeklyValue: 0 },
  { label: 'About once or twice a month', weeklyValue: 4.5 },
  { label: 'About once a week', weeklyValue: 12 },
  { label: 'More than once a week', weeklyValue: 18 },
  { label: '3+ drinks per week', weeklyValue: 21 }
];

// Default state for the Alcoholic Drinks section
export const alcoholDefaults: AlcoholState = {
  frequencyIndex: 0,
  useCustomPrice: false,
  customPrice: 12,
  defaultPrice: 12 // Used when custom price is enabled
};

// Meal configurations with correct values from data
export const mealConfigs: { breakfast: MealConfig; lunch: MealConfig; dinner: MealConfig } = {
  breakfast: {
    name: 'Breakfast',
    frequencyOptions: [
      { label: 'Never/Rarely', score: 0 },
      { label: 'Once or twice a week', score: 2 },
      { label: 'Most weekdays', score: 3.5 },
      { label: 'Every weekday', score: 5 },
      { label: 'Every day, including weekends', score: 7 }
    ],
    sizeOptions: [
      { label: 'I never eat breakfast on campus', price: 0 },
      { label: 'Small snack (e.g. fruit or plain biscuit)', price: 4 },
      { label: 'Small-medium', price: 5.5 },
      { label: 'Medium (e.g. biscuit, egg and cheese w/ protein)', price: 7 },
      { label: 'Medium-large', price: 8.5 },
      { label: 'Large (e.g. breakfast plate)', price: 10 }
    ]
  },
  lunch: {
    name: 'Lunch',
    frequencyOptions: [
      { label: 'Never/Rarely', score: 0 },
      { label: 'Once or twice a week', score: 2 },
      { label: 'Most weekdays', score: 4 },
      { label: 'Every weekday', score: 5 },
      { label: 'Every day, including weekends', score: 7 }
    ],
    sizeOptions: [
      { label: 'Small (cheaper entrees, five-dollar deals)', price: 8 },
      { label: 'Small-medium', price: 10 },
      { label: 'Medium (normal entrees, no additional sides)', price: 12 },
      { label: 'Medium-large', price: 14 },
      { label: 'Large (more expensive entrees, sides)', price: 16 }
    ]
  },
  dinner: {
    name: 'Dinner',
    frequencyOptions: [
      { label: 'Never/Rarely', score: 0 },
      { label: 'Once or twice a week', score: 2 },
      { label: 'Most weekdays', score: 4 },
      { label: 'Every weekday', score: 5 },
      { label: 'Every day, including weekends', score: 7 }
    ],
    sizeOptions: [
      { label: 'Small (cheaper entrees, five-dollar deals)', price: 8 },
      { label: 'Small-medium', price: 10 },
      { label: 'Medium (normal entrees)', price: 12 },
      { label: 'Medium-large', price: 14 },
      { label: 'Large (more expensive entrees, sides)', price: 16 }
    ]
  }
};

// Default state for meals
export const mealsDefaults: MealsState = {
  breakfast: {
    frequencyIndex: 0,
    sizeIndex: 3, // Medium as default
    useCustomPrice: false,
    customPrice: 7
  },
  lunch: {
    frequencyIndex: 0,
    sizeIndex: 2, // Medium as default
    useCustomPrice: false,
    customPrice: 12
  },
  dinner: {
    frequencyIndex: 0,
    sizeIndex: 2, // Medium as default
    useCustomPrice: false,
    customPrice: 12
  }
};

// Extras configurations with correct frequency values
export const extrasConfigs: { sweetTreats: FrequencyItemConfig; snacks: FrequencyItemConfig; lateNight: FrequencyItemConfig } = {
  sweetTreats: {
    id: 'sweetTreats',
    name: 'Sweet Treats',
    question: 'How often do you anticipate purchasing sweet treats (ice cream, milkshakes, desserts)?',
    defaultPrice: 5, // sweets_cost_per_time: 5
    frequencyOptions: [
      { label: 'Never', timesPerWeek: 0 },
      { label: 'Once or twice a week', timesPerWeek: 1.5 },
      { label: 'Most weekdays', timesPerWeek: 3.5 },
      { label: 'Every weekday', timesPerWeek: 5 },
      { label: 'Every day, including weekends', timesPerWeek: 6.75 },
      { label: 'Multiple times a day', timesPerWeek: 14 }
    ]
  },
  snacks: {
    id: 'snacks',
    name: 'Snacks',
    question: 'How often do you anticipate buying snacks between meals?',
    defaultPrice: 4, // snack_cost_per_time: 4
    frequencyOptions: [
      { label: 'Never', timesPerWeek: 0 },
      { label: 'Once or twice a week', timesPerWeek: 1.5 },
      { label: 'Most weekdays', timesPerWeek: 3.5 },
      { label: 'Every weekday', timesPerWeek: 5 },
      { label: 'Every day, including weekends', timesPerWeek: 6.75 },
      { label: 'Multiple times a day', timesPerWeek: 10 }
    ]
  },
  lateNight: {
    id: 'lateNight',
    name: 'Late Night Food',
    question: 'How often do you see yourself getting late-night food (e.g., Pitchforks)?',
    defaultPrice: 11, // late_night_food_cost_per_time: 11
    frequencyOptions: [
      { label: 'Never', timesPerWeek: 0 },
      { label: 'About once a week', timesPerWeek: 1 },
      { label: '2-3 times a week', timesPerWeek: 2.5 },
      { label: '4+ times a week', timesPerWeek: 5 },
      { label: 'Nearly every day', timesPerWeek: 6.5 }
    ]
  }
};

// Extras defaults
export const extrasDefaults: ExtrasState = {
  sweetTreats: {
    id: 'sweetTreats',
    name: 'Sweet Treats',
    frequencyIndex: 0,
    useCustomPrice: false,
    customPrice: 5,
    defaultPrice: 5
  },
  snacks: {
    id: 'snacks',
    name: 'Snacks',
    frequencyIndex: 0,
    useCustomPrice: false,
    customPrice: 4,
    defaultPrice: 4
  },
  lateNight: {
    id: 'lateNight',
    name: 'Late Night Food',
    frequencyIndex: 0,
    useCustomPrice: false,
    customPrice: 11,
    defaultPrice: 11
  }
};

// Delivery configurations - using direct weekly values
export const deliveryConfigs: { mop: FrequencyItemConfig; dukeStore: FrequencyItemConfig } = {
  mop: {
    id: 'mop',
    name: 'MOP Delivery',
    question: 'How often do you see yourself ordering food using Merchants On Points (MOP)?',
    defaultPrice: 1, // Price is 1 because options contain direct weekly values
    frequencyOptions: [
      { label: 'Never', timesPerWeek: 0 },
      { label: 'Once or twice a month', timesPerWeek: 3 },
      { label: 'About once a week', timesPerWeek: 8 },
      { label: 'More than once a week', timesPerWeek: 16 }
    ]
  },
  dukeStore: {
    id: 'dukeStore',
    name: 'Duke Store',
    question: 'How many food points would you like to budget for purchases at the Duke Store (including on-campus convenience stores)?',
    defaultPrice: 1, // Price is 1 because options contain direct weekly values
    frequencyOptions: [
      { label: 'None', timesPerWeek: 0 },
      { label: '$10 per week', timesPerWeek: 10 },
      { label: '$20 per week', timesPerWeek: 20 },
      { label: '$30 per week', timesPerWeek: 30 }
    ]
  }
};

// Delivery defaults
export const deliveryDefaults: DeliveryState = {
  mop: {
    id: 'mop',
    name: 'MOP Delivery',
    frequencyIndex: 0,
    useCustomPrice: false,
    customPrice: 8,
    defaultPrice: 1
  },
  dukeStore: {
    id: 'dukeStore',
    name: 'Duke Store',
    frequencyIndex: 0,
    useCustomPrice: false,
    customPrice: 10,
    defaultPrice: 1
  }
};

// Questions array is now empty since all sections are handled by custom components
export const questions: Question[] = [];

// Meal plan thresholds and information
// A: <222, B: <245, C: <263, D: <287, E: >=287
export const mealPlans: MealPlans = {
  planA: {
    name: 'Plan A',
    range: [0, 221],
    description: 'Best for students who eat on campus occasionally',
    details: [
      'You primarily cook or eat off-campus',
      'You buy food on campus a few times per week',
      'You prefer flexibility and lower upfront costs',
      'Estimated weekly campus spending: Under $222'
    ],
    recommendation: 'Plan A offers the most flexibility for light campus dining'
  },
  planB: {
    name: 'Plan B',
    range: [222, 244],
    description: 'Best for students with moderate campus dining needs',
    details: [
      'You eat on campus several times per week',
      'You occasionally eat off-campus or cook',
      'You want a balance of structure and flexibility',
      'Estimated weekly campus spending: $222-$244'
    ],
    recommendation: 'Plan B provides good value for moderate campus dining'
  },
  planC: {
    name: 'Plan C',
    range: [245, 262],
    description: 'Best for students who eat on campus most days',
    details: [
      'You eat on campus for most meals during the week',
      'You use campus dining regularly',
      'You want reliable meal access without overspending',
      'Estimated weekly campus spending: $245-$262'
    ],
    recommendation: 'Plan C offers solid coverage for regular campus diners'
  },
  planD: {
    name: 'Plan D',
    range: [263, 286],
    description: 'Best for students who rely heavily on campus dining',
    details: [
      'You eat most meals on campus',
      'You frequently use extras like snacks and drinks',
      'You want comprehensive meal coverage',
      'Estimated weekly campus spending: $263-$286'
    ],
    recommendation: 'Plan D provides extensive coverage for heavy campus dining'
  },
  planE: {
    name: 'Plan E',
    range: [287, 1000],
    description: 'Best for students who eat almost all meals on campus',
    details: [
      'You eat nearly every meal on campus',
      'You frequently use delivery, snacks, and extras',
      'You want maximum flexibility and coverage',
      'Estimated weekly campus spending: $287+'
    ],
    recommendation: 'Plan E offers the most comprehensive coverage for your dining needs'
  }
};
