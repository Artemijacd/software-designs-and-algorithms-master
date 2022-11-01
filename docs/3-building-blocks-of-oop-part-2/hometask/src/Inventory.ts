import { Item } from "./Item";
import { ItemWeightComparator } from "./ItemWeightComparator";
export class Inventory {
    private items: Item[];

    constructor();
    constructor() {
        this.items = [];
    }

    public addItem(item: Item): void {
        this.items.push(item);
    }

    sort(): void;
    sort(comparator: ItemWeightComparator): void;

    public sort(comparator?: ItemWeightComparator): void {
        if (comparator === undefined) {
            this.items.sort((a, b) => a.compareTo(b));
        } else {
            this.items.sort((a, b) => comparator.compare(a, b));
        }
    }

    public toString(): string {
        return this.items.join('\n ');
    }
}