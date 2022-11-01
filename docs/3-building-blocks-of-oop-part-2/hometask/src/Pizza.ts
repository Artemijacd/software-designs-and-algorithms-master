import { Consumable } from "./Consumable";
export class Pizza extends Consumable {
    private numberOfSlices: number;
    private slicesEaten: number;

    constructor(numberOfSlices: number, spoiled: boolean)
    constructor(numberOfSlices: number, spoiled: boolean) {
        super('pizza', numberOfSlices*2, numberOfSlices * 0.05, spoiled)
        this.numberOfSlices = numberOfSlices;
        this.slicesEaten = 0;
    }

    public eat(): void {

        if (this.slicesEaten < this.numberOfSlices){
            this.slicesEaten++;
            console.log("You eat a slice of the pizza.");
            if (this.slicesEaten >= this.numberOfSlices) {
                this.setConsumed(true);
                console.log("All gone!");
            }

        } else {
            console.log("You've got no pizza");    
        }
    }
}