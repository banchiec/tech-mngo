import React, { useState, useEffect } from 'react';
import { RangeProps } from './types';
import { useRange } from '@/features/exercise1/hooks/useRange';

export const Range: React.FC<RangeProps> = ({
  minLimit,
  maxLimit,
  initialMin,
  initialMax,
  onChange,
  step = 1,
  isEditableLabels = true,
}) => {
  const {
    values,
    trackRef,
    activeHandle,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    updateValueManually,
    minPct,
    maxPct,
  } = useRange(minLimit, maxLimit, initialMin, initialMax, step, onChange);

  const [isEditingMin, setIsEditingMin] = useState(false);
  const [isEditingMax, setIsEditingMax] = useState(false);
  const [inputMinStr, setInputMinStr] = useState(values.min.toString());
  const [inputMaxStr, setInputMaxStr] = useState(values.max.toString());

  useEffect(() => {
    setInputMinStr(values.min.toString());
  }, [values.min]);

  useEffect(() => {
    setInputMaxStr(values.max.toString());
  }, [values.max]);

  const handleMinBlur = () => {
    setIsEditingMin(false);
    const num = parseFloat(inputMinStr);
    updateValueManually('min', isNaN(num) ? minLimit : num);
  };
  const handleMaxBlur = () => {
    setIsEditingMax(false);
    const num = parseFloat(inputMaxStr);
    updateValueManually('max', isNaN(num) ? maxLimit : num);
  };
  return (
    <div className="w-full px-4 select-none">
      <div
        ref={trackRef}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        className="relative h-2 w-full bg-gray-200 rounded-full cursor-pointer"
        style={{ touchAction: 'none' }}
      >
        <div
          className="absolute h-full bg-black rounded-full"
          style={{
            left: minPct,
            right: `calc(100% - ${maxPct})`,
          }}
        />
        <button
          onPointerDown={handlePointerDown('min')}
          className={`absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-white border-2 border-black rounded-full transition-transform shadow-sm focus:outline-none ${
            activeHandle === 'min' ? 'cursor-grabbing scale-125' : 'cursor-grab hover:scale-125'
          }`}
          style={{ left: minPct, touchAction: 'none' }}
          aria-label="Selector de valor mínimo"
        />

        <button
          onPointerDown={handlePointerDown('max')}
          className={`absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-white border-2 border-black rounded-full transition-transform shadow-sm focus:outline-none ${
            activeHandle === 'max' ? 'cursor-grabbing scale-125' : 'cursor-grab hover:scale-125'
          }`}
          style={{ left: maxPct, touchAction: 'none' }}
          aria-label="Selector de valor máximo"
        />
      </div>
      <div className="flex justify-between items-center mt-6 text-sm font-medium text-gray-700">
        <div className="w-20 text-left">
          {isEditableLabels && isEditingMin ? (
            <input
              type="text"
              value={inputMinStr}
              onChange={(e) => setInputMinStr(e.target.value)}
              onBlur={handleMinBlur}
              onKeyDown={(e) => e.key === 'Enter' && handleMinBlur()}
              className="w-full px-1 py-0.5 border border-black rounded text-center focus:outline-none"
              autoFocus
            />
          ) : (
            <span
              onClick={() => isEditableLabels && setIsEditingMin(true)}
              className={isEditableLabels ? 'cursor-pointer hover:underline border-b border-dashed border-gray-400' : ''}
            >
              {values.min}
            </span>
          )}
        </div>
        <div className="w-20 text-right">
          {isEditableLabels && isEditingMax ? (
            <input
              type="text"
              value={inputMaxStr}
              onChange={(e) => setInputMaxStr(e.target.value)}
              onBlur={handleMaxBlur}
              onKeyDown={(e) => e.key === 'Enter' && handleMaxBlur()}
              className="w-full px-1 py-0.5 border border-black rounded text-center focus:outline-none"
              autoFocus
            />
          ) : (
            <span
              onClick={() => isEditableLabels && setIsEditingMax(true)}
              className={isEditableLabels ? 'cursor-pointer hover:underline border-b border-dashed border-gray-400' : ''}
            >
              {values.max}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};