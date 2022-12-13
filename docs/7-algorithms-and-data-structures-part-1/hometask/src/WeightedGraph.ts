import { WeightedGraphInterface } from './WeightedGraphInterface'
import { Vertex } from './Vertex'

export class WeightedGraph implements WeightedGraphInterface<Vertex> {


    public graph: {}

    constructor() {
        this.graph = {};
    }

    public addVertex(key: string): void {
        this.graph[key] = [];
    }

    public addEdge(vertex1: Vertex, vertex2: Vertex, weight: number): void {
        const from = vertex1.point;
        const to = vertex2.point;
        this.graph[from].push({[to]: weight});
        this.graph[to].push({[from]: weight});
    }
}   

