const gameBoard = (() => {

    // let board = ["X", "X", "X",
    //              "O", "O", "O",
    //              "X", "X", "X"];
    
    let board = ["", "", "",
                 "", "", "",
                 "", "", ""]; 

    const divBoard = document.querySelector('.board');

    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;

    const displayBoard = (board) => {
        for (let i = 0; i < board.length; i++) {
            const divCell = document.createElement('div');
            divCell.textContent = board[i];
            divCell.className = 'cell';
            divCell.setAttribute('id', i);
            divBoard.appendChild(divCell);
        }
    }

    // const test1 = () => displayBoard(board);

    const displayMark = (mark, position) => {
        divBoard.innerHTML = "";
        board[position] = mark;
        displayBoard(board);
    }

    // const test3 = (divCells) => {
    //     divCells.forEach(cell => {
    //         cell.addEventListener('click', (event) => {
    //             alert('s');
    //             test2("X", event.target.id);
    //         });
    //     });
    // }

    return {
        add,
        sub,
        board,
        displayBoard,
        // test1,
        displayMark,
    };
})();

// gameBoard.test2('X', 2)
// gameBoard.test2('X', 3)

const buttons = document.querySelectorAll('button');
const text = document.querySelector('p');

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        text.textContent = `${event.target.id}`
    })
})

const divCells = document.querySelectorAll('cell');


const Player = (mark) => {
    const getMark = () => mark;

    const move = (position) => {
        gameBoard.displayMark(getMark(), position)
    }


    return {getMark, move};
};

const xPlayer = Player('X');
const yPlayer = Player('O');

text.textContent = xPlayer.getMark();

xPlayer.move(0);
yPlayer.move(5);