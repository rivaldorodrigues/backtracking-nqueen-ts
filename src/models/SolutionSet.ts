import SolutionNode from './Node';
import Board from './Board';
import Queen from './Queen';
import Cell from './Cell';
import Node from './Node';

type Solutiontatus = 'VALID' | 'INVALID';

export default class SolutionSet {

    public status: Solutiontatus = 'INVALID';
    private rootNode: SolutionNode;
    private row = 0;

    constructor(private board: Board, private initialColumn: number) {
        this.rootNode = new SolutionNode(new Queen(this.queenIdentifier));
    }

    get queenIdentifier() {
        return `Q${this.row + 1}`;
    }

    private solve() {
        for (let i = 0; i <= this.board.collumns; i++) {

            if (this.validPreCondition(this.row, i)) {
                this.placeQueen(this.rootNode, this.row, i);
            }
        }
    }

    private validPreCondition(row: number, column: number) {
        return !this.board.hasQueenInRow(row) && !this.board.hasQueenInColumn(column);
    }



    private placeQueen(parentNode: Node, row: number, column: number) {
        const queen = new Queen(this.queenIdentifier, new Cell(row, column));
        this.board.addQueen(queen);
        parentNode.addChild(queen);
    }

}
