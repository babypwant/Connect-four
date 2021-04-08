import { Game, Column } from './game.js'


let game = undefined;






const updateUI = () => {
    if (game === undefined) {
        const boardHolder = document.getElementById('board-holder')
        boardHolder.setAttribute('class', 'is-invisible');

    } else {

        for (let i = 0; i <= 6; i++) {


            let currentColumn = document.getElementById(`column-${i}`)


            if (game.isColumnFull(i) === true) {

                currentColumn.classList.add('full')


            } else {
                currentColumn.classList.remove('full')
            }
        }

        for (let i = 0; i <= 5; i++) {

            for (let j = 0; j <= 6; j++) {


                let square = document.getElementById(`square-${i}-${j}`)
                square.innerHTML = '';

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
    console.log(clickTargets)
    clickTargets.addEventListener('click', (event) => {

        let currentTarget = event.target.id
        if (!currentTarget.includes('column-')) {
            return;
        }

        let columnIndex = Number.parseInt(currentTarget[currentTarget.length - 1])

        game.playInColumn(columnIndex);

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