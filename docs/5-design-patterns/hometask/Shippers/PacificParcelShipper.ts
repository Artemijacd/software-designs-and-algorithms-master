import { Shipper } from "./Shipper";

export class PacificParcelShipper extends Shipper {

    constructor() {
        super('Pacific Parcel', 0.51, 0.19, 0.02);
    }

}