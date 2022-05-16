var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  // Only change code below this line
  remove(value) {
    if (!this.root) return null;
    let parent;
    const findNode = (node) => {
      if (!node) return null;
      if (node.value === value) return node;
      parent = node;
      if (value > node.value) return findNode(node.right);
      else return findNode(node.left);
    };
    const target = findNode(this.root);

    if (!target) return null;
    if (!parent) return (this.root = null);

    target.value > parent.value ? (parent.right = null) : (parent.left = null);
  }
}
