export interface myPriorityQueue {
    enQueue(value: number): void;
    deQueue(): number;
    displayQueue(): number[];
    getFront(): number;
    getRear(): number;
    isEmpty(): boolean;
    isFull(): boolean;
}