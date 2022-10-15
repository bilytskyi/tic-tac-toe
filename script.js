const gameBoard = (() => {

    let board = ["", "", "",
                 "", "", "",
                 "", "", ""]; 

    const divBoard = document.querySelector('.board');

    const setBoard = (board) => {
        for (let i = 0; i < board.length; i++) {
            const divCell = document.createElement('div');
            divCell.textContent = board[i];
            divCell.className = 'cell';
            divCell.setAttribute('id', i);
            divBoard.appendChild(divCell);
        }
    }

    const displayBoard = () => setBoard(board);

    const displayMark = (mark, position) => {

        const selector = `.cell[id="${position}"]`;
        const cellWithThisPosition = document.querySelector(selector);
        
        if (board[position] == '') {
            board[position] = mark;
            cellWithThisPosition.textContent = mark;
        }

        if (board[0] == 'X' && board[1] == 'X' && board[2] == 'X') { // basic win condition
            alert("Hey!! You WIN!!!");
        }

    }

    return {
        setBoard,
        displayBoard,
        displayMark,
    };

})();

const Player = (mark) => {
    const getMark = () => mark;

    const move = (position) => {
        gameBoard.displayMark(getMark(), position)
    }


    return {getMark, move};
};

const displayController = (() => {

    const play = () => {
        gameBoard.displayBoard();
        const cells = document.querySelectorAll('.cell');
        const displayId = document.querySelector('.display-id');
        const displayPlayerTurn = document.querySelector('.display-player-turn');
        let turn = 1;
        cells.forEach(cell => {
            cell.addEventListener('click', (event) => {
                displayId.textContent = `${event.target.id}`;
                displayPlayerTurn.textContent = `${turn}`;

                if (turn == 1) {
                    turn += 1;
                    xPlayer.move(event.target.id);
                }

                else {
                    turn -= 1;
                    yPlayer.move(event.target.id);
                }

            });
        });

    }

    return {
        play,
    };

})();

const xPlayer = Player('X');
const yPlayer = Player('O');

displayController.play();