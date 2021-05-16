import Controller from "api/Controller";
import { IAccount } from "api/Controllers/Account";
import { IProfile } from "api/Controllers/Profile";
import { IMeasurements } from "api/Controllers/Measurements";

export interface Api {
  controller: Controller;
  account: IAccount;
  profile: IProfile;
  measurements: IMeasurements;
}
