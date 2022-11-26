import { PathInterface } from "./PathInterface";

export interface Dijkstra<T> {
    findShortestPath(vertex1: T, vertex2: T): PathInterface;
    findAllShortestPaths(vertex: T): PathInterface[];
  }