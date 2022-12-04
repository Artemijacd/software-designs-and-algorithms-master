import { Data } from "./Data";
import { Shipment } from "./Shipments/Shipment";
import { ShipmentDecorator } from "./Shipments/ShipmentDecorator";

export class Controller {

    private static controller: Controller;

    private constructor() {}

    public static getInstance(): Controller {
        if (!Controller.controller) {
            Controller.controller = new Controller();
        }   
        return Controller.controller;
    }

    public sendShippmentToShipper(item: Data, marks: number[]) {
        const shipmentDecorator = ShipmentDecorator.getInstance();
        shipmentDecorator.ship(item, marks);
    }

}