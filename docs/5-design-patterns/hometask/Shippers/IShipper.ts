import { Shipment } from "../Shipments/Shipment";

export interface IShipper {
    getInstance(item, marks): Shipment;
    getCost(shipment: Shipment): void;
}