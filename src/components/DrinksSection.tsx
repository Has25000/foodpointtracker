import { DrinksState, DrinkItem } from '../types';
import { DrinkItemControl } from './DrinkItemControl';
import { calculateDrinksScore } from '../utils/scoring';

interface DrinksSectionProps {
  drinksState: DrinksState;
  onDrinksChange: (drinksState: DrinksState) => void;
}

export const DrinksSection = ({ drinksState, onDrinksChange }: DrinksSectionProps) => {
  const handleItemChange = (itemId: keyof DrinksState, updatedItem: DrinkItem) => {
    onDrinksChange({
      ...drinksState,
      [itemId]: updatedItem
    });
  };

  const totalScore = calculateDrinksScore(drinksState);

  return (
    <div className="drinks-section">
      <h4 className="drinks-header">How often do you expect to buy</h4>

      <DrinkItemControl
        item={drinksState.coffee}
        onChange={(item) => handleItemChange('coffee', item)}
      />
      <DrinkItemControl
        item={drinksState.proteinShakes}
        onChange={(item) => handleItemChange('proteinShakes', item)}
      />
      <DrinkItemControl
        item={drinksState.smoothies}
        onChange={(item) => handleItemChange('smoothies', item)}
      />
      <DrinkItemControl
        item={drinksState.other}
        onChange={(item) => handleItemChange('other', item)}
      />

      <div className="drinks-total">
        Total: ${totalScore.toFixed(2)}/week
      </div>
    </div>
  );
};
