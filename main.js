// Model
class Model {
    constructor() {
        this.gameOver = false; // ?
        // this.turn = player1;
        this.board = ['', '', '', '', '', '', '', '', ''];
        this.player = 'Player 1';
        this.letter = 'X'
    }
    setBoard(tileId) {
        this.board[tileId] = this.letter;
        
    }

    getBoard() {
        return this.board;
    } 

    switchPlayer() {
        if (this.player === 'Player 1') {
            this.player = 'Player 2';
            this.letter = 'O'
        } 
        else if (this.player === 'Player 2') { // three equal signs for checking if true
            this.player = 'Player 1';
            this.letter = 'X'           // one equal sign for assigning
        }
    }

    winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7], 
        [2, 5, 8], 
        [0, 4, 8],
        [2, 4, 6]
      ];

}

//View
class View {
    constructor() {

    }

    createBoard = (fn) => {
  
        var tbl = document.createElement("table"); // creates a TABLE element 
      
        for (var i = 0; i < 3; i++) {  // creating the tile spots 3 across
          var row = document.createElement("tr"); // create ROW, moves in the horizontal direction, 3 across
      
          for (var j = 0; j < 3; j++) { // creating the tile spots 3 down
            var tile = document.createElement("button"); // create TILES as BUTTONS
            tile.setAttribute("id", VALUE ????????????)
            tile.addEventListener('click', fn, {once:true});  
            var tileText = document.createTextNode(''); // create TEXTNODES for tiles
            tile.appendChild(tileText); // append tileText to tile
            row.appendChild(tile); // append tile to row
          }
         
          tbl.appendChild(row);  // append rows to table
        }
        document.body.appendChild(tbl); // append table to body
      
        tbl.setAttribute("border", "2");   // sets the border of tbl, without table is just data without any lines
    
    }
    
}



class Controller {
    constructor() {
        this.m = new Model();
        this.v = new View();
        this.v.createBoard(this.handlePlay)
    }

    checkForWin = () => {
        console.log(this.m.board);
        for (let i = 0; i < this.m.winConditions.length; i++) {
            let check =
                this.m.board[i][0] &&
                this.m.board[this.m.winConditions[i][0]] === this.m.board[this.m.winConditions[i][1]] &&
                this.m.board[this.m.winConditions[i][0]] === this.m.board[this.m.winConditions[i][2]];
            if (check === true) {
                console.log(check);
            }
        }
    }

    handlePlay = (e) => {      // arrow function inherits this from controller
        // console.log(e.target);
        // console.log(this);
        // console.log(this.m.player);
        e.target.innerHTML = `${this.m.letter}`;  
        this.m.setBoard(e.target.tileId???????????);   // update model to be used in checkForWin
        this.checkForWin(); // check for win before switching player to know who wins
        this.m.switchPlayer();

    }
}
new Controller;