import { Letter } from "../Shipments/Letter";
import { Package } from "../Shipments/Package";
import { Oversized } from "../Shipments/Oversized";
import { Data } from "../Data";
import { Shipment } from "../Shipments/Shipment";
import { IShipper } from "./IShipper";

export abstract class Shipper implements IShipper {

    private Name: string;
    private letterPrice: number;
    private packagePrice: number;
    private oversizedPrice: number;

    constructor(Name: string, letterPrice: number, packagePrice: number, oversizedPrice: number){
        this.Name = Name;
        this.letterPrice = letterPrice;
        this.packagePrice = packagePrice;
        this.oversizedPrice = oversizedPrice;
    }

    public getInstance(item, marks): Shipment {
        return this.getShipmentType(item, marks);
    }

    public getCost(shipment: Shipment): void {
        this.getPrice(shipment);
    }

    private getShipmentType(item: Data, marks: number[]): Shipment {

        if (item.Weight <= 15) {
            const letter = new Letter(item.Weight, item.FromAddress, item.FromZipCode, item.ToAddress, item.ToZipCode);
            letter.setMarks(marks);
            return letter
        }
        if (item.Weight <= 160) {
            const myPackage = new Package(item.Weight, item.FromAddress, item.FromZipCode, item.ToAddress, item.ToZipCode);
            myPackage.setMarks(marks);
            return myPackage;
        }
        if (item.Weight > 160) {
            const oversized = new Oversized(item.Weight, item.FromAddress, item.FromZipCode, item.ToAddress, item.ToZipCode);
            oversized.setMarks(marks);
            return oversized;
        }
        const oversized = new Oversized(item.Weight, item.FromAddress, item.FromZipCode, item.ToAddress, item.ToZipCode);
        oversized.setMarks(marks);
        return oversized;

    }

    private getPrice(shipment: Shipment): void {
        switch(shipment.getType()) {
            case 'Letter':
                shipment.setCost(this.letterPrice * shipment.getWeight());
                return;
            case 'Package':
                shipment.setCost(this.packagePrice * shipment.getWeight());
                return;
            case 'Oversized':
                shipment.setCost((this.letterPrice + this.oversizedPrice) * shipment.getWeight());
                return;
        }
        shipment.setCost(this.letterPrice * shipment.getWeight());
    }

}