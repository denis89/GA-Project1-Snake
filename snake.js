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

function score (won){
  if (won === true)
  {$("#score").html("Score: 100");}
};

function level (won){
  var level = 1;
 if (won === true)
  {$("#level").html("Level: "+ level++);}
}




//End of document ready.
});