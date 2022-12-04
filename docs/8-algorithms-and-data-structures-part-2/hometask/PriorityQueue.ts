import { myPriorityQueue } from "./Queue"

export class myPrioritizedQueue implements myPriorityQueue {

    private rear: number
    private front: number
    private size: number
    private arr: number[]

	constructor(size: number) {
		this.rear = -1;
		this.front = -1;
		this.size = size;
		this.arr = new Array();
	}


	public enQueue(value) {
		if (this.isFull()) return false;
		if (this.front == -1) {
			this.front = this.rear = 0;
			this.arr[this.rear] = value;
		}
		else if (this.rear == this.size - 1 && this.front != 0) {
			this.rear = 0;
			this.arr[this.rear] = value;
		}
		else {
			this.rear++;
			this.arr[this.rear] = value;
		}
	}

	public deQueue() {
        if (this.isEmpty()) return -Infinity;
		let data = this.arr[this.front];
		this.arr[this.front] = -1;
		if (this.front == this.rear) {
			this.front = -1;
			this.rear = -1;
		}
		else if (this.front == this.size - 1)
			this.front = 0;
		else
			this.front++;
		return data;
	}

	public displayQueue() {
		if (this.isEmpty()) return [];
        const displayArray: number[] = [];
        for (let i = 0; i < this.size; i++) {
            displayArray.push(this.arr[i]);
        }
        return displayArray;
	}
    
	public getFront() {
        if(this.isEmpty()) {
            return -1
        }
        return this.arr[this.front];
    }

    public getRear() {
        if(this.isEmpty()) {
            return -1
        }
        return this.arr[this.rear];
    }

    public isEmpty() {
        if (this.front == -1) {
			console.log("Queue is Empty");
			return true;
		}
		return false;
    }

    public isFull() {
        if ((this.front == 0 && this.rear == this.size - 1) ||
        (this.rear == (this.front - 1) % (this.size - 1))) {
            return true;
        }
		return false;
    }
}