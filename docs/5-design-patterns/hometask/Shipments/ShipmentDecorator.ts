import { Data } from '../Data';
import { AirWestShipper } from '../Shippers/AirWestShipper';
import { ChicagoSprintShipper } from "../Shippers/ChicagoSprintShipper";
import { PacificParcelShipper } from "../Shippers/PacificParcelShipper";
import { Shipment } from './Shipment';



export class ShipmentDecorator {

    private static shipmentDecorator: ShipmentDecorator;
    private shipment: Shipment;

    private constructor() {}

    public static getInstance(): ShipmentDecorator {
        if (!ShipmentDecorator.shipmentDecorator) {
            ShipmentDecorator.shipmentDecorator = new ShipmentDecorator();
        }   
        return ShipmentDecorator.shipmentDecorator;
    }

    public ship(item: Data, marks: number[]) {
        this.sendShippmentToShipper(item);
        this.shipment.ship();
        this.getMarks(marks);
    }

    private getMarks(marks: number[]) {
        marks.map(mark => {
            switch(mark) {
                case 0:
                    console.log('**MARK FRAGILE**');
                    break;
                case 1:
                    console.log('**MARK DO NOT LEAVE IF ADDRESS NOT AT HOME**');
                    break;
                case 2:
                    console.log('**MARK RETURN RECEIPT REQUESTED**');
                    break;
            }
        })
    }

    private sendShippmentToShipper(item: Data): void {

        const zipCode = this.getFromZipCode(item)[0]

        switch (zipCode) {

            case '1':
            case '2':
            case '3':
                this.shipment = this.setShipper(new AirWestShipper(), item);
            
            case '4':
            case '5':
            case '6':
                this.shipment =  this.setShipper(new ChicagoSprintShipper(), item);

            case '7':
            case '8':
            case '9':
                this.shipment =  this.setShipper(new PacificParcelShipper(), item);
            
            default: 
                this.shipment =  this.setShipper(new AirWestShipper(), item);
                
        }

    }


    private setShipper(shipper, item): Shipment {
        const shipment = shipper.getInstance(item);
        shipper.getCost(shipment);
        return shipment;
    }

    private getFromZipCode(item: Data) {
        return item.FromZipCode;
    }

}