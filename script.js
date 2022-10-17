const gameBoard = (() => {

    let board = ["", "", "",
                 "", "", "",
                 "", "", ""]; 


    const winCondition = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]

    const checkWinCondition = (winCondition) => {
        for (let i = 0; i < winCondition.length; i++) {

            if (board[winCondition[i][0]] + board[winCondition[i][1]] + board[winCondition[i][2]] == "XXX") {
                return "X";
            }
            if (board[winCondition[i][0]] + board[winCondition[i][1]] + board[winCondition[i][2]] == "OOO") {
                return "O";
            }
        }

        return "";

    }

    const gameResult = () => checkWinCondition(winCondition);

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

    const displayMark = (mark, position, name) => {

        const selector = `.cell[id="${position}"]`;
        const cellWithThisPosition = document.querySelector(selector);
        
        if (board[position] == '') {
            board[position] = mark;
            cellWithThisPosition.textContent = mark;
        }

        if (gameResult() == 'X') { // basic win condition
            alert(`${name} is WIN!`);
        }

        if (gameResult() == 'O') { // basic win condition
            alert(`${name} is WIN!`);
        }

        if (gameResult() == '' && !board.includes('')) {
            alert('DRAW!');
        }

    }

    return {
        board,
        setBoard,
        displayBoard,
        displayMark,
    };

})();

const Player = (mark, name) => {
    const getMark = () => mark;
    this.name = name;

    const move = (position) => {
        gameBoard.displayMark(getMark(), position, this.name)
    }


    return {getMark, move};
};

const displayController = (() => {

    const play = (playerOne, playerTwo) => {
        gameBoard.displayBoard();
        const cells = document.querySelectorAll('.cell');
        let turn = 1;
        cells.forEach(cell => {
            cell.addEventListener('click', (event) => {

                if (turn == 1) {
                    turn += 1;
                    playerOne.move(event.target.id);
                }

                else {
                    turn -= 1;
                    playerTwo.move(event.target.id);
                }

            });
        });

    }

    return {
        play,
    };

})();


const trigger = document.querySelector('#start-button');

trigger.addEventListener('click', () => {

    const playerOne = Player('X', document.querySelector('#p-1').value);
    const playerTwo = Player('O', document.querySelector('#p-2').value);

    displayController.play(playerOne, playerTwo);

    trigger.style.display = 'none';
    document.querySelector('#p-1').style.display = 'none';
    document.querySelector('#p-2').style.display = 'none';
    document.getElementById('reset').style.display = 'block';

    document.getElementById('reset').addEventListener('click', () => location.reload());

})

// const xPlayer = Player('X');
// const yPlayer = Player('O');

// displayController.play();