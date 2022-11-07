import { Data } from "./Data";
import { AirWestShipper } from "./Shippers/AirWestShipper";
import { ChicagoSprintShipper } from "./Shippers/ChicagoSprintShipper";
import { PacificParcelShipper } from "./Shippers/PacificParcelShipper";
import { Shipment } from "./Shipments/Shipment";

export class Controller {

    private static controller: Controller;

    private constructor() {}

    public static getInstance(): Controller {
        if (!Controller.controller) {
            Controller.controller = new Controller();
        }   
        return Controller.controller;
    }

    public sendShippmentToShipper(item: Data, marks: number[]): Shipment {

        if(this.getFromZipCode(item).startsWith('1') 
            || this.getFromZipCode(item).startsWith('2') 
            || this.getFromZipCode(item).startsWith('3')) {
            
            return this.setShipper(new AirWestShipper(), item, marks);
        }
        if(this.getFromZipCode(item).startsWith('4') 
            || this.getFromZipCode(item).startsWith('5') 
            || this.getFromZipCode(item).startsWith('6')) {

            return this.setShipper(new ChicagoSprintShipper(), item, marks);
        }
        if(this.getFromZipCode(item).startsWith('7') 
            || this.getFromZipCode(item).startsWith('8') 
            || this.getFromZipCode(item).startsWith('9')) {

            return this.setShipper(new PacificParcelShipper(), item, marks);
        }
            return this.setShipper(new AirWestShipper(), item, marks);
    }   

    private setShipper(shipper, item, marks): Shipment {
        const shipment = shipper.getInstance(item, marks);
        shipper.getCost(shipment);
        return shipment;
    }

    private getFromZipCode(item: Data) {
        return item.FromZipCode;
    }
}