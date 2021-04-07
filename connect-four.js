import Game from './game.js'


let game = undefined;

window.addEventListener('DOMContentLoaded', (event) => {


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
    gameButton.addEventListener('click', (event) =>{
        game = new Game(player1.value,player2.value)
        console.log(game);
    })










})