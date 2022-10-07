import Queen from './Queen';
import Cell from './Cell';

type NodeStatus = 'VALID' | 'INVALID';

class Container {}

class Rack extends Container {
    baysNumber?: number;
}

const rack: Rack  = {
    baysNumber: 1
}

export default class Node {

    private children = new Array<Node>();

    constructor(private queen: Queen, readonly parent?: Node) {
    }

    addChild(queen: Queen) {
        this.children.push(new Node(queen, this));
    }
}
