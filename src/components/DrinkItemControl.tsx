import { DrinkItem } from '../types';
import { drinkFrequencyOptions } from '../data/questions';

interface DrinkItemControlProps {
  item: DrinkItem;
  onChange: (item: DrinkItem) => void;
}

export const DrinkItemControl = ({ item, onChange }: DrinkItemControlProps) => {
  const effectivePrice = item.useCustomPrice ? item.customPrice : item.defaultPrice;
  const currentFrequency = drinkFrequencyOptions[item.frequencyIndex];
  const subtotal = (currentFrequency?.timesPerWeek || 0) * effectivePrice;

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
    <div className="drink-item-control">
      <div className="drink-item-header">
        <span className="drink-name">{item.name}</span>
        <span className="drink-subtotal">${subtotal.toFixed(2)}/week</span>
      </div>

      <div className="drink-frequency-section">
        <input
          type="range"
          min="0"
          max={drinkFrequencyOptions.length - 1}
          value={item.frequencyIndex}
          onChange={handleFrequencyChange}
          className="slider drink-slider"
        />
        <div className="slider-labels">
          {drinkFrequencyOptions.map((option, index) => (
            <span
              key={index}
              className={`slider-label ${index === item.frequencyIndex ? 'active' : ''}`}
            >
              {option.label}
            </span>
          ))}
        </div>
      </div>

      <div className="drink-price-section">
        <div className="drink-price-info">
          <span className="drink-price-label">Price per item:</span>
          <span className="drink-price-value">${effectivePrice.toFixed(2)}</span>
        </div>
        <div className="drink-custom-toggle">
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
