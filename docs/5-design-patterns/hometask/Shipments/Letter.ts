import { Shipment } from "./Shipment";

export class Letter extends Shipment {

    constructor(Weight: number, FromAddress: string, FromZipCode: string, ToAddress: string, ToZipCode: string) {
        super('Letter', Weight, FromAddress, FromZipCode, ToAddress, ToZipCode);
    }
}