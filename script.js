'use strict';


// Factory function for generating data for players
const generatePlayers = (name, symbol, turn, win) => {
    return {name, symbol, turn, win};
}

const result = document.querySelector('.result');

// Module for generating the gameboard
const gameBoard = (() => {
    // Generating two players
    const player1 = generatePlayers('playerOne', 'X', true, false);
    const player2 = generatePlayers('playerTwo', 'O', false, false);

    

    // Creating a nodelist and converting to an array
    const boardBlock = document.querySelectorAll('.board-block');
    const gameboard = Array.from(boardBlock);

    const firstRow = gameboard.slice(0,3);
    const secondRow = gameboard.slice(3,6);
    const thirdRow = gameboard.slice(6,9);

    const firstColumn = [];
    const secondColumn = [];
    const thirdColumn = [];

    firstColumn.push(gameboard[0], gameboard[3], gameboard[6]);
    secondColumn.push(gameboard[1], gameboard[4], gameboard[7]);
    thirdColumn.push(gameboard[2], gameboard[5], gameboard[8]);
    
    const firstDiagonal = [];
    firstDiagonal.push(gameboard[0], gameboard[4], gameboard[8]);
    const secondDiagonal = [];
    secondDiagonal.push(gameboard[2], gameboard[4], gameboard[6]);

    
    // Adding functionality to each part of the gameboard
    gameboard.forEach((boardblock) => boardblock.addEventListener('click', () => {
        if(player1.turn && !boardblock.classList.contains('marked-X') && (player1.win == false) && (player2.win == false)) {
            boardblock.textContent = 'X';
            player1.turn = false;
            player2.turn = true;
            boardblock.classList.add('marked-X');
        } else if(player2.turn && !boardblock.classList.contains('marked-O') && (player1.win == false) && (player2.win == false)) {
            boardblock.textContent = 'O';
            player1.turn = true;
            player2.turn = false;
            boardblock.classList.add('marked-O');
        }
        checkWinner();
    }))
    
    function checkWinner() {
      if (
        firstRow.every((boardblock) => boardblock.classList.contains("marked-X")) ||
        secondRow.every((boardblock) =>
          boardblock.classList.contains("marked-X")
        ) ||
        thirdRow.every((boardblock) => boardblock.classList.contains("marked-X")) ||
        firstColumn.every((boardblock) =>
          boardblock.classList.contains("marked-X")
        ) ||
        secondColumn.every((boardblock) =>
          boardblock.classList.contains("marked-X")
        ) ||
        thirdColumn.every((boardblock) =>
          boardblock.classList.contains("marked-X")
        ) ||
        firstDiagonal.every((boardblock) =>
          boardblock.classList.contains("marked-X")
        ) ||
        secondDiagonal.every((boardblock) =>
          boardblock.classList.contains("marked-X")
        )
      ) {
        result.textContent = "Player 1 wins!";
        player1.win = true;
      } else if (
        firstRow.every((boardblock) => boardblock.classList.contains("marked-O")) ||
        secondRow.every((boardblock) =>
          boardblock.classList.contains("marked-O")
        ) ||
        thirdRow.every((boardblock) => boardblock.classList.contains("marked-O")) ||
        firstColumn.every((boardblock) =>
          boardblock.classList.contains("marked-O")
        ) ||
        secondColumn.every((boardblock) =>
          boardblock.classList.contains("marked-O")
        ) ||
        thirdColumn.every((boardblock) =>
          boardblock.classList.contains("marked-O")
        ) ||
        firstDiagonal.every((boardblock) =>
          boardblock.classList.contains("marked-O")
        ) ||
        secondDiagonal.every((boardblock) =>
          boardblock.classList.contains("marked-O")
        )
      ) {
        result.textContent = "Player 2 wins!";
        player2.win = true;
      }
    }


})();







