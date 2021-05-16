import { UserDto } from "api/DTOs/Account";
import { createState } from "@hookstate/core";
import { MeasurementDto } from "api/DTOs/Measurements";

interface GlobalState {
  user: UserDto | undefined;
  measurements: MeasurementDto[];
}

export const globalState = createState<GlobalState>({
  user: undefined,
  measurements: [],
});
