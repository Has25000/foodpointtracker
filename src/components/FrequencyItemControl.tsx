import { FrequencyItem, FrequencyItemConfig } from '../types';
import { calculateFrequencyItemScore } from '../utils/scoring';

interface FrequencyItemControlProps {
  item: FrequencyItem;
  config: FrequencyItemConfig;
  onChange: (item: FrequencyItem) => void;
}

export const FrequencyItemControl = ({ item, config, onChange }: FrequencyItemControlProps) => {
  const effectivePrice = item.useCustomPrice ? item.customPrice : item.defaultPrice;
  const weeklyScore = calculateFrequencyItemScore(item, config);

  const handleFrequencyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newIndex = parseInt(e.target.value);
    onChange({ ...item, frequencyIndex: newIndex });
  };

  const handleToggleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ ...item, useCustomPrice: e.target.checked });
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPrice = parseFloat(e.target.value) || 0;
    onChange({ ...item, customPrice: Math.max(0, newPrice) });
  };

  return (
    <div className="frequency-item-control">
      <div className="frequency-item-header">
        <span className="frequency-item-name">{item.name}</span>
        <span className="frequency-item-subtotal">${weeklyScore.toFixed(2)}/week</span>
      </div>

      <div className="frequency-item-question">{config.question}</div>

      <div className="frequency-slider-section">
        <input
          type="range"
          min="0"
          max={config.frequencyOptions.length - 1}
          value={item.frequencyIndex}
          onChange={handleFrequencyChange}
          className="slider frequency-slider"
        />
        <div className="slider-labels">
          {config.frequencyOptions.map((option, index) => (
            <span
              key={index}
              className={`slider-label ${index === item.frequencyIndex ? 'active' : ''}`}
            >
              {option.label}
            </span>
          ))}
        </div>
      </div>

      <div className="frequency-price-section">
        <div className="frequency-price-info">
          <span className="frequency-price-label">Price per item:</span>
          <span className="frequency-price-value">${effectivePrice.toFixed(2)}</span>
        </div>
        <div className="frequency-custom-toggle">
          <label className="price-toggle-label">
            <input
              type="checkbox"
              checked={item.useCustomPrice}
              onChange={handleToggleChange}
            />
            Custom price
          </label>
          {item.useCustomPrice && (
            <div className="price-input-wrapper">
              <span className="price-symbol">$</span>
              <input
                type="number"
                min="0"
                step="0.50"
                value={item.customPrice}
                onChange={handlePriceChange}
                className="price-input"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
