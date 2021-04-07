import Game from './game.js'


let game = undefined;

function getName() {

    return currentPlayer.value;


}



const updateUI = () => {
//game.currentplayer is equal to 1 switch to red(which is player 2s color)
    if (game === undefined) {

        const boardHolder = document.getElementById('board-holder')
        boardHolder.setAttribute('class', 'is-invisible');

    } else {
        //set the inner html gamenameID to 'getName.value'

        const boardHolder = document.getElementById('board-holder')
        boardHolder.removeAttribute('class', 'is-invisible');
        const getName = document.getElementById('get-name');
        getName.innerHTML = getName();

    
        if(getName.innerHTML === 1){
            const clickTargets = document.getElementById('click-targets');
            clickTargets.setAttribute('class', 'red')
        }else{
            const clickTargets = document.getElementById('click-targets');
            clickTargets.setAttribute('class', 'black')
        }
        

    }



}





window.addEventListener('DOMContentLoaded', (event) => {

    const clickTargets = document.getElementById('click-targets');
    clickTargets.addEventListener('click', (event) => {

        game.playInColumn();
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