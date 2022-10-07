import Queen from './Queen';

export default class Board {

    public rows: number;
    public collumns: number;

    private queens: Array<Queen>;

    constructor(private size: number) {
        this.rows = size;
        this.collumns = size;
        this.queens = new Array<Queen>();
    }

    hasQueenInRow(row: number) {
        return !!this.queens.find(q => q.placement?.row === row);
    }

    hasQueenInColumn(column: number) {
        return !!this.queens.find(q => q.placement?.column === column);
    }

    addQueen(queen: Queen) {
        this.queens.push(queen);
    }

}
