/* Battle Ship */

// Implementing th View //


var view = {
  displayMessage: function(msg){//The displayMessage method takes one argument, a msg.
    var messageArea = document.getElementById('messageArea');//We get the messageArea element from the page.
    messageArea.innerHTML = msg;//and update the text of the messageArea element by setting its innerHTML to msg.
  },
  displayHit: function(location){//Remember the location is created from the row and column and matches an id of a <td> element.
    var cell = document.getElementById(location);
    cell.setAttribute('class','hit');//We then set the class of that element to “hit”. This will immediately add a ship image to the <td> element.
  },
  displayMiss: function(location){
    var cell = document.getElementById(location);
    cell.setAttribute('class','miss');
  }
};


// testing //
// view.displayMiss("00");
// view.displayHit("34");
// view.displayMiss("55");
// view.displayHit("12");
// view.displayMiss("25");
// view.displayHit("26");
//
// view.displayMessage("Tap tap, is this thing on?");



// The Model //

/*

With the view object out of the way, let’s move on to the model.
The model is where we keep the state of the game.
The model often also holds some logic relating to how the state changes.
In this case the state includes the location of the ships,
the ship locations that have been hit, and how many ships have been sunk.

*/


/*

1.boardSize: The size of the grid for the board.
2.numShips: The number of ships in the game.
3.ships: The ship locations and hits.
4.shipsSunk: How many ships have been sunk.
5.shipLength: The number of locations in each ship.
6.fire: A method to fire on a ship and figure out if the shot is a hit or miss.

*/


var ships = [
  {location: ['10','20','30'], hits ['','','']},
  {location: ['32','33','34'], hits ['','','']},
  {location: ['63','64','65'], hits ['','','']}
]
