import { Game, Column } from './game.js'


let game = undefined;






const updateUI = () => {
    for (let i = 0; i <= 5; i++) {
        for (let j = 0; j <= 6; j++) {
            let square = document.getElementById(`square-${i}-${j}`)
            square.innerHTML = '';

            //Call it on getToeknAt from game class

            //the for loop is letting us place the value of a black token
            //or red in the square

            if (game.getTokenAt(j, i) === 1) {
                const blackToken = document.createElement('div')
                blackToken.setAttribute('class', 'token black');

                square.appendChild(blackToken)
            } else if (game.getTokenAt(j, i) === 2) {
                const redToken = document.createElement('div')
                redToken.setAttribute('class', 'token red');

                square.appendChild(redToken);
            }
        }
    }

    //game.currentplayer is equal to 1 switch to red(which is player 2s color)
    if (game === undefined) {

        const boardHolder = document.getElementById('board-holder')
        boardHolder.setAttribute('class', 'is-invisible');

    } else {
        //set the inner html gamenameID to 'gameName.value'

        const boardHolder = document.getElementById('board-holder')
        boardHolder.removeAttribute('class', 'is-invisible');
        const gameName = document.getElementById('game-name');
        let currentPlayer = game.getCurrentPlayer()

        gameName.innerHTML = currentPlayer;


        if (currentPlayer === 2) {

            let clickTargets = document.getElementById('click-targets');
            clickTargets.setAttribute('class', 'black')

        } else {

            let clickTargets = document.getElementById('click-targets');

            clickTargets.setAttribute('class', 'red');

        }


    }



}





window.addEventListener('DOMContentLoaded', (event) => {

    const clickTargets = document.getElementById('click-targets');
    clickTargets.addEventListener('click', (event) => {
        let playColumn = 0
        let currentTarget = event.target.id
        if (currentTarget.includes('column-')) {
            playColumn = Number.parseInt(currentTarget[currentTarget.length - 1])
        }


        game.playInColumn(playColumn);

        updateUI();


    })

    const player1 = document.getElementById('player-1-name')
    player1.addEventListener('keyup', (event) => {

        if (player1.value !== '' && player2.value !== '') {

            const gameButton = document.getElementById('new-game')
            gameButton.disabled = false;
        }

    })
    const player2 = document.getElementById('player-2-name')
    player2.addEventListener('keyup', (event) => {

        if (player1.value !== '' && player2.value !== '') {

            const gameButton = document.getElementById('new-game')
            gameButton.disabled = false;
        }

    })
    const gameButton = document.getElementById('new-game');
    gameButton.addEventListener('click', (event) => {
        game = new Game(player1.value, player2.value)
        player1.value = '';
        player2.value = '';
        const gameButton = document.getElementById('new-game')
        gameButton.disabled = true;
        updateUI();

    })










})