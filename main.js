// Model
class Model {
    constructor() {
        this.gameOver = false; // ?
        // this.turn = player1;
        this.board = ['', '', '', '', '', '', '', '', ''];
        this.player = 'Player 1';
        this.letter = 'X'
    }
    setBoard(id) {
        this.board[id] = this.letter; 
    }

    getBoard() {
        return this.board;
    } 

    switchPlayer() {
        if (this.player === 'Player 1') {
            this.player = 'Player 2';
            this.letter = 'O';
        } 
        else if (this.player === 'Player 2') { // three equal signs for checking if true
            this.player = 'Player 1';
            this.letter = 'X';           // one equal sign for assigning
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
        tbl.setAttribute("class", "mytable");
      
        for (var i = 0; i < 3; i++) {  // creating the tile spots 3 across
          var row = document.createElement("tr"); // create ROW, moves in the horizontal direction, 3 across
      
          for (var j = 0; j < 3; j++) { // creating the tile spots 3 down
            var tile = document.createElement("button"); // create TILES as BUTTONS
            tile.setAttribute("id", (3*i) + j); // set id for each tile 
            tile.setAttribute("class", "tile");
            tile.addEventListener('click', fn, {once:true});  
            var tileText = document.createTextNode(''); // create TEXTNODES for tiles
            tile.appendChild(tileText); // append tileText to tile
            row.appendChild(tile); // append tile to row
          }
         
          tbl.appendChild(row);  // append rows to table
        }
        document.body.appendChild(tbl); // append table to body
    
        this.makePage();
    }

    makePage(fn2) {
        var resetButton = document.createElement("button");
        resetButton.setAttribute("class", "btn btn-dark");
        resetButton.setAttribute("type", "button");
        resetButton.setAttribute("id", "reset");
        resetButton.innerHTML = "New Game";
        document.body.appendChild(resetButton);
        var header = document.createElement("h1");
        header.setAttribute("class", "header");
        header.innerHTML = "TIC TAC TOE";
        document.body.appendChild(header); 

        resetButton.addEventListener('click', fn2);
    }
    
}



class Controller {
    constructor() {
        this.m = new Model();
        this.v = new View();
        this.v.createBoard(this.handlePlay)
        this.v.makePage(this.resetGame)
    }

    checkForWin = () => {
        // console.log(this.m.board);
        for (let i = 0; i < this.m.winConditions.length; i++) {
            let win = this.m.winConditions[i];
            let check =
                this.m.board[win[0]] &&
                this.m.board[win[0]] === this.m.board[win[1]] &&
                this.m.board[win[0]] === this.m.board[win[2]]; 
            if (check) {
                console.log(this.m.player + ' is the winner!');
                this.whenWin();
                return;
            }
        }
    }

    handlePlay = (e) => {      // arrow function inherits this from controller
        // console.log(e.target);
        // console.log(this);
        // console.log(this.m.player);
        e.target.innerHTML = `${this.m.letter}`;  
        this.m.setBoard(e.target.id);   // update model to be used in checkForWin
        this.checkForWin();             // check for win before switching player to know who wins
        this.m.switchPlayer();
        
    }

    whenWin() {
        var winMessage = document.createElement('h1');
        winMessage.setAttribute("class", "winMessage")
        document.body.appendChild(winMessage);
        winMessage.innerHTML = this.m.player + ' is the winner!'
    }

    resetGame() {
        this.m.board = ['', '', '', '', '', '', '', '', ''];
        for (tile of this.v.tbl) {
            tile.innerHTML = '';
        }
    }
    
}
new Controller;