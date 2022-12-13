import { Vertex } from "./Vertex";
import { Dijkstra } from "./Dijkstra";
import { PathInterface } from "./PathInterface";
import { WeightedGraph } from "./WeightedGraph";
import { Path } from "./Path";

export class DAlgorithm implements Dijkstra<Vertex> {

    public graph: WeightedGraph

    constructor(graph: WeightedGraph) {
        this.graph = graph;
    }

    public findAllShortestPaths(vertex: Vertex): PathInterface[] {

        const allPaths = (start) => (finish) => {
            return this.findShortestPath(start, finish);
        }
        const fromPoint = allPaths(vertex);

        return Object.keys(this.graph.graph).map(point => fromPoint(new Vertex(point)));
    }

    public findShortestPath(vertex1: Vertex, vertex2: Vertex): PathInterface {

        const start = vertex1.point;
        const finish = vertex2.point;
        let distances = 0;
        const vertexes: string[] = [];
        const dfs = (graph, start) => {

            if ((graph[finish].length == 0) || (graph[finish].length == 0)) return distances = Infinity;
            vertexes.push(start.toString());
            if (start == finish) return 0;
            if (graph[start].filter(val => Object.keys(val).toString() === finish.toString()).length == 0) {
                const stt = graph[start].reduce((acc, val) => acc > Object["values"](val) ? acc : Object["values"](val));
                const point = Object.keys(stt);
                const distance = Object["values"](stt);
                distances += Number(distance);
                dfs(graph, point);
            } else {
                const stt = graph[start].filter(val => Object.keys(val).toString() === finish.toString())[0];
                const point = Object.keys(stt);
                const distance = Object["values"](stt);
                distances += Number(distance);
                vertexes.push(point.toString());
                return distances;
            }
        }

        dfs(this.graph.graph, start);
        return new Path(vertexes, distances);

    }

}