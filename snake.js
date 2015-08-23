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

// That's weird. The gameboard has to be an object.
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
function paintSnake1(x,y,color){
  // 1st cell of the snake.Color black
  ctx.fillStyle = color;
  ctx.fillRect(x,y,10,10);
  ctx.strokeStyle = color;
  ctx.strokeRect(x,y,10,10);   
}
paintSnake1(10,10,"black");
//paintSnake1(10,10).ctx.fillsStyle= "white";

// paintSnake2 ???

function paintSnake2(x,y,color){
  // Second Cell of the snake.Color black
  ctx.fillStyle = color;
  ctx.fillRect(12+x,y,10,10);
  ctx.strokeStyle = color;
  ctx.strokeRect(12+x,y,10,10);
}
paintSnake2(11,10,"black");

//paintSnake2(0);

// A snake is an array in this file. Just put the start box of the array in to the end box to make the snake move.

function moveSnake1(x,y){
setTimeout(function(){paintSnake1(x,y,"#9c9")},500);
//paintSnake1.hide();
// setTimeout?
setTimeout(function(){paintSnake1(x+26,y,"black")},1000);
//callbacks.fire(10,10, "black");
  // paintSnake1(36,10);
};
//moveSnake1(10,10);

function moveSnake2(x,y){
  setTimeout(function(){paintSnake2(x,y,"#9c9")},1500);
  setTimeout(function(){paintSnake2(x+26,y,"black")},2000);
};
//moveSnake2(11,10);

function moveForward(){
//for (var i=10; i < 460; i=i+10){
  var i=10;
  moveSnake1(i,10);
  moveSnake2(i+1,10);
  i = i+10;
moveSnake1(i,10);
  moveSnake2(i+1,10);
  
  
//};
};
moveForward();
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