import { NextResponse } from 'next/server';

export interface NormalRangeResponse {
  min: number;
  max: number;
}

export async function GET() {
  const data: NormalRangeResponse = {
    min: 1,
    max: 100,
  };
  
  return NextResponse.json(data);
}