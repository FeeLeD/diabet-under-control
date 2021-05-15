export interface MeasurementCreateWithSiteIdDto extends MeasurementCreateDto {
  siteId: number;
}

export interface MeasurementCreateDto {
  glucoseValue: number | undefined;
  breadValue: number | undefined;
  shortInsulinValue: number | undefined;
  longInsulinValue: number | undefined;
  type: string;
}

export interface MeasurementUpdateDto {
  measurementId: number;
  glucoseValue: number;
  breadValue: number;
  shortInsulinValue: number;
  longInsulinValue: number;
  type: string;
}

export interface MeasurementDeleteDto {
  siteId: number;
  measurementId: number;
}

export interface MeasurementDto {
  id: number;
  glucoseValue?: number;
  breadValue?: number;
  shortInsulinValue?: number;
  longInsulinValue?: number;
  type?: string;
  date: Date;
}
