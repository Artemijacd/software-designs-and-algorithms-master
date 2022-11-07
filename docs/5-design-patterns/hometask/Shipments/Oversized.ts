import { Shipment } from "./Shipment";

export class Oversized extends Shipment {

    constructor(Weight: number, FromAddress: string, FromZipCode: string, ToAddress: string, ToZipCode: string) {
        super('Oversized', Weight, FromAddress, FromZipCode, ToAddress, ToZipCode)
        //Weight: number, FromAddress: string, FromZipCode: string, ToAddress: string, ToZipCode: string
    }

}