import { Api } from "interfaces/api";
import Controller from "./Controller";
import MeasurementsController from "api/Controllers/Measurements";

export const api: Api = {
  controller: new Controller(),
  measurements: new MeasurementsController(),
};
