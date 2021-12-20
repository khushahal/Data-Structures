/**
 * Create a Binary search tree.
 * BST has at most two nodes. However, the values are so that the left children value must be less than the parent, and the right children must be higher.
 *  
 *  the nodes are placed in an orderly fashion. This inherent order makes searching fast.
 * Note:  Duplicates: Some BST doesn’t allow duplicates while others add the same values as a right child. 
     So we are also not allowing duplicate values in tree. 

     time complexity of access & search and insertion is average case O(log n) and in worst case o(n).
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
console.log("adding 13 to binary search tree ", tree.addNode(13));
tree.addNode(11);

console.log("Find data 2 ", tree.find(2));
console.log("Find data 15 ", tree.find(15));
