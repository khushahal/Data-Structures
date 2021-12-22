/**
 * We will create graph using adjacency list. It is most common and suitable way to create a graph.
 * graph representation below :-
 * graph = {
  'a' => [ 'b', 'e' ],
  'b' => [ 'a', 'c' ],
  'c' => [ 'b', 'd' ],
  'd' => [ 'c', 'e' ],
  'e' => [ 'a', 'd' ]
}
 * 
 *  below is Undirected graph
 */

class graph {
  constructor() {
    this.AdjList = new Map();
  }

  // add vertex to graph
  addVertex(v) {
    !this.AdjList.has(v) && this.AdjList.set(v, []); //do not allow duplicate value to vertex.
  }

  //Connect two vertex with edges
  addEdges(v1, v2) {
    // connect v1 vertex to v2.
    this.AdjList.get(v1).push(v2);

    // Since graph is undirected, so reverse relation will be available.
    this.AdjList.get(v2).push(v1);
  }

  // remove the relation between 2 vertex by filtering.
  removeEdge(v1, v2) {
    this.AdjList.set(
      v1,
      this.AdjList.get(v1).filter((v) => v != v2)
    );
    this.AdjList.set(
      v2,
      this.AdjList.get(v2).filter((v) => v != v1)
    );
  }

  // If we are going to remove vertex then need to remove all relations and key as well.
  removeVertex(v) {
    this.AdjList.get(v).forEach((element) => {
      this.removeEdge(v, element);
    });

    this.AdjList.delete(v);
  }
}

/**
 *      graph will be like this
 *       a ------  b
 *       |         |
 *       e--- D----c
 *
 */
const g = new graph();

g.addVertex("a");
g.addVertex("b");
g.addVertex("c");
g.addVertex("d");
g.addVertex("e");

g.addEdges("a", "b");
g.addEdges("a", "e");
g.addEdges("b", "c");
g.addEdges("c", "d");
g.addEdges("d", "e");

console.log(" adjlist ", g.AdjList);

console.log(" adjlist ", g.removeVertex("e"));

console.log(" adjlist ", g.AdjList);
