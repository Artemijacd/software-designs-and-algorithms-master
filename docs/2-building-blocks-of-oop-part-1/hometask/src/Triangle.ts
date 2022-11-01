import { Point } from './point';
import { Shape } from './Shape';

export class Triangle extends Shape {

    constructor(p1: Point, p2: Point, p3: Point, color: string, filled: boolean);
    constructor(p1: Point, p2: Point, p3: Point, color?: string, filled?: boolean) {
        if (color !== undefined && filled !== undefined) {
            super([p1, p2, p3], color, filled);
        } else {
            super([p1, p2, p3]);
        }
    }

    public toString(): string {
        return `Triangle[${this.points.map((point, index) => `v${++index}=${point}`)}]`
    }

    public getType(): string {

        let index = 0;
        const result = this.points.filter(point => (index++, 
            this._isEqual(point.distance(this.points[index]), point.distance(this.points[index-2 < 0 ? index : index-2]))));
        if (result[2] !== undefined) {
            return 'equilateral triangle';
        } 
        if (result[1] !== undefined) {
            return 'isosceles triangle';
        } else {
            return 'scalene triangle';
        }
    }

    private _isEqual(dist1: number, dist2: number): boolean {
        return Math.abs(dist1 - dist2) < 0.2;
    }
}