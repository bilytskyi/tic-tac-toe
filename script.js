const gameBoard = (() => {

    let board = ["X", "X", "X",
                 "O", "O", "O",
                 "X", "X", "X"];  

    const divBoard = document.querySelector('.board');

    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;

    const displayBoard = (board) => {
        for (let i = 0; i < board.length; i++) {
            const divCell = document.createElement('div');
            divCell.textContent = board[i];
            divCell.className = 'cell';
            divBoard.appendChild(divCell);
        }
    }

    return {
        add,
        sub,
        board,
        displayBoard,
    };
})();

gameBoard.displayBoard(gameBoard.board);