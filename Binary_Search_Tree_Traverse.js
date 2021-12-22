/**
 *   BFS: Breadth first search traversal (equally children of root)
 *   DFS: Depth First Traversals (Means children is priority) go left to left until last point.
 *
 *  BFS vs DFS: Time complexity is same in both. space complexity : BFS take more space due to using  queue so need to use DFS every time.
 *
 *
 */

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  //Add a new node to Tree o(log n)
  addNode(data) {
    const newNode = new Node(data);

    // If root is not available then add node to root.
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      /**
       * start from current
       * if insert values is greater then root than go to right else go to left
       * And add the value where value does not exist.
       * ignore the equal case.
       *  */
      let current = this.root;

      while (current) {
        if (current.value == data) return "Equal value can not be proceed";

        if (current.value < data) {
          if (!current.right) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        } else {
          if (!current.left) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        }
      }
    }
  }

  find(data) {
    if (!this.root) return "Tree is empty";

    let current = this.root;

    while (current) {
      if (current.value == data) return current;

      if (current.value < data) {
        current = current.right;
      } else if (current.value > data) {
        current = current.left;
      } else {
        return "Not found"; //if value is not either greater or lesser than it will not be in tree.
      }
    }

    return "Not found";
  }

  /*
   * Traverse the array from root to left and then right, we can understand than first root then children and priority will be left first.
   */
  BFS() {
    let output = [];
    let queue = [this.root];
    while (queue.length) {
      const node = queue.shift();
      output.push(node.value);

      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    return output;
  }

  /*
   * We will print all depth value so we will use recursion here.
   */
  DFSPreOrder() {
    let output = [];
    function traverse(node) {
      output.push(node.value);
      node.left && traverse(node.left);
      node.right && traverse(node.right);
    }
    traverse(this.root);

    return output;
  }

  /*
   * We will print all depth value and child is priority so we will also use recursion here.
   */
  DFSPostOrder() {
    let output = [];
    function traverse(node) {
      node.left && traverse(node.left);
      node.right && traverse(node.right);

      output.push(node.value);
    }
    traverse(this.root);

    return output;
  }

  /*
   * We will print  child then root then right.
   */
  DFSInOrder() {
    let output = [];
    function traverse(node) {
      node.left && traverse(node.left);
      output.push(node.value);
      node.right && traverse(node.right);
    }
    traverse(this.root);

    return output;
  }
}

/**
                    10 
                5        13
              2   7     11  16    
            
             */

const tree = new BinarySearchTree();

tree.addNode(10);
tree.addNode(5);
tree.addNode(2);
tree.addNode(7);
tree.addNode(13);
tree.addNode(11);
tree.addNode(16);

//BFS result :-
/**
 * 10, 5, 13, 2, 7, 11, 6
 *
 */

console.log("BFS output :", tree.BFS());

//DFS preOrder result :-
/**
 * 10, 5, 2, 7, 13, 11, 16
 *
 */
console.log("DFS preOrder output :", tree.DFSPreOrder());

//DFS postOrder result :-
/**
 * 2, 7, 5, 11, 16, 13, 10
 *
 */

console.log("DFS postOrser output :", tree.DFSPostOrder());

//DFS Inorder result :-
/**
 * 2, 5, 7, 10, 11, 13, 6
 *
 */

console.log("DFS in Orser output :", tree.DFSInOrder());
