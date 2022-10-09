import { Point } from "./point";
export abstract class Shape {

  protected points: Array<Point>;
  protected color: string;
  protected filled: boolean;

  constructor(points: Array<Point>);
  constructor(points: Array<Point>, color: string, filled: boolean);
  
  constructor(points?: Array<Point>, color?: string, filled?: boolean) {
    if (points !== undefined) {
      if (points[2] === undefined) {
        throw 'not enough points'
      } else {
        this.points = points;
        if (color !== undefined && filled !== undefined){
          this.color = color;
          this.filled = filled;
        } else {
          this.color = 'green';
          this.filled = true;
        }
      }
    }
  }

  toString(): string {
    return `A Shape with color of ${this.color} and ${this.filled ? '': 'not ' }filled. Points: ${this.points[0]}, ${this.points[1]}, ${this.points[2]}.`
  }

  getPerimeter(): number {
    let index = 0;
    const sum = (acc, point) => (index++, acc + point.distance(this.points[index]));
    return this.points.reduce(sum, 0);
  }

  abstract getType(): string;
}