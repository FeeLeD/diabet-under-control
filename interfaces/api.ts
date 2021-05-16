import Controller from "api/Controller";
import { IAccount } from "api/Controllers/Account";
import { IMeasurements } from "api/Controllers/Measurements";

export interface Api {
  controller: Controller;
  account: IAccount;
  measurements: IMeasurements;
}
