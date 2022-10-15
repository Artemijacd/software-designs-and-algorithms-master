import { Weapon } from "./Weapon";
export class Sword extends Weapon {
    constructor(baseDamage: number, baseDurability: number, value: number, weight: number)
    constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
        super('sword', value, weight, baseDamage, baseDurability);
    }

    public polish(): void {

        const damageLimit = 100;
        const damageIncrease = 1.25;

        if (this.getDamage() <= damageLimit) {
            this.setDamage(damageIncrease);
            console.log(`Damage of your sword has been increased on 25%.`);
        } else {
            this.setDamage(damageLimit, damageIncrease);
            console.log(`Your sword reached maximum damage.`);
        }
    }
}