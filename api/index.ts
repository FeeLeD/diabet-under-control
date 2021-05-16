import { Api } from "interfaces/api";
import Controller from "./Controller";
import MeasurementsController from "api/Controllers/Measurements";
import AccountController from "./Controllers/Account";
import ProfileController from "./Controllers/Profile";

export const PREFIX = "https://609d39d704bffa001792e3b5.mockapi.io/api/dev";

export const api: Api = {
  controller: new Controller(),
  account: new AccountController(),
  profile: new ProfileController(),
  measurements: new MeasurementsController(),
};
