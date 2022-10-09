export class Point {
    private x: number;
    private y: number;

    constructor();
    constructor(x: number, y: number);
    constructor(x?: number, y?: number) {
        this.x = x ?? 0;
        this.y = y ?? 0;
    };

    toString(): string {
        return `(${this.x}, ${this.y})`
    }

    distance(): number;
    distance(other: Point): number;
    distance(x: number, y: number): number;

    distance(other?: Point | number, y?: number): number {
        const formula = (xA,yA) => (xB, yB) => {
            return Math.sqrt(Math.pow((xB-xA), 2) + Math.pow((yB-yA), 2))
        }
        const fromPoint = formula(this.x, this.y);
        if (typeof other === 'number' && y !== undefined) {
            return fromPoint(other, y);
        } 
        if (other === undefined && y === undefined) {
            return fromPoint(0,0);
        } else {
            const point = other as Point;
            const { x, y } = point;
            return fromPoint(x, y);
        }
        
    }
}