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

  /*
        Remove is tricky because. it can be 3 types.
        1. deletable node  is leaf node. (leaf Node is node that do not have children) (so delete the leaf node)
        2. deletable node  have 1 child. (So replace child node value(only value not node) with parent node value and delete the child.)
        3. deletable node  have 2 child.:- It is most complext part for more info with images go to link: https://www.algolist.net/Data_structures/Binary_search_tree/Removal 
           
           steps:- Find inorder successor of the node. Copy contents of the inorder successor to the node and delete the inorder successor. Note that inorder predecessor can also be used. 
      
             inorder successor: it can be obtained by finding the minimum value in the right child of the node.
             and replace the value of deletable node with smallest right most and delete that last node.
        */

  remove(data) {
    return this.removeRecursive(this.root, data);
  }

  //recursive function
  removeRecursive(root, data) {
    //Case 1:
    if (this.root == null) return "Empty Tree";

    // base condition of recursion.
    if (root.value > data) {
      root.left = this.removeRecursive(root.left, data);
      return root;
    } else if (root.value < data) {
      root.right = this.removeRecursive(root.right, data);
      return root;
    } else {
      //Case 2: No children. (delete the root simply)
      if (root.left == null && root.right == null) {
        root = null;
        return root;
      }

      // case 3: Single child
      if (root.left == null) return root.right;
      if (root.right == null) return root.left;

      // case 4: double child, So pick smallest from right tree.

      let current = root.right;
      while (current.left != null) {
        current = current.left;
      }

      //replace the root value with lowest value
      root.value = current.value;

      // now set the instruction to delete smallest right leaf node. (we do not need to replace beacuse from here root is changed so least value will be picked)
      root.right = this.removeRecursive(root.right, current.value);
      return root;
    }
  }

  returnRoot() {
    return this.root;
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

// console.log("Find data 2 ", tree.find(2));
// console.log("Find data 15 ", tree.find(15));

tree.remove(5);

console.log("Root is ", tree.returnRoot());
