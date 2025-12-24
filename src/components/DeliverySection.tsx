import { DeliveryState, FrequencyItem } from '../types';
import { FrequencyItemControl } from './FrequencyItemControl';
import { deliveryConfigs } from '../data/questions';
import { calculateFrequencyItemScore } from '../utils/scoring';

interface DeliverySectionProps {
  deliveryState: DeliveryState;
  onDeliveryChange: (deliveryState: DeliveryState) => void;
}

export const DeliverySection = ({ deliveryState, onDeliveryChange }: DeliverySectionProps) => {
  const handleItemChange = (itemId: keyof DeliveryState, updatedItem: FrequencyItem) => {
    onDeliveryChange({
      ...deliveryState,
      [itemId]: updatedItem
    });
  };

  const totalScore =
    calculateFrequencyItemScore(deliveryState.mop, deliveryConfigs.mop) +
    calculateFrequencyItemScore(deliveryState.dukeStore, deliveryConfigs.dukeStore);

  return (
    <div className="delivery-section">
      <FrequencyItemControl
        item={deliveryState.mop}
        config={deliveryConfigs.mop}
        onChange={(item) => handleItemChange('mop', item)}
      />
      <FrequencyItemControl
        item={deliveryState.dukeStore}
        config={deliveryConfigs.dukeStore}
        onChange={(item) => handleItemChange('dukeStore', item)}
      />

      <div className="delivery-total">
        Total: ${totalScore.toFixed(2)}/week
      </div>
    </div>
  );
};
