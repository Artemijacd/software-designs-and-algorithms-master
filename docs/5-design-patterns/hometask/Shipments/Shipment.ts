import { Shipper } from '../Shippers/Shipper';
import { Shippable } from './Shippable'

let id = 1;

export abstract class Shipment implements Shippable {

    private readonly ShipmentId: number;
    private Weight: number;
    private FromAddress: string;
    private FromZipCode: string;
    private ToAddress: string;
    private ToZipCode: string;
    private marks: number[];
    private shipper: Shipper;
    private Type: string;
    private Cost: number;
    
    constructor(Type: string, Weight: number, FromAddress: string, FromZipCode: string, ToAddress: string, ToZipCode: string) {
        this.ShipmentId = this.setShipmentId();
        this.Weight = Weight;
        this.FromAddress = FromAddress;
        this.FromZipCode = FromZipCode;
        this.ToAddress = ToAddress;
        this.ToZipCode = ToZipCode;
        this.Type = Type;
    }

    public getInstance(): void {
        
    }

    public setShipmentId(): number {
        return id++;
    }

    public getShipmentId(): number {
        return this.ShipmentId;
    }

    public ship(): string {
        return `Shipment with the Id: ${this.getShipmentId()}; will be picked up from ${this.getFromZipCode()} ${this.getFromAddress()} and shipped to ${this.getToZipCode()} ${this.getToAddress()}
Cost: ${this.getCost()}$
${this.getMarks().map(mark => mark)}`
    }

    public getWeight() {
        return this.Weight;
    }

    public setCost(cost: number) {
        this.Cost = cost;
    }

    public getCost() {
        return this.Cost;
    }


    public getType() {
        return this.Type;
    }

    public getFromAddress() {
        return this.FromAddress;
    }

    public getFromZipCode() {
        return this.FromZipCode;
    }

    public getToAddress() {
        return this.ToAddress;
    }

    public getToZipCode() {
        return this.ToZipCode;
    }

    public setShipper(shipper: Shipper) {
        this.shipper = shipper;
    }

    public getShipper() {
        return this.shipper;
    }

    public getMarks() {
        const marks: string[] = [];
        this.marks.map(mark => {
            switch(mark) {
                case 0:
                    marks.push('**MARK FRAGILE**');
                    break;
                case 1:
                    marks.push('**MARK DO NOT LEAVE IF ADDRESS NOT AT HOME**');
                    break;
                case 2:
                    marks.push('**MARK RETURN RECEIPT REQUESTED**');
                    break;
            }
        })

        return marks;
    }

    public setMarks(marks: number[]) {
        this.marks = marks;
    }

}