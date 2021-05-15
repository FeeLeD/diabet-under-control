import Controller from "api/Controller";
import { IMeasurements } from "api/Controllers/Measurements";

export interface Api {
  controller: Controller;
  measurements: IMeasurements;
}
