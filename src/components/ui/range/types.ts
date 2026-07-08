export interface RangeProps {
  minLimit: number;
  maxLimit: number;
  initialMin: number;
  initialMax: number;
  onChange?: (min: number, max: number) => void;
  step?: number;
  isEditableLabels?: boolean;
}
