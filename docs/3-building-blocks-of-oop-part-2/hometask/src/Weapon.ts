import { Item } from "./Item";

export class Weapon extends Item {
    private baseDamage: number;
    private damageModifier: number;
    private baseDurability: number;
    private durabilityModifier: number;

    constructor(name: string, baseDamage: number, baseDurability: number, value: number, weight: number) { 
        super(name, value, weight);
        this.baseDamage = baseDamage;
        this.damageModifier = Weapon.MODIFIER_CHANGE_RATE;
        this.baseDurability = baseDurability;
        this.durabilityModifier = Weapon.MODIFIER_CHANGE_RATE;
    }

    public polish(): void { }

    public use(): void {

        if (this.baseDurability + this.durabilityModifier < 0) {
            console.log(`You can't use the ${this.getName()} , it is broken.`);
            return;
        }
        
        console.log(`You use the ${this.getName()}, dealing ${this.getDamage()} points of damage.`);
        this.durabilityModifier -= Weapon.MODIFIER_CHANGE_RATE;

        if (this.baseDurability + this.durabilityModifier < 0) {
            console.log(`You use the ${this.getName()}, dealing ${this.getDamage()} points of damage. The ${this.getName()} breaks`);
            return;
        }
    }

    public toString(): string {
        return `${this.getName()} - Value: ${this.getValue()}, Weight: ${this.getWeight()}, Damage: ${this.getDamage()}, Durability: ${this.getDurability()}%`;
    }

    public setDamage(damage) {
        this.baseDamage = damage;
    }

    public setDurability(durability) {
        this.baseDurability = durability;
    }

    public getDamage(): number {
        return this.baseDamage + this.damageModifier;
    }

    public getDurability(): number {
        return this.baseDurability + this.durabilityModifier;
    }

    static MODIFIER_CHANGE_RATE = 0.05;
}