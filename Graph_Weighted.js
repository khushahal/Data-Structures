/*
* Weighted graph will showcase the value of edges or we can say distance between 2 vertex.

GRAPH ADJACENT LIST 
{
  a: [ { node: 'b', weight: 2 }, { node: 'c', weight: 3 } ],
  b: [ { node: 'a', weight: 2 }, { node: 'd', weight: 1 } ],
  c: [ { node: 'a', weight: 3 }, { node: 'e', weight: 2 } ],
  d: [
    { node: 'b', weight: 1 },
    { node: 'e', weight: 10 },
    { node: 'f', weight: 6 }
  ],
  e: [
    { node: 'd', weight: 10 },
    { node: 'c', weight: 2 },
    { node: 'f', weight: 5 }
  ],
  f: [ { node: 'd', weight: 6 }, { node: 'e', weight: 5 } ]
}

*/

class WeightedGraph {
  constructor() {
    this.AdjList = {};
  }

  // add vertex to graph
  addVertex(v) {
    !this.AdjList[v] && (this.AdjList[v] = []); //do not allow duplicate value to vertex.
  }

  //Connect two vertex with edges with value
  addEdges(v1, v2, weight) {
    // connect v1 vertex to v2 with value.
    this.AdjList[v1].push({ node: v2, weight });

    // Since graph is undirected, so reverse relation will be available.
    this.AdjList[v2].push({ node: v1, weight });
  }

  // remove the relation between 2 vertex by filtering.
  removeEdge(v1, v2) {
    this.AdjList[V1] = this.AdjList[v1].filter((v) => v != v2);
    this.AdjList[V2] = this.AdjList[v2].filter((v) => v != v1);
  }
}

/**
   *      graph will be like this
   * 
   *         a 
   *      2  /  \  3   
   *       b     c
   *     1 |  10   \ 2
          d ------ e
        6  \     /   5
               F  
   *
   */
const g = new WeightedGraph();

g.addVertex("a");
g.addVertex("b");
g.addVertex("c");
g.addVertex("d");
g.addVertex("e");
g.addVertex("f");

g.addEdges("a", "b", 2);
g.addEdges("a", "c", 3);
g.addEdges("b", "d", 1);
g.addEdges("d", "e", 10);
g.addEdges("d", "f", 6);
g.addEdges("e", "c", 2);
g.addEdges("e", "f", 5);

console.log(" adjlist ", g.AdjList);
