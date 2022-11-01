import { Point } from "./point";
export abstract class Shape {

  protected points: Array<Point>;
  protected color: string;
  protected filled: boolean;

  constructor(points: Array<Point>);
  constructor(points: Array<Point>, color: string, filled: boolean);
  
  constructor(points: Array<Point>, color?: string, filled?: boolean) {

    if (points.length < 3) {
      throw 'not enough points'
    } 

    this.points = points;
    if (color !== undefined && filled !== undefined){
      this.color = color;
      this.filled = filled;
    } else {
      this.color = 'green';
      this.filled = true;
    }

  }

  public toString(): string {
    return `A Shape with color of ${this.color} and ${this.filled ? '': 'not ' }filled. Points:${this.points.map(point => ` ${point}`)}.`
  }

  public getPerimeter(): number {
    let index = 0;
    const sum = (acc, point) => (index++, acc + point.distance(this.points[index]));
    return this.points.reduce(sum, 0);
  }

  abstract getType(): string;
}