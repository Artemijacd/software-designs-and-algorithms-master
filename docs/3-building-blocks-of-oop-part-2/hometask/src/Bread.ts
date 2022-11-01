import { Consumable } from "./Consumable";

export class Bread extends Consumable {
    constructor(spoiled: boolean);
    constructor(spoiled: boolean) {
        super('bread', 5, 100, spoiled);
    }
}