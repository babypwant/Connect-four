export default class Game {
    constructor(player1Name, player2Name, currentPlayer = 1) {
        this.player1Name = player1Name;
        this.player2Name = player2Name;
        this.currentPlayer = currentPlayer;

    }

    playInColumn() {
        if (this.currentPlayer === 1) {
            return this.currentPlayer = 2;
        } else if (this.currentPlayer === 2) {
            return this.currentPlayer = 1;
        }
    }

    getCurrentPlayer() {

        return this.currentPlayer;


    }
}

export class Column {
    constructor() {

        this.tokens = [null, null, null, null, null, null];
    }

    add(playerNumber) {

        for (let i = this.tokens.length - 1; i >= 0; i--) {


        }

    }

    getTokenAt(rowPositionNumber) {

        return this.tokens[rowPositionNumber]



    }

}