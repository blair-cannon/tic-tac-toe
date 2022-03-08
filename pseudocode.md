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

possible win conditions stored into an array of arrays:
- horizontal wins: 3
- vertical wins: 3
- diagonal wins: 2

~ let win_cond = [[0, 1, 2][3, 4, 5][6, 7, 8]] **numbers represent an id to call on each tile