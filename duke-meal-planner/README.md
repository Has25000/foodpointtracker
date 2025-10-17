# Duke Meal Plan Calculator

An interactive web application that helps Duke University students determine the best meal plan based on their eating habits and lifestyle.

## Features

- **Interactive Sliders**: Adjust your preferences using intuitive sliders for each question
- **Real-time Calculations**: Your meal plan recommendation updates instantly as you change your answers
- **Detailed Breakdown**: See exactly how your score is calculated across different categories
- **Duke Branding**: Clean, professional design using Duke's official colors

## How It Works

The calculator asks students about their expected campus dining habits including:

- Coffee and beverage purchases
- Breakfast, lunch, and dinner frequency and portion sizes
- Snacks and sweet treats
- Late-night food
- Food delivery (MOP - Merchants On Points)
- Alcoholic beverages at campus bars
- Duke Store purchases

Based on your responses, the app calculates an estimated weekly food points score and recommends one of three meal plans:

- **Plan A (Light User)**: For students who eat on campus occasionally
- **Plan B (Moderate User)**: For students who eat on campus most days
- **Plan C (Heavy User)**: For students who eat most meals on campus

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Technology Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **CSS3** with custom properties for theming
- No external UI libraries - fully custom components

## Project Structure

```
src/
├── components/
│   ├── QuestionSlider.tsx    # Individual question slider component
│   └── Results.tsx            # Results and recommendation display
├── data/
│   └── questions.ts           # Questions configuration and meal plan data
├── types/
│   └── index.ts              # TypeScript type definitions
├── utils/
│   └── scoring.ts            # Scoring calculation logic
├── App.tsx                   # Main application component
├── App.css                   # Application styles
├── main.tsx                  # Application entry point
└── index.css                 # Global styles
```

## Scoring Logic

The scoring system is based on:

1. **Frequency Scores**: How often you purchase each type of food/drink
2. **Portion Size Multipliers**: Applied to meals (breakfast, lunch, dinner)
3. **Category Totals**: Individual scores for each spending category
4. **Final Score**: Sum of all category scores

The final score is compared against threshold ranges to determine the recommended meal plan:
- Score < 200: Plan A (Light User)
- Score 200-249: Plan B (Moderate User)
- Score ≥ 250: Plan C (Heavy User)

## Customization

To adjust the scoring weights or add new questions, edit:
- `/src/data/questions.ts` - Question configuration and scoring weights
- `/src/utils/scoring.ts` - Calculation logic

## License

Created for Duke University students.
