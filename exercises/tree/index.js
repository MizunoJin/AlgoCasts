// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data) {
        this.data = data
        this.children = []
    }

    add(data) {
        const newNode = new Node(data)
        this.children.push(newNode)
    }

    remove(data) {
        this.children = this.children.filter(d => d.data !== data)
    }
}

class Tree {
    constructor() {
        this.root = null
    }

    // this.root
    // this.root.children[0], this.root.children[1], this.root.children[2]...
    // this.root.children[0][0], this.root.children[0][1] ... 
    traverseBF(func) {
        const array = [this.root]
        while(array.length) {
            const node = array.shift()
            array.push(...node.children)
            func(node)
        }
    }

    // this.root
    // this.root.children[0], this.root.children[0][0], this.root.children[0][1]...
    // this.root.children[1], this.root.children[1][0], this.root.children[1][1] ... 
    traverseDF(func) {
        const array = [this.root]
        while(array.length) {
            const node = array.shift()
            array.unshift(...node.children)
            func(node)
        }
    }
}

module.exports = { Tree, Node };
