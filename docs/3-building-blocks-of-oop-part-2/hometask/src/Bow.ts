import { Weapon } from "./Weapon";
export class Bow extends Weapon {

    private readonly maxDurability: number;

    constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
        super('bow', baseDamage, baseDurability, value, weight);
        this.maxDurability = 1;
    }

    polish(): void {
        if (this.getDurability() + Bow.MODIFIER_CHANGE_RATE > this.maxDurability) {
            this.setDurability(this.maxDurability);
            console.log(`Your bow reached maximum durability.`);
            return;
        }

        this.setDurability(this.getDurability() + Bow.MODIFIER_CHANGE_RATE);
        console.log(`Your bow durability now is ${Number(this.getDurability()*100).toFixed(0)}.`);
    }
}