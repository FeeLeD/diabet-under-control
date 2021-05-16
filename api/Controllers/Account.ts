import { PREFIX } from "api";
import Controller from "api/Controller";
import {
  AccontRegisterDto,
  AccountLoginDto,
  UpdateUserDto,
  UserDto,
} from "api/DTOs/Account";

export interface IAccount {
  login: (loginDto: AccountLoginDto) => Promise<void>;
  logout: () => Promise<void>;
  register: (retisterDto: AccontRegisterDto) => Promise<void>;
  getUser: () => Promise<UserDto>;
  updateUser: (updateDto: UpdateUserDto) => Promise<void>;
}

export default class AccountController extends Controller implements IAccount {
  async login(loginDto: AccountLoginDto) {
    await this.post<void, AccountLoginDto>(`/api/account/login`, loginDto);
  }

  async logout() {
    await this.post(`/api/account/logout`);
  }

  async register(registerDto: AccontRegisterDto) {
    await this.post<void, AccontRegisterDto>(
      // `/api/account/register`,
      `${PREFIX}/account/`,
      registerDto
    );
  }

  async getUser() {
    const user = await this.get<UserDto>(
      // `/api/account/`
      `${PREFIX}/account/1`
    );

    return user;
  }

  async updateUser(updateDto: UpdateUserDto) {
    await this.put<void, UpdateUserDto>(
      // `/api/account`
      `${PREFIX}/account/1`,
      updateDto
    );
  }
}
