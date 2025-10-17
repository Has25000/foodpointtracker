import { useState, useEffect } from 'react';
import { QuestionSlider } from './components/QuestionSlider';
import { Results } from './components/Results';
import { questions, mealPlans } from './data/questions';
import { calculateScore, getMealPlan } from './utils/scoring';
import { Answers, QuestionOption } from './types';
import './App.css';

function App() {
  const [answers, setAnswers] = useState<Answers>({});
  const [sliderValues, setSliderValues] = useState<{ [key: string]: number }>({});

  // Initialize slider values to 0
  useEffect(() => {
    const initialValues: { [key: string]: number } = {};
    const initialAnswers: Answers = {};

    questions.forEach((question) => {
      initialValues[question.id] = 0;
      initialAnswers[question.id] = question.options[0];
    });

    setSliderValues(initialValues);
    setAnswers(initialAnswers);
  }, []);

  const handleAnswerChange = (questionId: string, option: QuestionOption) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: option,
    }));
    setSliderValues((prev) => ({
      ...prev,
      [questionId]: option.value,
    }));
  };

  const score = calculateScore(answers);
  const plan = getMealPlan(score.total, mealPlans);

  // Group questions by category
  const categorizedQuestions = questions.reduce((acc, question) => {
    if (!acc[question.category]) {
      acc[question.category] = [];
    }
    acc[question.category].push(question);
    return acc;
  }, {} as { [key: string]: typeof questions });

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

          {Object.entries(categorizedQuestions).map(([category, categoryQuestions]) => (
            <div key={category} className="category-section">
              <h3 className="category-title">{category}</h3>
              <div className="questions-group">
                {categoryQuestions.map((question) => (
                  <QuestionSlider
                    key={question.id}
                    question={question}
                    value={sliderValues[question.id] || 0}
                    onChange={(option) => handleAnswerChange(question.id, option)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="results-container">
          <Results score={score} plan={plan} />
        </div>
      </div>

      <footer className="app-footer">
        <p>Made for Duke Students | Scores are estimates based on typical pricing</p>
      </footer>
    </div>
  );
}

export default App;
