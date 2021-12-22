/**
 * 
 * graph representation below :-
 * graph = {
  'a' => [ 'b', 'c' ],
  'b' => [ 'a', 'd' ],
  'c' => [ 'a', 'e' ],
  'd' => [ 'b', 'e', 'f' ],
  'e' => [ 'd', 'c', 'f' ],
  'f' => [ 'd', 'e' ]
}
 * 
 *  Graph traversal :-  
 *  We wil require start point to traverse a graph. there can be multiple route to traverse from point p1 to p5.
 *  
 *   DFS : Depth first, meaning we will go children first instead of sibling.  We can store edges in aliphatic order so the will go with aliphatic way but 
 * it is not mandatory. we will maintain a map to remember visited vertex.
 * 
 *   BFS:  like meaning breadth first  so we can say the sibling will print first then the child.
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

  DFSRecursive(start) {
    const output = [];
    const visited = {};

    const dfs = (vertex) => {
      //base case of recursion
      if (!vertex) return null;

      visited[vertex] = true;
      output.push(vertex);

      //call the children
      this.AdjList.get(vertex).forEach((connectedV) => {
        if (!visited[connectedV]) return dfs(connectedV);
      });
    };
    dfs(start);
    return output;
  }

  BFSRecursive(start) {
    const output = [];
    const pushed = { [start]: true };
    const queue = [start];

    while (queue.length) {
      const vertex = queue.shift();
      output.push(vertex);

      //add the children in queue
      this.AdjList.get(vertex).forEach((connectedV) => {
        if (!pushed[connectedV]) {
          queue.push(connectedV);
          pushed[connectedV] = true;
        }
      });
    }

    return output;
  }
}

/**
 *      graph will be like this
 * 
 *         a 
 *        /  \     
 *       b     c
 *       |       \
        d ------ e
          \     / 
             F  
 *
 */
const g = new graph();

g.addVertex("a");
g.addVertex("b");
g.addVertex("c");
g.addVertex("d");
g.addVertex("e");
g.addVertex("f");

g.addEdges("a", "b");
g.addEdges("a", "c");
g.addEdges("b", "d");
g.addEdges("d", "e");
g.addEdges("d", "f");
g.addEdges("e", "c");
g.addEdges("e", "f");

console.log(" adjlist ", g.AdjList);

//output  [ 'a', 'b', 'd', 'e', 'c', 'f' ]
console.log(" adjlist DFS: ", g.DFSRecursive("a"));

console.log(" adjlist BFS :", g.BFSRecursive("a"));
