'use strict';



const gameBoard = (() => {

    const gmboardContainer = document.querySelector('.container');
    const playBtn = document.querySelector('.play');
    playBtn.addEventListener('click', () => {
    
        for(let i = 0; i < 9; i++) {
            const boardBlock = document.createElement('div');
            boardBlock.classList.add('board-block');
            gmboardContainer.appendChild(boardBlock);
        }
    })

    
        




}



)();



