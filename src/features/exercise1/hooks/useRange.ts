import { useState, useRef, useCallback } from 'react';
import { RangeValues } from '@/types/range';
import { calculateValueFromPosition, clampValueCollision, convertValueToPercentage } from '@/utils/range';

export const useRange = (
  minLimit: number,
  maxLimit: number,
  initialMin: number,
  initialMax: number,
  step: number = 1,
  onChange?: (min: number, max: number) => void
) => {
  const [values, setValues] = useState<RangeValues>({
    min: initialMin,
    max: initialMax,
  });

  const [activeHandle, setActiveHandle] = useState<'min' | 'max' | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const handlePointerDown = (handle: 'min' | 'max') => (e: React.PointerEvent) => {
    e.preventDefault();
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    setActiveHandle(handle);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!activeHandle || !trackRef.current) return;

    const rect = trackRef.current.getBoundingClientRect();
    
    const calculatedValue = calculateValueFromPosition(
      e.clientX,
      rect.left,
      rect.width,
      minLimit,
      maxLimit,
      step
    );

    setValues((prev) => {
      const newValues = clampValueCollision(prev, calculatedValue, activeHandle, step);
      
      if ((newValues.min !== prev.min || newValues.max !== prev.max) && onChange) {
        onChange(newValues.min, newValues.max);
      }
      
      return newValues;
    });
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (activeHandle) {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
      setActiveHandle(null);
    }
  };

  const updateValueManually = useCallback((handle: 'min' | 'max', value: number) => {
    setValues((prev) => {
      const newValues = clampValueCollision(prev, value, handle, step);
      
      if (handle === 'min') {
        newValues.min = Math.max(minLimit, newValues.min);
      } else {
        newValues.max = Math.min(maxLimit, newValues.max);
      }

      if (onChange) onChange(newValues.min, newValues.max);
      return newValues;
    });
  }, [minLimit, maxLimit, step, onChange]);

  return {
    values,
    trackRef,
    activeHandle,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    updateValueManually,
    minPct: convertValueToPercentage(values.min, minLimit, maxLimit),
    maxPct: convertValueToPercentage(values.max, minLimit, maxLimit),
  };
};