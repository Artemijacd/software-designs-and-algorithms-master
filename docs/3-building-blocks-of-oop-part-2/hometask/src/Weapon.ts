import { Item } from "./Item";

const MODIFIER_CHANGE_RATE = 0.05;
export class Weapon extends Item {
    private baseDamage: number;
    private damageModifier: number;
    private baseDurability: number;
    private durabilityModifier: number;

    constructor(name: string, value: number, weight: number, baseDamage: number, baseDurability: number);
    constructor(name: string, value: number, weight: number, baseDamage: number, baseDurability: number) { 
        super(name, value, weight);
        this.baseDamage = baseDamage;
        this.damageModifier = MODIFIER_CHANGE_RATE;
        this.baseDurability = baseDurability;
        this.durabilityModifier = MODIFIER_CHANGE_RATE;
        this.setDamage();
        this.setDurability();
    }

    public polish(): void { }

    public use(): void {

        const buffDurability = this.getDurability();
        let currdurability = this.baseDurability - this.durabilityModifier;

        if (currdurability > 0) {
            this.baseDurability = currdurability;
            console.log(`You use the ${this.getName()}, dealing ${this.getDamage()} points of damage.`);
            return;
        }
        if (buffDurability > 0 && currdurability <= 0 ) {
            this.baseDurability = 0;
            console.log(`You use the ${this.getName()}, dealing ${this.getDamage()} points of damage. The ${this.getName()} breaks`);
            return;
        }
        if (buffDurability == 0) {
            this.baseDurability = 0;
            console.log(`You can't use the ${this.getName()} , it is broken.`);
            return;
        }
        
    }

    public toString(): string {
        return `Id: ${this.getId()} || ${this.getName()} - Value: ${this.getValue()}, Weight: ${this.getWeight()}, Damage: ${this.getDamage()}, Durability: ${this.getDurability()}%`;
    }

    public setDamage(): void
    public setDamage(damageIncrease: number): void
    public setDamage(damageIncrease: number, damageLimit: number): void
    public setDamage(damageIncrease?: number, damageLimit?: number): void {
        if(damageIncrease === undefined && damageLimit === undefined) {
            this.baseDamage = this.baseDamage + this.damageModifier;
        } 
        if (damageIncrease !== undefined) {
            this.baseDamage = this.baseDamage * damageIncrease;
        }
        if (damageLimit !== undefined && damageIncrease !== undefined) {
            this.baseDamage = damageLimit * damageIncrease;
        }
    }

    public setDurability(): void {
        this.baseDurability = this.baseDurability + this.durabilityModifier;
        if (this.baseDurability > 1) {
            this.baseDurability = 1;
        }
    }

    public getDamage(): number {
        return Number(this.baseDamage.toFixed(2));
    }

    public getDurability(): number {
        return Number((this.baseDurability * 100).toFixed(2));
    }
}