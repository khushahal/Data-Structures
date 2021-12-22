/**
 *  
 *
 *
 *
 *
 *  */

function Node(value, children = []) {
  this.value = value;
  this.children = children;
}

class Tree {
  constructor(root) {
    this.root = root || null; //if not created using root then it will be null
  }

  //Add a new node to Tree
  addNode(data, toNodeAt) {
    const node = new Node(data);

    //if toNodeAt have value then find the parent using BFS and assign the parent.
    const parent = toNodeAt ? this.findBFS(toNodeAt) : null;
    if (parent) {
      parent.children.push(node);
    } else {
      if (!this.root) {
        this.root = node;
      } else {
        return "Tried to push node at root when root already exist";
      }
    }
  }

  findBFS(data) {
    let _node = null;

    //find BFS using traversal and if found then exist the loop.
    this.traverseBFS((node) => {
      if (node.value == data) {
        _node = node;
        return true; //return in callback function
      }
    });

    return _node;
  }

  traverseBFS(cb) {
    const queue = [this.root];

    if (cb) {
      while (queue.length) {
        const node = queue.shift();

        let exitOnFound = cb(node);

        // if we want to close the loop if we found any thing then send true from cb.
        if (exitOnFound) {
          queue.length = [];
        }

        // Add children one by one to queue.
        for (const child of node.children) {
          queue.push(child);
        }
      }
    }
    return "Please add a callback to get access of node.";
  }
}

// call the tree

const tree = new Tree();

tree.addNode("a");
tree.addNode("b", "a");
tree.addNode("c", "a");
tree.addNode("d", "b");
tree.addNode("e", "b");
tree.addNode("f", "c");

// Remove the node from tree.
console.log("remove a node from tree, ", tree.removeNode("b"));

tree.traverseBFS((node) => {
  console.log(" print each node in BFS way node:", node);
});
