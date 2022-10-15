import { Weapon } from "./Weapon";
export class Bow extends Weapon {
    constructor(baseDamage: number, baseDurability: number, value: number, weight: number)
    constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
        super('bow', value, weight, baseDamage, baseDurability);
    }

    public polish(): void {

        if (this.getDurability() / 100 < 1) {
            this.setDurability();
            console.log(`Your bow durability now is ${this.getDurability()}.`);
        } else {
            console.log(`Your bow reached maximum durability.`);
        }

    }
}