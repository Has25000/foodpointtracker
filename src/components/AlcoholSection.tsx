import { AlcoholState } from '../types';
import { alcoholFrequencyOptions } from '../data/questions';
import { calculateAlcoholScore } from '../utils/scoring';

interface AlcoholSectionProps {
  alcoholState: AlcoholState;
  onAlcoholChange: (alcoholState: AlcoholState) => void;
}

export const AlcoholSection = ({ alcoholState, onAlcoholChange }: AlcoholSectionProps) => {
  const weeklyScore = calculateAlcoholScore(alcoholState);

  const handleFrequencyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newIndex = parseInt(e.target.value);
    onAlcoholChange({ ...alcoholState, frequencyIndex: newIndex });
  };

  const handleToggleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onAlcoholChange({ ...alcoholState, useCustomPrice: e.target.checked });
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPrice = parseFloat(e.target.value) || 0;
    onAlcoholChange({ ...alcoholState, customPrice: Math.max(0, newPrice) });
  };

  return (
    <div className="alcohol-section">
      <h4 className="alcohol-header">How often do you expect to buy alcoholic beverages?</h4>

      <div className="alcohol-item-control">
        <div className="alcohol-item-header">
          <span className="alcohol-name">Alcoholic Beverages</span>
          <span className="alcohol-subtotal">${weeklyScore.toFixed(2)}/week</span>
        </div>

        <div className="alcohol-frequency-section">
          <input
            type="range"
            min="0"
            max={alcoholFrequencyOptions.length - 1}
            value={alcoholState.frequencyIndex}
            onChange={handleFrequencyChange}
            className="slider alcohol-slider"
          />
          <div className="slider-labels">
            {alcoholFrequencyOptions.map((option, index) => (
              <span
                key={index}
                className={`slider-label ${index === alcoholState.frequencyIndex ? 'active' : ''}`}
              >
                {option.label}
              </span>
            ))}
          </div>
        </div>

        {alcoholState.useCustomPrice && (
          <div className="alcohol-price-section">
            <div className="alcohol-price-info">
              <span className="alcohol-price-label">Custom weekly amount:</span>
            </div>
            <div className="price-input-wrapper">
              <span className="price-symbol">$</span>
              <input
                type="number"
                min="0"
                step="1"
                value={alcoholState.customPrice}
                onChange={handlePriceChange}
                className="price-input"
              />
              <span className="price-suffix">/week</span>
            </div>
          </div>
        )}

        <div className="alcohol-custom-toggle">
          <label className="price-toggle-label">
            <input
              type="checkbox"
              checked={alcoholState.useCustomPrice}
              onChange={handleToggleChange}
            />
            Enter custom weekly amount
          </label>
        </div>
      </div>

      <div className="alcohol-total">
        Total: ${weeklyScore.toFixed(2)}/week
      </div>
    </div>
  );
};
