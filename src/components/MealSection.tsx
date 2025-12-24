import { MealState, MealConfig } from '../types';
import { calculateMealScore } from '../utils/scoring';

interface MealSectionProps {
  mealState: MealState;
  mealConfig: MealConfig;
  onMealChange: (mealState: MealState) => void;
}

export const MealSection = ({ mealState, mealConfig, onMealChange }: MealSectionProps) => {
  const { score: weeklyScore, price: effectivePrice } = calculateMealScore(mealState, mealConfig);
  const currentFrequency = mealConfig.frequencyOptions[mealState.frequencyIndex];

  const handleFrequencyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newIndex = parseInt(e.target.value);
    onMealChange({ ...mealState, frequencyIndex: newIndex });
  };

  const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newIndex = parseInt(e.target.value);
    onMealChange({ ...mealState, sizeIndex: newIndex });
  };

  const handleToggleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onMealChange({ ...mealState, useCustomPrice: e.target.checked });
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPrice = parseFloat(e.target.value) || 0;
    onMealChange({ ...mealState, customPrice: Math.max(0, newPrice) });
  };

  return (
    <div className="meal-section">
      <h4 className="meal-header">How often do you expect to buy {mealConfig.name.toLowerCase()}?</h4>

      <div className="meal-item-control">
        {/* Frequency Section */}
        <div className="meal-frequency-section">
          <div className="meal-frequency-header">
            <span className="meal-label">Frequency</span>
            <span className="meal-frequency-value">{currentFrequency?.label}</span>
          </div>
          <input
            type="range"
            min="0"
            max={mealConfig.frequencyOptions.length - 1}
            value={mealState.frequencyIndex}
            onChange={handleFrequencyChange}
            className="slider meal-slider"
          />
          <div className="slider-labels">
            {mealConfig.frequencyOptions.map((option, index) => (
              <span
                key={index}
                className={`slider-label ${index === mealState.frequencyIndex ? 'active' : ''}`}
              >
                {option.label}
              </span>
            ))}
          </div>
        </div>

        {/* Size/Price Section */}
        <div className="meal-price-section">
          <div className="meal-price-header">
            <span className="meal-label">Meal Price</span>
            <span className="meal-price-value">${effectivePrice.toFixed(2)}</span>
          </div>

          {!mealState.useCustomPrice && (
            <>
              <input
                type="range"
                min="0"
                max={mealConfig.sizeOptions.length - 1}
                value={mealState.sizeIndex}
                onChange={handleSizeChange}
                className="slider meal-slider"
              />
              <div className="slider-labels">
                {mealConfig.sizeOptions.map((option, index) => (
                  <span
                    key={index}
                    className={`slider-label ${index === mealState.sizeIndex ? 'active' : ''}`}
                  >
                    {option.label}
                  </span>
                ))}
              </div>
            </>
          )}

          <div className="meal-custom-price-toggle">
            <label className="price-toggle-label">
              <input
                type="checkbox"
                checked={mealState.useCustomPrice}
                onChange={handleToggleChange}
              />
              Enter custom price
            </label>
            {mealState.useCustomPrice && (
              <div className="price-input-wrapper">
                <span className="price-symbol">$</span>
                <input
                  type="number"
                  min="0"
                  step="0.50"
                  value={mealState.customPrice}
                  onChange={handlePriceChange}
                  className="price-input"
                />
              </div>
            )}
          </div>
        </div>

        {/* Weekly Total */}
        <div className="meal-total">
          Weekly Total: ${weeklyScore.toFixed(2)}/week
        </div>
      </div>
    </div>
  );
};
