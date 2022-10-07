import Board from '../models/Board';
import Node from '../models/Node';

export default class NQuennSolver {

    private board: Board;
    private root = new Array<Node>();

    constructor(private n: number) {
        this.board = new Board(n);
    }

    solve() {

    }



}
