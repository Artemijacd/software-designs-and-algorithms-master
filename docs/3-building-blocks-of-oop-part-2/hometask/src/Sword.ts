import { Weapon } from "./Weapon";
export class Sword extends Weapon {

    private readonly maxDamage: number;

    constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
        super('sword', baseDamage, baseDurability, value, weight);
        this.maxDamage = baseDamage * 1.25;
    }

    polish(): void {
        if (this.getDamage() + Sword.MODIFIER_CHANGE_RATE > this.maxDamage) {
            console.log(`Your sword reached maximum damage.`);
            this.setDamage(this.maxDamage);
            return;
        }

        this.setDamage(this.getDamage() + Sword.MODIFIER_CHANGE_RATE);
        console.log(`Damage of your sword has been increased on 25%.`);
        
    }

}