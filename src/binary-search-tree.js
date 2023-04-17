const {NotImplementedError} = require('../extensions/index.js');

const {Node} = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 *   throw new NotImplementedError('Not implemented');
 *   // remove line with error and write your code here
 */
class BinarySearchTree {
    constructor() {
        this.rootElem = null;
    }

    root() {
        return this.rootElem;
    }

    add = (data) => {
        function addIn(node, data) {
            if (!node) {
                return new Node(data);
            }
            if (node.data === data) {
                return node;
            }
            if (data < node.data) {
                node.left = addIn(node.left, data)
            } else {
                node.right = addIn(node.right, data);
            }
            return node;
        }

        this.rootElem = addIn(this.rootElem, data);
    }

    has(data) {
        function hasIn(node, data) {
            if (!node) {
                return false;
            }
            if (node.data === data) {
                return true;
            }
            if (data < node.data) {
                return hasIn(node.left, data);
            } else {
                return hasIn(node.right, data);
            }
        }

        return hasIn(this.rootElem, data);
    }

    find(data) {
        function findIn(node, data) {
            if (node === null) {
                return null;
            }
            if (data === node.data) {
                return node;
            }
            if (data < node.data) {
                return findIn(node.left, data);
            } else {
                return findIn(node.right, data);
            }
        }

        return findIn(this.rootElem, data);
    }


    remove(data) {
        this.rootElem = removeIn(this.rootElem, data);

        function removeIn(node, data) {
            if (!node) {
                return null;
            }
            if (data < node.data) {
                node.left = removeIn(node.left, data);
                return node;
            } else if (node.data < data) {
                node.right = removeIn(node.right, data);
                return node;
            } else {
                if (!node.left && !node.right) {
                    return null;
                }
                if (!node.left) {
                    node = node.right;
                    return node;
                }
                if (!node.right) {
                    node = node.left;
                    return node;
                }
                let minRight = node.right;
                while (minRight.left) {
                    minRight = minRight.left;
                }
                node.data = minRight.data;
                node.right = removeIn(node.right, minRight.data);
                return node;
            }
        }
    }

    min() {
        if (!this.rootElem) {
            return;
        }
        let node = this.rootElem;
        while (node.left) {
            node = node.left;
        }
        return node.data;
    }

    max() {
        if (!this.rootElem) {
            return null;
        }
        let node = this.rootElem;
        while (node.right) {
            node = node.right;
        }
        return node.data;
    }
}

module.exports = {
    BinarySearchTree
};