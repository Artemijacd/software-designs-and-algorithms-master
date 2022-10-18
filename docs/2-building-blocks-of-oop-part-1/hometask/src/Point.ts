export class Point {
    private x: number;
    private y: number;

    constructor();
    constructor(x: number, y: number);
    constructor(x?: number, y?: number) {
        this.x = x ?? 0;
        this.y = y ?? 0;
    };

    public toString(): string {
        return `(${this.x}, ${this.y})`
    }

    distance(): number;
    distance(other: Point): number;
    distance(x: number, yExt: number): number;

    public distance(other?: Point | number, yExt?: number): number {

        const formula = (xA: number, yA: number) => (xB: number, yB: number) => {
            return Math.sqrt(Math.pow((xB-xA), 2) + Math.pow((yB-yA), 2))
        }

        const fromPoint = formula(this.x, this.y);
        if (typeof other === 'number' && yExt !== undefined) {
            return fromPoint(other, yExt);
        } 
        
        if (other === undefined && yExt === undefined) {
            return fromPoint(0,0);
        }

        const point = other as Point;
        const { x, y } = point;
        return fromPoint(x, y);
        
    }

}