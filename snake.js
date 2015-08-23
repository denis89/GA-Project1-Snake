// Building the right function into the Layout. Starting with the buttons. 

// Then create a snake. But I still can't see it, so I have to paint the snake to make it visible.

// Next step is to make the snake move.
// Wait a sec. Better to make it longer than 1 dot.

$(document).ready(function(){

// Function of the buttons.
// keypress() doesn't work. Haha. 
function button (){$("body").keydown(function(e) {
 
 if (e.which == "37") 
  {console.log("left");}

else if (e.which =="39")
  {console.log("right");}

else if (e.which =="38")
  {console.log("up");}

else if (e.which =="40")
  {console.log("down");}

else if (e.which =="32")
  {console.log("pause");}

else if (e.which =="13")
  {console.log("play!");}

});
};
button();

// The score increases the score after the snake could eat a fruit.
function score (won){
  if (won === true)
  {$("#score").html("Score: 100");}
};

// The level will increase if the snake is able to eat a certain amount of fruits.
function level (won){
  var level = 1;
 if (won === true)
  {$("#level").html("Level: "+ level++);}
}


// Why on earth can't I use jQuery on my gameboard ????
// What the heck is going on here????

// Strange the gameboard has to be
    var ctx = $("#gameboard")[0].getContext("2d");
    var w = $("#gameboard").width();
  var h = $("#gameboard").height();

function Snake() {
    var length = 30;
    snake = [];
   // This function put the snake on screen, but it is invisible. That's why I have to paint it.
    
for (var i = 0; i<=length; i = i+10)
     snake.push({x: i, y: 100});
  }
  Snake();

// My snake gets longer. Actually I'm also a snake. Haha. Well, my horoscope sign.
function paintSnake1(x,y){
  // 1st cell of the snake.Color black
  ctx.fillStyle = "black";
  ctx.fillRect(x,y,10,10);
  ctx.strokeStyle = "black";
  ctx.strokeRect(x,y,10,10);   
}
paintSnake1(10,10).ctx.fillStyle= "white";
paintSnake1(10,10).ctx.strokeStyle = "white";

// paintSnake2 ???

function paintSnake2(x,y){
  // Second Cell of the snake.Color black
  ctx.fillStyle = "black";
  ctx.fillRect(12+x,y,10,10);
  ctx.strokeStyle = "black";
  ctx.strokeRect(12+x,y,10,10);
}
paintSnake2(11,10).ctx.fillStyle= "white";

// A snake is an array in this file. Just put the start box of the array in to the end box to make the snake move.
function moveSnake(){
  // Currently the snake gets longer instead of moving. So I have to put the tail to the front. Maybe there is a hide function.
  

  // paintSnake1(36,10);
};
moveSnake();

//$('gameboard').css('color', 'blue');
//var snakee = $("#gameboard").//getContext("2d");
//console.log(snakee);
//function snake(){
//  var length = 5;
//  var snakearray = [1];
//  // My snake works, but where is my snake ???
//  console.log(snakearray[0]);
//}
//snake();



//End of document ready.
});