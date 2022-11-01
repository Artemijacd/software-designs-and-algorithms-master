import { Comparable } from './Comparable';

let id = 0;

export abstract class Item implements Comparable<Item> {
    
    private id: number;
    private value: number;
    private weight: number;
    private name: string;


    constructor(name: string, value: number, weight: number);
    constructor(name: string, value: number, weight: number) {
        this.setNumberOfItems();
        this.setName(name)
        this.setValue(value);
        this.setWeight(weight)
    }

    public use(): void {}

    public compareTo(other: Item): number {
        if (this.getValue() > other.getValue()){
            return 1;
        }
        if (this.getValue() < other.getValue()){
            return -1;
        }
        return 0;
    }

    public toString(): string {
        return `Id: ${this.getId()} || ${this.getName()} - Value: ${this.getValue()}, Weight: ${this.getWeight()}`;
    }

    public getId(): number {
        return this.id;
    }

    public getValue(): number {
        return this.value;
    }

    public getName(): string {
        return this.name;
    }

    public getWeight(): number {
        return Number(this.weight.toFixed(2));
    }

    public setValue(price: number): void {
        this.value = price;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public setWeight(weight: number): void {
        this.weight = weight;
    }

    public setNumberOfItems(): void {
        this.id = id++;
    }

    public static reset(): void {
        id = 0;
    }
}
