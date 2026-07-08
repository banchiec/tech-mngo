import { RangeValues } from "@/types/range";

export function calculateValueFromPosition(
  clientX: number,
  trackLeft: number,
  trackWidth: number,
  minLimit: number,
  maxLimit: number,
  step: number
): number {
  if (trackWidth === 0) return minLimit;

  const percentage = Math.max(0, Math.min(1, (clientX - trackLeft) / trackWidth));
  const rawValue = minLimit + percentage * (maxLimit - minLimit);
  
  const steppedValue = Math.round(rawValue / step) * step;
  
  return Math.max(minLimit, Math.min(maxLimit, steppedValue));
}

export function clampValueCollision(
  currentValues: RangeValues,
  newValue: number,
  activeHandle: 'min' | 'max',
  step: number
): RangeValues {
  if (activeHandle === 'min') {
    return {
      min: Math.min(newValue, currentValues.max - step),
      max: currentValues.max,
    };
  } else {
    return {
      min: currentValues.min,
      max: Math.max(newValue, currentValues.min + step),
    };
  }
}

export function convertValueToPercentage(
  value: number,
  minLimit: number,
  maxLimit: number
): string {
  if (maxLimit === minLimit) return '0%';
  const pct = ((value - minLimit) / (maxLimit - minLimit)) * 100;
  return `${Math.max(0, Math.min(100, pct))}%`;
}