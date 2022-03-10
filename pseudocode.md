MODEL::::::
- constructor : set all properties 
    * this.tile1 = '';
    * this.tile2 = '';
    * this.tile3 = '';
    * this.tile4 = '';
    * this.tile5 = '';
    * this.tile6 = '';
    * this.tile7 = '';
    * this.tile8 = '';
    * this.tile9 = '';
    * this.gameOver = false; ??
    * this.score = 0;
    * this.turn = player1; 

- board =   [tile1, tile2, tile3,
            tile4, tile5, tile6,
            tile7, tile8, tile9]

- tile state: 
    * letter: o
    * letter: x
    * letter: none
    
    For each tile:
    * setTile1(letter) : this.tile1 = letter
    * getTile1 : return this.tile1

    setBoard(letter): sets the letter of each tile after clicked
        this.tile1 = letter.tile1;
        this.tile2 = letter.tile2;
        this.tile3 = letter.tile3;
        this.tile4 = letter.tile4;
        this.tile5 = letter.tile5;
        this.tile6 = letter.tile6;
        this.tile7 = letter.tile7;
        this.tile8 = letter.tile8;
        this.tile9 = letter.tile9;
    
- Whose turn is it? 
    * player 1
    * player 2
    * ^ two different instances of a player object? 
    * switches from one player to another (like light switch): 
            1. player 1's turn to start
            2. player 1 play's (clicks one of the tiles)
            3. turn is updated to player2
            {
                IF (turn === player1) 
                    THEN on click of tile
                        update turn ===> player2

                ELSE IF (turn === player2)
                    THEN on click of tile
                        update turn ===> player1
            }

- title: const
- 8 win conditions: const tile sequences:
1, 2, 3
4, 5, 6
7, 8, 9
1, 4, 7
2, 5, 8
3, 6, 9
3, 5, 7
1, 5, 9


VIEW:::::::
- get div by id
- create:
    * h1 for title
    * container div for board ?
    * 9 buttons for grid
    * reset / new game button
- initialize event listeners
    * for each tile: waiting for click
    * for board container: waiting for / counting clicks
- display textContent for each tile
        this.tile1.textContent = x or o;
        this.tile2.textContent = x or o;
        this.tile3.textContent = x or o;
        this.tile4.textContent = x or o;
        this.tile5.textContent = x or o;
        this.tile6.textContent = x or o;
        this.tile7.textContent = x or o;
        this.tile8.textContent = x or o;
        this.tile9.textContent = x or o;


CONTROLLER:::::::
- display x or o after click of tile#: 
    IF this.player = player1
        THEN display x on click
            AND update model: this.m.setTile#
            AND turn off event listener for tile#
    ELSE IF this.player = player2
        THEN display o on click
            AND update model: this.m.setTile#
            AND turn off event listener for tile#

- check for a win
    1. IF boardClicks >= 5
        THEN winCheck

    2. winCheck: compare tile states from model to winning conditions
    * For each win combo: 
        IF tile1 has a letter
            THEN check to see if tile1, tile2, and tile3 are equal 
             RETURNS true? win & gameOver = true;
             RETURNS false? not a win
    * Player would have changed after click of tile, thus winner is the opposite player ? easier way?

    3. IF boardClicks = 9 // all tiles are filled
        THEN gameOver = true 
            AND display 'TIE'

- gameOver :
    * Bootstrap modal:
    'Player 1 wins!'
    * clears board tiles


TO DO LIST: 
    * reset game
    * bootstrap ??
    * title
    * type in names for each player 
    * tic tac toe like borders
    * board appears in a cool way
    * x and o be different colors