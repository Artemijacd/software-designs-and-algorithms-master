import { Shipper } from "./Shipper";

export class AirWestShipper extends Shipper {

    constructor() {
        super('Air West', 0.39, 0.25, 10);
    }

}