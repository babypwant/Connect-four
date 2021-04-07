export default class Game {
    constructor(player1Name, player2Name, currentPlayer = 1) {
        this.player1Name = player1Name;
        this.player2Name = player2Name;
        this.currentPlayer = currentPlayer;

    }

    playInColumn() {
        if (currentPlayer === 1) {
            currentPlayer = 2;
        } else {
            currentPlayer = 1;
        }
    }

}

