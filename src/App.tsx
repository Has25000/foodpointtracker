import { useState } from 'react';
import { DrinksSection } from './components/DrinksSection';
import { AlcoholSection } from './components/AlcoholSection';
import { MealSection } from './components/MealSection';
import { ExtrasSection } from './components/ExtrasSection';
import { DeliverySection } from './components/DeliverySection';
import { Results } from './components/Results';
import { mealPlans, drinkDefaults, alcoholDefaults, mealConfigs, mealsDefaults, extrasDefaults, deliveryDefaults } from './data/questions';
import { calculateScore, getMealPlan } from './utils/scoring';
import { DrinksState, AlcoholState, MealsState, ExtrasState, DeliveryState } from './types';
import './App.css';

function App() {
  const [drinksState, setDrinksState] = useState<DrinksState>(drinkDefaults);
  const [alcoholState, setAlcoholState] = useState<AlcoholState>(alcoholDefaults);
  const [mealsState, setMealsState] = useState<MealsState>(mealsDefaults);
  const [extrasState, setExtrasState] = useState<ExtrasState>(extrasDefaults);
  const [deliveryState, setDeliveryState] = useState<DeliveryState>(deliveryDefaults);

  const score = calculateScore(drinksState, alcoholState, mealsState, extrasState, deliveryState);
  const plan = getMealPlan(score.total, mealPlans);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Duke Meal Plan Calculator</h1>
        <p className="subtitle">Find the perfect meal plan for your lifestyle</p>
      </header>

      <div className="content">
        <div className="questionnaire">
          <h2>Tell us about your eating habits</h2>
          <p className="instructions">
            Use the sliders below to indicate how often you expect to use Duke Dining options.
            Your recommended meal plan will update automatically as you adjust your answers.
          </p>

          {/* Breakfast Section */}
          <div className="category-section">
            <h3 className="category-title">Breakfast</h3>
            <div className="questions-group">
              <MealSection
                mealState={mealsState.breakfast}
                mealConfig={mealConfigs.breakfast}
                onMealChange={(newState) => setMealsState(prev => ({ ...prev, breakfast: newState }))}
              />
            </div>
          </div>

          {/* Lunch Section */}
          <div className="category-section">
            <h3 className="category-title">Lunch</h3>
            <div className="questions-group">
              <MealSection
                mealState={mealsState.lunch}
                mealConfig={mealConfigs.lunch}
                onMealChange={(newState) => setMealsState(prev => ({ ...prev, lunch: newState }))}
              />
            </div>
          </div>

          {/* Dinner Section */}
          <div className="category-section">
            <h3 className="category-title">Dinner</h3>
            <div className="questions-group">
              <MealSection
                mealState={mealsState.dinner}
                mealConfig={mealConfigs.dinner}
                onMealChange={(newState) => setMealsState(prev => ({ ...prev, dinner: newState }))}
              />
            </div>
          </div>

          {/* Coffee & Drinks Section */}
          <div className="category-section">
            <h3 className="category-title">Coffee & Drinks</h3>
            <div className="questions-group">
              <DrinksSection
                drinksState={drinksState}
                onDrinksChange={setDrinksState}
              />
            </div>
          </div>

          {/* Extras Section */}
          <div className="category-section">
            <h3 className="category-title">Extras</h3>
            <div className="questions-group">
              <ExtrasSection
                extrasState={extrasState}
                onExtrasChange={setExtrasState}
              />
            </div>
          </div>

          {/* Delivery & Other Section */}
          <div className="category-section">
            <h3 className="category-title">Delivery & Other</h3>
            <div className="questions-group">
              <DeliverySection
                deliveryState={deliveryState}
                onDeliveryChange={setDeliveryState}
              />
            </div>
          </div>

          {/* Alcoholic Drinks Section */}
          <div className="category-section">
            <h3 className="category-title">Alcoholic Drinks</h3>
            <div className="questions-group">
              <AlcoholSection
                alcoholState={alcoholState}
                onAlcoholChange={setAlcoholState}
              />
            </div>
          </div>
        </div>

        <div className="results-container">
          <Results score={score} plan={plan} />
        </div>
      </div>

      <footer className="app-footer">
        <p>Made for Duke Students | Scores are estimates based on typical pricing</p>
        <p className="bluebot-link">
          Need help finding meal options? Try <a href="https://oit.duke.edu/bluebot-pilot/" target="_blank" rel="noopener noreferrer">Duke BlueBot AI</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
