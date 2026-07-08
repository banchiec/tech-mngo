import { NextResponse } from 'next/server';
import { FixedRangeResponse } from '@/types/range';

export async function GET() {
  const mockFixedData: FixedRangeResponse = {
    catalog: [1.99, 5.99, 10.99, 25.99, 50.99, 75.50, 100.00],
    rangeValues: [5.99, 75.50]
  };

  return NextResponse.json(mockFixedData);
}