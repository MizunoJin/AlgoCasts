// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, node = null) {
        this.data = data
        this.next = node
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let size = 0;
        let node = this.head;
        while (node) {
            size++;
            node = node.next
        }
        return size;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if (!this.head) {
            return null
        }

        let node = this.head;
        while (node) {
            if (!node.next) {
                return node
            }
            node = node.next
        }
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (!this.head) {
            return;
        }

        this.head = this.head.next
    }

    removeLast() {
        if (!this.head) {
            return
        }

        if (this.size() === 1) {
            return this.clear();
        }

        let previousNode = null
        let node = this.head;
        while (node.next) {
            previousNode = node
            node = node.next
        }
        previousNode.next = null
    }

    insertLast(data) {
        const newNode = new Node(data, null)

        if (!this.head) {
            this.head = newNode
            return
        }

        let node = this.head;
        while (node) {
            if (!node.next) {
                node.next = newNode
                return
            }
            node = node.next
        }
    }

    getAt(index) {
        let counter = 0

        let node = this.head;
        while (node) {
            if (counter === index) {
                return node
            }
            node = node.next
            counter++;
        }

        return null
    }

    removeAt(index) {
        if (this.size() <= 0) {
            return
        }

        if (index === 0) {
            this.head = this.head.next
            return
        }

        let counter = 0
        let node = this.head;
        let previousNode = null;
        while (node) {
            if (counter === index) {
                previousNode.next = node.next
                return
            }
            previousNode = node
            node = node.next
            counter++;
        }

        return null
    }

    insertAt(data, index) {
        if (this.size() === 0) {
            this.head = new Node(data, null)
            return
        }

        let counter = 0

        let node = this.head;
        let previousNode = null;
        while (node) {
            if (counter === index) {
                const newNode = new Node(data, node)
                if (index === 0) {
                    this.head = newNode
                } else {
                    previousNode.next = newNode
                }
                return
            }
            previousNode = node
            node = node.next
            counter++;
        }

        const newNode = new Node(data, node)
        previousNode.next = newNode
    }

    forEach(func) {
        let node = this.head;
        let counter = 0;
        while (node) {
            func(node, counter)
            node = node.next
            counter++;
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
            yield node
            node = node.next
        }
    }
}

module.exports = { Node, LinkedList };
