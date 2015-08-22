// Building the right function into the Layout. Starting with the buttons.

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

function snake(){
  var length = 5;
  var snakearray = [1];
  // My snake works, but where is my snake ???
  console.log(snakearray[0]);
}
snake();


//End of document ready.
});