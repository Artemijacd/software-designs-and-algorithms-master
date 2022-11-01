import { Item } from "./Item";

export abstract class Consumable extends Item {

    private consumed: boolean;
    private spoiled: boolean;

    constructor(name: string, value: number, weight: number, spoiled: boolean){
        super(name, value, weight);
        this.spoiled = spoiled;
        this.setConsumed(false);
    }

    public use(): void {
        if(this.isConsumed()) {
            console.log(`There is nothing left of the ${this.getName()} to consume.`);
            return;
        }
        this.eat();
    }

    public eat(): void { 
        this.setConsumed(true);
        console.log(`You eat a ${this.getName()}`);
        if (this.spoiled) {
            console.log(`${this.getName()} was spoiled, You fill sick now.`)
        }
    }

    public isConsumed(): boolean {
        return this.consumed;
    }

    public setConsumed(consumed: boolean): void {
        this.consumed = consumed;
    }

    public toString(): string {
        return `Id: ${this.getId()} || ${this.getName()} - Value: ${this.getValue()}, Weight: ${this.getWeight()}`;
    }

}