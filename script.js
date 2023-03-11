'use strict';



const generatePlayers = (name, symbol, turn) => {
    return {name, symbol, turn};
}




const gameBoard = (() => {

    const player1 = generatePlayers('playerOne', 'X', true);
    const player2 = generatePlayers('playerTwo', 'O', false);
    
    const boardBlock = document.querySelectorAll('.board-block');
    const gameboard = Array.from(boardBlock);


    gameboard.forEach((boardblock) => boardblock.addEventListener('click', () => {
        if(player1.turn) {
            boardblock.textContent = 'X';
            player1.turn = false;
            player2.turn = true;
        } else if(player2.turn) {
            boardblock.textContent = 'O';
            player1.turn = true;
            player2.turn = false;
        }
    }))




})();







