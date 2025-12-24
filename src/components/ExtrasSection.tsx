import { ExtrasState, FrequencyItem } from '../types';
import { FrequencyItemControl } from './FrequencyItemControl';
import { extrasConfigs } from '../data/questions';
import { calculateFrequencyItemScore } from '../utils/scoring';

interface ExtrasSectionProps {
  extrasState: ExtrasState;
  onExtrasChange: (extrasState: ExtrasState) => void;
}

export const ExtrasSection = ({ extrasState, onExtrasChange }: ExtrasSectionProps) => {
  const handleItemChange = (itemId: keyof ExtrasState, updatedItem: FrequencyItem) => {
    onExtrasChange({
      ...extrasState,
      [itemId]: updatedItem
    });
  };

  const totalScore =
    calculateFrequencyItemScore(extrasState.sweetTreats, extrasConfigs.sweetTreats) +
    calculateFrequencyItemScore(extrasState.snacks, extrasConfigs.snacks) +
    calculateFrequencyItemScore(extrasState.lateNight, extrasConfigs.lateNight);

  return (
    <div className="extras-section">
      <FrequencyItemControl
        item={extrasState.sweetTreats}
        config={extrasConfigs.sweetTreats}
        onChange={(item) => handleItemChange('sweetTreats', item)}
      />
      <FrequencyItemControl
        item={extrasState.snacks}
        config={extrasConfigs.snacks}
        onChange={(item) => handleItemChange('snacks', item)}
      />
      <FrequencyItemControl
        item={extrasState.lateNight}
        config={extrasConfigs.lateNight}
        onChange={(item) => handleItemChange('lateNight', item)}
      />

      <div className="extras-total">
        Total: ${totalScore.toFixed(2)}/week
      </div>
    </div>
  );
};
