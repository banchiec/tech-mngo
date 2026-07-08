'use client';

import React, { use } from 'react';
import { NormalRangeResponse } from '@/app/api/exercise1/route';
import { Range } from '@/components/ui/range/Range';

interface Exercise1ClientProps {
  ranges: Promise<NormalRangeResponse>;
}

const Exercise1View: React.FC <Exercise1ClientProps>= ({ranges} ) => {
  const data = use(ranges)

  const handleRangeChange = () => {};

  return (
    <div className="py-6 px-4 bg-gray-50 rounded-xl border border-gray-100">
      <Range
        minLimit={data.min}
        maxLimit={data.max}
        initialMin={data.min}
        initialMax={data.max}
        step={1}
        isEditableLabels={true}
        onChange={handleRangeChange}
      />
    </div>
  );
};
export default Exercise1View