import { PathInterface } from "./PathInterface";

export class Path implements PathInterface {
    
    public path: string[];
    public distance: number;
    
    constructor(path: string[], distance: number) {
        this.path = path;
        this.distance = distance;
    }

}