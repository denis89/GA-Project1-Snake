// Building the right function into the Layout. Starting with the buttons.

$(document).ready(function(){


$("body").keypress(function(e) {
 if (e.which === '13') 
    {alert("Left");}
  console.log("left");
 
 if (e.which === '39') 
    {alert("Right");}
  console.log("right");
});




//End of document ready.
});