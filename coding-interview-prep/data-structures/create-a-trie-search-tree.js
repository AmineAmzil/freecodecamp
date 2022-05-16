const displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
class Node {
  constructor() {
    this.keys = new Map();
    this.end = false;
  }
  setEnd() {
    this.end = true;
  }
  unsetEnd() {
    this.end = false;
  }
  isEnd() {
    return this.end;
  }
}
class Trie {
  constructor() {
    // Only change code below this line
    this.root = new Node();
  }
  add(wordToAdd) {
    //console.log({wordToAdd});
    function addWord(root, word) {
      if (word && word.length > 0) {
        const letter = word.charAt(0);
        if (!Object.keys(root.keys).includes(letter)) {
          const node = new Node();
          if (word.length === 1) {
            node.setEnd();
          }
          root.keys[letter] = node;
        }
        addWord(root.keys[letter], word.substring(1));
      }
    }
    addWord(this.root, wordToAdd);
  }
  print() {
    const words = [];
    const readAll = (root, word) => {
      if (root.isEnd()) words.push(word);
      if (Object.keys(root.keys).length === 0) return word;
      Object.keys(root.keys).forEach((key) => {
        readAll(root.keys[key], word.concat(key));
      });
    };
    readAll(this.root, "");
    return words;
  }
  isWord(word) {
    if (word.length < 1) {
      return false;
    }
    let root = this.root;
    for (let ch of word.split("")) {
      if (!Object.keys(root.keys).includes(ch)) {
        return false;
      }
      root = root.keys[ch];
    }
    if (root.isEnd()) {
      return true;
    }
    return false;
  }
  // Only change code above this line
}
