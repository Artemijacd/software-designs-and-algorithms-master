import { Controller } from './Controller'
import { mockData } from './mockData'
import { Shipment } from './Shipments/Shipment'


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function marks() {
    return [getRandomInt(3), getRandomInt(3), getRandomInt(3)];
}

const controller = Controller.getInstance();

mockData.map(item => controller.sendShippmentToShipper(item, marks()));
