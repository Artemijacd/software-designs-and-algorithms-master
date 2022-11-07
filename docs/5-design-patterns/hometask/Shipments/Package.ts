import { Shipment } from "./Shipment";

export class Package extends Shipment {

    constructor(Weight: number, FromAddress: string, FromZipCode: string, ToAddress: string, ToZipCode: string) {
        super('Package', Weight, FromAddress, FromZipCode, ToAddress, ToZipCode);
    }

}