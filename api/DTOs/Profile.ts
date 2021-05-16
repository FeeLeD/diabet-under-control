export type DiabetesType = 1 | 2;
export type DrugType = "insulin" | "pills";

interface ProfileBase {
  mass?: number;
  diabetesType?: DiabetesType;
  birthDate?: string;
  drugType?: DrugType;
}

export interface ProfileDto extends ProfileBase {
  id: number;
}

export interface ProfileUpdateDto extends ProfileBase {}
