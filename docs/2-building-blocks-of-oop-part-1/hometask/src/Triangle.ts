import { Point } from './point';
import { Shape } from './Shape';

export class Triangle extends Shape {

    constructor(p1: Point, p2: Point, p3: Point);
    constructor(p1?: Point, p2?: Point, p3?: Point) {
        if (p1 !== undefined && p2 !== undefined && p3 !== undefined) {
            super([p1, p2, p3]);
        }
    }

    toString(): string {
        return `Triangle[v1=${this.points[0]},v2=${this.points[1]},v3=${this.points[2]}]`
    }

    getType(): string {

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

    _isEqual(dist1: number, dist2: number): boolean {
        return Math.abs(dist1 - dist2) < 0.2;
    }
}