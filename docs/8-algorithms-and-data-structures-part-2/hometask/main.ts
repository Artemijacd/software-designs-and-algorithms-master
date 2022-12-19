import { myPrioritizedQueue } from './PriorityQueue'

const queue = new myPrioritizedQueue(10);

function queueCycle(inQueue: number, deQueue: number) {
    
    for (let i = 1; i < inQueue; i++) {
        if (!queue.isFull()) {
            let num = Math.floor(Math.random() * 10);
            queue.enQueue(num);
        } else {
            console.log('In Queue:', queue.displayQueue());
            console.log('Front:', queue.getFront());
            console.log('Rear:', queue.getRear());
            console.log('Remove from queue:', deQueue);
            for (let i = 1; i < deQueue; i++) {
                console.log('Dequeue:', queue.deQueue());
            }
            console.log(queue.displayQueue());
            console.log('Front:', queue.getFront());
            console.log('Rear:', queue.getRear());
        }
    }
}

queueCycle(10000, 3);