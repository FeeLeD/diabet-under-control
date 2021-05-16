import { PREFIX } from "api";
import Controller from "api/Controller";
import { ProfileDto, ProfileUpdateDto } from "api/DTOs/Profile";

export interface IProfile {
  getProfile: () => Promise<ProfileDto>;
  updateProfile: (updateDto: ProfileUpdateDto) => Promise<void>;
}

export default class ProfileController extends Controller implements IProfile {
  async getProfile() {
    const profile = await this.get<ProfileDto>(
      // `/api/profiles`
      `${PREFIX}/profiles/1`
    );

    return profile;
  }

  async updateProfile(updateDto: ProfileUpdateDto) {
    await this.put<void, ProfileUpdateDto>(
      // `/api/profiles`
      `${PREFIX}/profiles/1`,
      updateDto
    );
  }
}
