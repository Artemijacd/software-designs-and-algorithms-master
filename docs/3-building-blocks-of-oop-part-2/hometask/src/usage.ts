import { Inventory } from "./Inventory";
import { ItemWeightComparator } from "./ItemWeightComparator";
import { Item } from "./Item";
import { Sword } from "./Sword";
import { Pizza } from "./Pizza";
import { Bow } from "./Bow";
import { Bread } from "./Bread";
import { Weapon } from "./Weapon";

// Create the inventory
const inventory: Inventory = new Inventory();

// Create a set of items
const a: Item = new Sword(30.4219, 0.7893, 300, 2.032);
const b: Item = new Sword(40, 0.7893, 200, 2);
Item.reset();
const c: Item = new Sword(40, 1, 100, 3);
const d: Item = new Bow(25, 0.921, 150, 1.703);
const e: Item = new Sword(35, 0.9, 250, 1.873);
const f: Item = new Bow(21, 0.8343, 250, 1.212);
const g: Item = new Bow(17, 0.5123, 210, 0.945);
Item.reset();
const h: Item = new Bow(19, 0.234, 130, 0.834);
const i: Item = new Bow(16, 0.431, 160, 0.623);
const j: Item = new Bow(15, 0.522, 140, 0.642);
const pizza: Item = new Pizza(12, false);
const pizza2: Item = new Pizza(2, true);
const breadSpoil: Item = new Bread(true);
const bread: Item = new Bread(false);
//                numberOfSlices, spoiled 

//(30.4219, 0.7893, 300, 2.032);
//baseDamage, baseDurability, value, weight

// Add the items to the inventory
inventory.addItem(a);
inventory.addItem(b);
inventory.addItem(c);
inventory.addItem(d);
inventory.addItem(e);
inventory.addItem(f);
inventory.addItem(g);
inventory.addItem(h);
inventory.addItem(i);
inventory.addItem(j);
inventory.addItem(pizza);
inventory.addItem(pizza2);
inventory.addItem(bread);
inventory.addItem(breadSpoil);

// Display the inventory
console.log('Display the inventory \n', inventory.toString());

// Sort by natural order
inventory.sort();

// Display the new inventory
console.log('Display the new inventory \n', inventory.toString());

// Sort by weight
inventory.sort(new ItemWeightComparator());

// Display the inventory again
console.log('Display the inventory again \n', inventory.toString());

// Use the sword
//console.log(a.use());
//console.log(a.use());

const useSword = 15;
const polishSword = 10;
const useBow = 5;
const polishBow = 10;

for (let i = 0; i <= useSword; i++) {
    a.use();
}
for (let i = 0; i <= polishSword; i++) {
    const ee = e as Weapon;
    ee.polish();
}
a.use();
a.use();
for (let i = 0; i <= useBow; i++) {
    d.use();
}

for (let i = 0; i <= polishBow; i++) {
    const dd = d as Weapon;
    dd.polish();
}

pizza.use();
bread.use();
bread.use();
pizza.use();
pizza.use();
pizza.use();
pizza.use();
pizza.use();
pizza.use();
pizza2.use();
pizza2.use();
pizza2.use();
breadSpoil.use();
breadSpoil.use();
breadSpoil.use();
breadSpoil.use();
bread.use();
