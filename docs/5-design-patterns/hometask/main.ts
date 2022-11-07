import { Controller } from './Controller'
import { mockData } from './mockData'
import { Shipment } from './Shipments/Shipment'

const mockObjects: Shipment[] = [];
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function marks() {
    return [getRandomInt(3), getRandomInt(3), getRandomInt(3)];
}

const controller = Controller.getInstance();

mockData.map(item => mockObjects.push(controller.sendShippmentToShipper(item, marks())));

mockObjects.map(item => console.log(item.ship()));

