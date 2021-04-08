export class Game {
    constructor(player1Name, player2Name, currentPlayer = 1) {
        this.player1Name = player1Name;
        this.player2Name = player2Name;
        this.currentPlayer = currentPlayer;
        this.Column = [new Column(), new Column(), new Column(),
        new Column(), new Column(), new Column(),
        new Column()]
    }



    playInColumn(index) {
        /*make an array of columns,
         after looping thru array use and finding the correct index, 
         call the add() on the index
        */
        let currentColumn = this.Column[index];

        currentColumn.add(this.currentPlayer);
        if (this.currentPlayer === 1) {
            return this.currentPlayer = 2;
        } else if (this.currentPlayer === 2) {
            return this.currentPlayer = 1;
        }
    }

    getCurrentPlayer() {

        return this.currentPlayer;


    }

    getTokenAt(columnPositionNumber, rowPositionNumber) {

        return this.Column[columnPositionNumber].getTokenAt(rowPositionNumber)

    }

    isColumnFull(Columnindex) {

        return this.Column[Columnindex].isFull()

    }


}

export class Column {
    constructor() {

        this.tokens = [null, null, null, null, null, null];

    }

    isFull() {

        for (let i = 0; i < this.tokens.length; i++) {


            if (this.tokens[i] === null) {


                return false;
            }



        }
        return true;

    }



    add(currentPlayerNumber) {

        if (this.isFull()) {
            return;

        }

        for (let i = this.tokens.length - 1; i >= 0; i--) {

            if (this.tokens[i] === null) {

                this.tokens[i] = currentPlayerNumber;
                break;

            }





        }
    }

    getTokenAt(rowPositionNumber) {

        return this.tokens[rowPositionNumber]

    }

}
