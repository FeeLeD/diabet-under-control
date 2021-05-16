export interface AccountLoginDto {
  email: string;
  password: string;
}

export interface AccontRegisterDto {
  firstName: string;
  lastName: string;
  otherName?: string;
  email: string;
  password: string;
}

export interface UserDto {
  id: number;
  firstName: string;
  lastName: string;
  otherName?: string;
  email: string;
}
