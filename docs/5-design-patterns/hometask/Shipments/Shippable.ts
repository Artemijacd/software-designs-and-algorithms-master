export interface Shippable {
    getInstance(): void;
    getShipmentId(): number;
    ship(): void;
}
