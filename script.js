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
        // divBoard.innerHTML = "";
        board[position] = mark;
        const selector = `.cell[id="${position}"]`;
        const cellWithThisPosition = document.querySelector(selector);

        cellWithThisPosition.textContent = mark;

        // displayBoard(board);
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
        setBoard,
        displayBoard,
        // test1,
        displayMark,
    };
})();

// gameBoard.test2('X', 2)
// gameBoard.test2('X', 3)

// const buttons = document.querySelectorAll('button');
// const text = document.querySelector('p');

// buttons.forEach(button => {
//     button.addEventListener('click', (event) => {
//         text.textContent = `${event.target.id}`
//     })
// })

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

// xPlayer.move(0);
// yPlayer.move(5);

const displayController = (() => {

    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;

    const play1 = () => {
        const buttons = document.querySelectorAll('button');
        const text = document.querySelector('p');
        buttons.forEach(button => {
            button.addEventListener('click', (event) => {
                text.textContent = `${event.target.id}`
            });
        });

    }

    const play2 = () => {
        const cells = document.querySelectorAll('.cell');
        const text = document.querySelector('p');
        cells.forEach(cell => {
            cell.addEventListener('click', (event) => {
                text.textContent = `${event.target.id}`
                xPlayer.move(event.target.id);
            });
        });

    }

    return {
        add,
        sub,
        play1,
        play2,
    };

})();

// displayController.play1();

// displayController.play2();


gameBoard.displayBoard();
xPlayer.move(0);
xPlayer.move(5);
displayController.play2();