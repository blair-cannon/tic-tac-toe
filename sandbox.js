let btn = document.createElement("button");
btn.onclick = function () {
    btn.innerHTML = "X";
  };
document.body.appendChild(btn);




// const threeInARow = (board, array, i) => {
//   console.log({board, array, i});
//   return array[0] === array[1] && array[0] === array[2]; // works for HORIZONTAL wins
  // return board[0][0] === board[1][0] && board[0][0] === board[2][0]; // works for VERTICAL wins
  // return board[0][0] === board[1][1] && board[0][0] === board[2][2]; // works for DIAGONAL wins
// }

// let bord = [[1, 0, 0], [1, 1, 0], [1, 1, 1]];

// console.log(board.some(threeInARow));  // true.  nested arrays of rows; checks horizontal wins


// let board = ['', '', '', 'x', 'x', 'x', '', '', ''];

// let winConditions = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7], 
//   [2, 5, 8], 
//   [0, 4, 8],
//   [2, 4, 6]
// ];

// const win = (x) => {
//   // winConditions.forEach(array => console.log(array)); 
//   winConditions.forEach(array => array[0] === array[1] && array[0] === array[2] === array[1]);
// }

// console.log(board.some(win));


// let board = ['', '', '', '', '', '', '', '', ''];

// const checkWin = (x) => {
// winConditions[0][0]
// }

// const win = (line) => {

// line[0] === line[1] && line[0] === line[2] === line[1]
// }

// console.log(board.some(win));



// let board = ['o', 'x', 'o', 'x', 'x', 'x', 'o', 'o', 'x'];
let board = ['o', 'x', 'o', 'x', 'x', 'o', 'x', 'o', 'x']

let winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7], 
  [2, 5, 8], 
  [0, 4, 8],
  [2, 4, 6]
];

for (let i = 0; i < winConditions.length; i++) {
    let check =
      board[winConditions[i][0]] === board[winConditions[i][1]]
      &&
      board[winConditions[i][0]] === board[winConditions[i][2]];
   if (check === true) {
     console.log(check);
   }
}
