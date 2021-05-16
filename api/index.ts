import { Api } from "interfaces/api";
import Controller from "./Controller";
import MeasurementsController from "api/Controllers/Measurements";
import AccountController from "./Controllers/Account";

export const PREFIX = "https://609d39d704bffa001792e3b5.mockapi.io/api/dev";

export const api: Api = {
  controller: new Controller(),
  account: new AccountController(),
  measurements: new MeasurementsController(),
};
