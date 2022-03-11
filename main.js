const app = document.getElementById("app");

// Model
class Model {
    constructor() {
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

    clearBoard() {
        this.board = ['', '', '', '', '', '', '', '', ''];
    }

}

//View
class View {
    constructor() {

    }

    getPlayers = (fn3) => {
        // create player 1 label and input box
        this.enterNames = document.createElement('p');
        this.enterNames.setAttribute("class", "enterNames");
        var label1 = document.createElement('label');
        label1.setAttribute("for", "player1");
        label1.innerHTML = "Player 1:";
        var player1 = document.createElement('input');
        player1.setAttribute("id", "player1");
        player1.setAttribute("name", "player1");
        player1.setAttribute("type", "text");

        // create player 2 label and input box
        var label2 = document.createElement('label');
        label2.setAttribute("for", "player2");
        label2.innerHTML = "Player 2:";
        var player2 = document.createElement('input');
        player2.setAttribute("id", "player2");
        player2.setAttribute("name", "player2");
        player2.setAttribute("type", "text");
        label1.appendChild(player1);
        label2.appendChild(player2);
        this.enterNames.appendChild(label1);
        this.enterNames.appendChild(label2);
        app.appendChild(this.enterNames);

        // create button
        var goButton = document.createElement('button');
        goButton.setAttribute("class", "btn btn-secondary");
        goButton.innerHTML = "Ready to Play!";
        this.enterNames.appendChild(goButton);
        goButton.addEventListener('click', fn3);
    }


    createBoard = (fn) => {
  
        this.tbl = document.createElement("table"); // creates a TABLE element 
        this.tbl.setAttribute("class", "mytable");
      
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
         
          this.tbl.appendChild(row);  // append rows to table
        }
        app.appendChild(this.tbl); // append table to body
    
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

    resetDOM() {
        app.removeChild(this.tbl);
    }
    
}



class Controller {
    constructor() {
        this.m = new Model();
        this.v = new View();
        this.v.createBoard(this.handlePlay);
        this.v.makePage(this.resetGame.bind(this)); // binds to controller class
        this.v.getPlayers(this.startGame);
    }

    handlePlay = (e) => {      // arrow function inherits this from controller
        e.target.innerHTML = `${this.m.letter}`;  
        this.m.setBoard(e.target.id);   // update model to be used in checkForWin
        this.checkForWin();             // check for win before switching player to know who wins
        this.checkForTie();
        this.m.switchPlayer();
        
    }

    startGame = () => {
        app.removeChild(this.v.enterNames);
    }

    checkForWin = () => {
        for (let i = 0; i < this.m.winConditions.length; i++) {
            let win = this.m.winConditions[i];
            let board = this.m.board;
            let check =
                board[win[0]] &&
                board[win[0]] === board[win[1]] &&
                board[win[0]] === board[win[2]]; 
            if (check) {
                console.log(this.m.player + ' is the winner!');
                this.whenWin();
                return;
            }
        }
    }

    checkForTie = () => {
        const isBoardFull = (currentValue) => currentValue === 'X' || currentValue === 'O';
        let tieCheck = this.m.board.every(isBoardFull);
        if (tieCheck) {
            this.whenTie();
            return;
        }
    }

    whenWin() {
        this.winMessage = document.createElement('h1');
        this.winMessage.setAttribute("class", "winMessage");
        app.appendChild(this.winMessage);
        this.winMessage.innerHTML = this.m.player + ' is the winner!';
        var closeButton = document.createElement('button');
        closeButton.setAttribute("class", "closeButton");
        closeButton.innerHTML = "Close";
        this.winMessage.appendChild(closeButton);
        closeButton.addEventListener('click', this.closeWin);
    }

    whenTie() {
        this.tieMessage = document.createElement('h1');
        this.tieMessage.setAttribute("class", "tieMessage");
        app.appendChild(this.tieMessage);
        this.tieMessage.innerHTML = 'The cat wins. Play again to break the tie!';
        var closeTieButton = document.createElement('button');
        closeTieButton.setAttribute("class", "closeTieButton");
        closeTieButton.innerHTML = "Close";
        this.tieMessage.appendChild(closeTieButton);
        closeTieButton.addEventListener('click', this.closeTie);
    }

    closeWin = () => {
        app.removeChild(this.winMessage);
    }

    closeTie = () => {
        app.removeChild(this.tieMessage);
    }

    resetGame() {
        this.m.clearBoard();
        this.v.resetDOM();
        new Controller;
    }
    
}

new Controller;
    
