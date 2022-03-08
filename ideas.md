stuff:
- 3x3 grid
- button 
- each tile is clickable
- can't click tile with x or o already in it
- switches turns between x and o
- controller needs to know more than one winning condition, how to structure the wins
- what happens when there is a tie
- 3 elements that need to be built (title, grid, button)
- game should let players know who's turn it is
- tiles can't be clicked after someone wins
- one view class that handles all of the builds: a view that has a build title, build board, build button 
- data structures!!!!
- all constant values : stored in a singleton file, list things like title, string for button at bottom, things to store that you are going to use (all constant keys are capital ex: APP_TITLE), can pull this into main.js to use....can also hold array of info
- local storage for storing wins for each player
- extra: code connect5 ???

possible win conditions stored into an array of arrays:
- horizontal wins: 3
- vertical wins: 3
- diagonal wins: 2

~ let win_cond = [[0, 1, 2],[3, 4, 5],[6, 7, 8]] **numbers represent an id to call on each tile
~ compare board state to winning conditions after a players turn (only need to compare for the player's turn that just ended)

Model:
- title (const)
- win conditions (const)
- tile states (empty or x or o) for each player
- player turns (boolean or just player1 / player2...switches from one player to another: light switch.... if (turn=true) --> x's turn, if (turn = false) --> o's turn; switch boolean/players for turn on grid click)
- score: starts at zero
- board []
- container over board 
- setStates 
- getStates
- end of game = false

View:
- query selector 'app'
- render title
- render board
- render buttons
- render restart button
- initialize event listeners over tile
- initialize event listener over container...contains a counter for clicks

Controller:
- if clicks > 5 --> compare tile states to winner conditions for each player, if no one wins --> tie
- what happens when someone wins? loops tile states to compare to winning condition possibilities
- handle event listeners (ex:  switching turns, displaying x or o after click)
- when someone wins
- after tile is clicked? turns event listeners off after tile is clicked (once true?), switch turn boolean, and display x or o
- start/initialize game
- counter over container for total clicks
- how to end game

Button grid: 
- array of buttons 

Player class in model: 
- two instances of players 
- holds their plays
- x or o 



checking winning conditions:
- is there a value in 1;
    - if there is then check to see if tile1 = tile2 = tile3
        - if that is true, then player has won 

* research
    - array.some() --> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some 
    - mvc --> https://www.freecodecamp.org/news/the-model-view-controller-pattern-mvc-architecture-and-frameworks-explained/ 