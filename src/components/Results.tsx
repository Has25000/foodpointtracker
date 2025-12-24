import { MealPlan, ScoreResult } from '../types';

interface ResultsProps {
  score: ScoreResult;
  plan: MealPlan;
}

export const Results = ({ score, plan }: ResultsProps) => {
  const getColorClass = () => {
    if (plan.name.includes('Plan A')) return 'plan-a';
    if (plan.name.includes('Plan B')) return 'plan-b';
    if (plan.name.includes('Plan C')) return 'plan-c';
    if (plan.name.includes('Plan D')) return 'plan-d';
    return 'plan-e';
  };

  return (
    <div className={`results ${getColorClass()}`}>
      <div className="score-display">
        <h2>Your Score</h2>
        <div className="score-number">{score.total}</div>
        <p className="score-description">Weekly Food Points Estimate</p>
      </div>

      <div className="plan-recommendation">
        <h2>{plan.name}</h2>
        <p className="plan-description">{plan.description}</p>

        <div className="plan-details">
          <h3>This plan is right for you if:</h3>
          <ul>
            {plan.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>

        <div className="recommendation">
          <h3>Recommendation:</h3>
          <p>{plan.recommendation}</p>
        </div>
      </div>

      <div className="breakdown">
        <h3>Score Breakdown</h3>
        <div className="breakdown-grid">
          {/* Breakfast */}
          {score.breakdown.breakfast !== undefined && score.breakdown.breakfast > 0 && (
            <div className="breakdown-item">
              <span className="breakdown-label">Breakfast:</span>
              <span className="breakdown-value">${score.breakdown.breakfast.toFixed(2)}</span>
            </div>
          )}
          {/* Lunch */}
          {score.breakdown.lunch !== undefined && score.breakdown.lunch > 0 && (
            <div className="breakdown-item">
              <span className="breakdown-label">Lunch:</span>
              <span className="breakdown-value">${score.breakdown.lunch.toFixed(2)}</span>
            </div>
          )}
          {/* Dinner */}
          {score.breakdown.dinner !== undefined && score.breakdown.dinner > 0 && (
            <div className="breakdown-item">
              <span className="breakdown-label">Dinner:</span>
              <span className="breakdown-value">${score.breakdown.dinner.toFixed(2)}</span>
            </div>
          )}
          {/* Coffee & Drinks */}
          {score.breakdown.drinks && score.breakdown.drinks.total > 0 && (
            <>
              <div className="breakdown-item breakdown-category">
                <span className="breakdown-label">Coffee & Drinks:</span>
                <span className="breakdown-value">${score.breakdown.drinks.total.toFixed(2)}</span>
              </div>
              {score.breakdown.drinks.coffee > 0 && (
                <div className="breakdown-item breakdown-subitem">
                  <span className="breakdown-label">Coffee:</span>
                  <span className="breakdown-value">${score.breakdown.drinks.coffee.toFixed(2)}</span>
                </div>
              )}
              {score.breakdown.drinks.proteinShakes > 0 && (
                <div className="breakdown-item breakdown-subitem">
                  <span className="breakdown-label">Protein Shakes:</span>
                  <span className="breakdown-value">${score.breakdown.drinks.proteinShakes.toFixed(2)}</span>
                </div>
              )}
              {score.breakdown.drinks.smoothies > 0 && (
                <div className="breakdown-item breakdown-subitem">
                  <span className="breakdown-label">Smoothies:</span>
                  <span className="breakdown-value">${score.breakdown.drinks.smoothies.toFixed(2)}</span>
                </div>
              )}
              {score.breakdown.drinks.other > 0 && (
                <div className="breakdown-item breakdown-subitem">
                  <span className="breakdown-label">Other:</span>
                  <span className="breakdown-value">${score.breakdown.drinks.other.toFixed(2)}</span>
                </div>
              )}
            </>
          )}
          {/* Sweet Treats */}
          {score.breakdown.sweetTreats !== undefined && score.breakdown.sweetTreats > 0 && (
            <div className="breakdown-item">
              <span className="breakdown-label">Sweet Treats:</span>
              <span className="breakdown-value">${score.breakdown.sweetTreats.toFixed(2)}</span>
            </div>
          )}
          {/* Snacks */}
          {score.breakdown.snacks !== undefined && score.breakdown.snacks > 0 && (
            <div className="breakdown-item">
              <span className="breakdown-label">Snacks:</span>
              <span className="breakdown-value">${score.breakdown.snacks.toFixed(2)}</span>
            </div>
          )}
          {/* Late Night */}
          {score.breakdown.lateNight !== undefined && score.breakdown.lateNight > 0 && (
            <div className="breakdown-item">
              <span className="breakdown-label">Late Night:</span>
              <span className="breakdown-value">${score.breakdown.lateNight.toFixed(2)}</span>
            </div>
          )}
          {/* MOP Delivery */}
          {score.breakdown.mop !== undefined && score.breakdown.mop > 0 && (
            <div className="breakdown-item">
              <span className="breakdown-label">MOP Delivery:</span>
              <span className="breakdown-value">${score.breakdown.mop.toFixed(2)}</span>
            </div>
          )}
          {/* Duke Store */}
          {score.breakdown.dukeStore !== undefined && score.breakdown.dukeStore > 0 && (
            <div className="breakdown-item">
              <span className="breakdown-label">Duke Store:</span>
              <span className="breakdown-value">${score.breakdown.dukeStore.toFixed(2)}</span>
            </div>
          )}
          {/* Alcoholic Drinks */}
          {score.breakdown.alcohol !== undefined && score.breakdown.alcohol > 0 && (
            <div className="breakdown-item">
              <span className="breakdown-label">Alcoholic Drinks:</span>
              <span className="breakdown-value">${score.breakdown.alcohol.toFixed(2)}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
