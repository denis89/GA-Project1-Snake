// Building the right function into the Layout. Starting with the buttons. 

// Then create a snake. But I still can't see it, so I have to paint the snake to make it visible.

// Next step is to make the snake move.

$(document).ready(function(){

// Function of the buttons. 
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


    var ctx = $("#gameboard")[0].getContext("2d");
    var w = $("#gameboard").width();
  var h = $("#gameboard").height();

function Snake() {
    var length = 10;
    snake = [];
    for(var i = length - 1; i >= 0; i--) {
      snake.push({x: i, y: 100});
    }
  }
  

  Snake();


function paintSnake(x,y)
{ var cw =10;
  ctx.fillStyle="blue";
  ctx.fillRect(x*cw,y*cw,cw,cw);
  ctx.strokeStyle="white";
  ctx.strokeRect(x*cw,y*cw,cw,cw);
}
paintSnake(10,10);

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