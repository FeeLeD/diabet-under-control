import Controller from "api/Controller";
import {
  MeasurementCreateDto,
  MeasurementCreateWithSiteIdDto,
  MeasurementDeleteDto,
  MeasurementDto,
  MeasurementUpdateDto,
} from "api/DTOs/Measurements";

export interface IMeasurements {
  createMeasurement: (
    measurement: MeasurementCreateWithSiteIdDto
  ) => Promise<void>;
  updateMeasurement: (data: MeasurementUpdateDto) => Promise<void>;
  deleteMeasurement: (data: MeasurementDeleteDto) => Promise<void>;
  getMeasurements: () => Promise<MeasurementDto[]>;
}

const PREFIX = "https://609d39d704bffa001792e3b5.mockapi.io/api/dev";

export default class MeasurementsController
  extends Controller
  implements IMeasurements
{
  async createMeasurement({
    siteId,
    ...measurement
  }: MeasurementCreateWithSiteIdDto) {
    await this.post<void, MeasurementCreateDto>(
      /* `${PREFIX}/measurements/${siteId}` */
      `${PREFIX}/measurements`,
      {
        ...measurement,
      }
    );
  }

  async updateMeasurement({
    measurementId,
    ...measurement
  }: MeasurementUpdateDto) {
    await this.put<void, MeasurementCreateDto>(
      `${PREFIX}measurements/${measurementId}`,
      { ...measurement }
    );
  }

  async deleteMeasurement({ siteId, measurementId }: MeasurementDeleteDto) {
    await this.delete(`${PREFIX}measurements/${siteId}/${measurementId}`);
  }

  async getMeasurements() {
    const measurements = await this.get<MeasurementDto[]>(
      /* `${PREFIX}measurements/me` */
      `${PREFIX}/measurements`
    );

    return measurements;
  }
}
