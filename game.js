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
       let currentColumn = this.column[index];

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
}

export class Column {
    constructor() {

        this.tokens = [null, null, null, null, null, null];

    }

    add(currentPlayer) {

        for (let i = this.tokens.length - 1; i >= 0; i--) {
            let playerPosition = this.tokens[i];
            if (playerPosition === null) {
                return this.tokens.splice(i, 1, currentPlayer);
            }
        }
    }

    getTokenAt(rowPositionNumber) {

        return this.tokens[rowPositionNumber]

    }

}
