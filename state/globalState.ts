import { UserDto } from "api/DTOs/Account";
import { createState } from "@hookstate/core";
import { MeasurementDto } from "api/DTOs/Measurements";
import { ProfileDto } from "api/DTOs/Profile";

interface GlobalState {
  user: UserDto | undefined;
  profile: ProfileDto | undefined;
  measurements: MeasurementDto[];
}

export const globalState = createState<GlobalState>({
  user: undefined,
  profile: undefined,
  measurements: [],
});
