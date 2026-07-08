export interface NormalRangeResponse {
  min: number;
  max: number;
}

export interface FixedRangeResponse {
  catalog: number[];
  rangeValues: number[];
}

export interface RangeValues {
  min: number;
  max: number;
}