'use client';

import { use, useState } from 'react';
import { FixedRangeResponse } from '@/types/range';
import { Range } from '@/components/ui/range/Range';
import { CatalogList } from './componets/CatalogList';

interface Exercise2ViewProps {
  dataPromise: Promise<FixedRangeResponse>;
}

export const Exercise2View: React.FC<Exercise2ViewProps> = ({ dataPromise }) => {
  const { catalog, rangeValues } = use(dataPromise);
  const initialMinIndex = catalog.indexOf(rangeValues[0]);
  const initialMaxIndex = catalog.indexOf(rangeValues[1]);

  const [currentPrices, setCurrentPrices] = useState({
    min: rangeValues[0] !== -1 ? rangeValues[0] : catalog[0],
    max: rangeValues[1] !== -1 ? rangeValues[1] : catalog[catalog.length - 1],
  });

  const handleRangeChange = (minIndex: number, maxIndex: number) => {
    const realMinPrice = catalog[minIndex];
    const realMaxPrice = catalog[maxIndex];

    setCurrentPrices({ min: realMinPrice, max: realMaxPrice });
  };

  return (
    <div className="py-6 px-4 bg-gray-50 rounded-xl border border-gray-100">
      <div className="flex justify-between items-center mb-6 text-sm font-semibold text-gray-700">
        <span className="bg-white px-3 py-1.5 rounded-md shadow-sm border border-gray-100">
          Mínimo: {currentPrices.min} €
        </span>
        <span className="bg-white px-3 py-1.5 rounded-md shadow-sm border border-gray-100">
          Máximo: {currentPrices.max} €
        </span>
      </div>
      <Range
        minLimit={0}
        maxLimit={catalog.length - 1}
        initialMin={initialMinIndex !== -1 ? initialMinIndex : 0}
        initialMax={initialMaxIndex !== -1 ? initialMaxIndex : catalog.length - 1}
        step={1}
        isEditableLabels={false}
        onChange={handleRangeChange}
        formatLabel={(index) => `${catalog[index]}€`}
      />
      <CatalogList
        catalog={catalog}
        currentMin={currentPrices.min}
        currentMax={currentPrices.max}
      />
    </div>
  );
};