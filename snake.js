// Building the right function into the Layout. Starting with the buttons. 

// Then create a snake. But I still can't see it, so I have to paint the snake to make it visible.

// Next step is to make the snake move.
// Wait a sec. Better to make it longer than 1 dot.


$(document).ready(function(){


// That's weird. The gameboard has to be an object.
    var ctx = $("#gameboard")[0].getContext("2d");
    var w = $("#gameboard").width();
  var h = $("#gameboard").height();
  var time = 2000;
var x=10;
var y = 23;

// Function of the buttons.
// keypress() doesn't work. Haha. 
function button (){

  $("body").keydown(function(e) {
 
    if (e.which == "37"){
      console.log("left");
    }

    else if (e.which =="39"){
      console.log("right");
     //setTimeout(moveForward(),500);
      changeRight();
      //moveRight();
    }
    
    else if (e.which =="38")
      {console.log("forward");
      moveForward();}
      //moveRight();}
    
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


function paintSnake(x,y,color){
  ctx.fillStyle = color;
  ctx.fillRect(x,y,10,10);
}
paintSnake(10,10,"black");
//paintSnake(21,10,"black");

function paintFood(x,y,color){
  ctx.fillStyle = color;
  ctx.fillRect(x,y,10,10);
  return x;
}
paintFood(249,10,"blue");



function moveForward(){ 
  paintSnake(x,10,"#9c9");
  paintSnake(x+13,10,"black");
 x = x +13;
 return x;
     };

function changeRight(){

  paintSnake(x,10,"#9c9");
  paintSnake(x,y-10,"#9c9");
  paintSnake(x,y,"black");
 y = y +10;
 return y;
     };


if(moveForward() > paintFood()){
  alert("Game Over");
}







     //function changeRight(){
      //for (var i=10; i < 460; i=i+10){
  //do {
    // 1. Paint 1st and 2nd cell at the same time.
    //2. Delete 1st cell and put it to 3rd cell with moveSnakef1.
    //3. Delete 2nd cell and put it to 4th cell with moveSnakef2.  
    //}

//if ( changeRight()> 300){
//  alert("Game Over");
//}
     //moveForward();
//paintSnake1(23,23,"black");
//paintSnake1(23,49,"black");


//paintSnake1(10,10).ctx.fillsStyle= "white";

// paintSnake2 ???

//function paintSnake2(x,y,color){
//  // Second Cell of the snake.Color black
//  ctx.fillStyle = color;
//   ctx.fillRect(12+x,y,10,10);
//  //ctx.strokeStyle = color;
//  //ctx.strokeRect(12+x,y,10,10);
// // return x;
//}
//paintSnake2(11,10,"black");
//paintSnake2(11,36,"black");
//paintSnake2(11,62,"black");


//paintSnake2(0);

// A snake is an array in this file. Just put the start box of the array in to the end box to make the snake move.
//function moveForward(x,y){
//  //setTimeout(function(){paintSnake1(x+13,y,"#9c9")},200);
//  setTimeout(function(){paintSnake2(x+26,y,"#9c9")},800);
// setTimeout(function(){ paintSnake1(x+26,y+13,"black")},400);
// //paintSnake1(23,23,"#9c9");
//    //paintSnake1(23,49,"black")
//};

//function moveSnaker2(x,y){
// // setTimeout(function(){paintSnake2(x,y,"#9c9");
// // },600);
//    //paintSnake1(23,23,"#9c9");
//    //paintSnake1(23,49,"black");
//    setTimeout(function(){ paintSnake1(x-12,y+13,"#9c9")},400);
// setTimeout(function(){ paintSnake2(x+26,y+26,"black")},800);
//};

//function moveSnakef1(x,y){
//setTimeout(function(){paintSnake1(x,y,"#9c9")},200);
////paintSnake1.hide();
//// setTimeout?
//setTimeout(function(){paintSnake1(x+26,y,"black")},400);
////callbacks.fire(10,10, "black");
//  // paintSnake1(36,10);
//};
////moveSnakef1(10,10);
//
//function moveSnakef2(x,y){
//  setTimeout(function(){paintSnake2(x,y,"#9c9")},600);
//  setTimeout(function(){paintSnake2(x+26,y,"black")},800);
//};





//function changeRight(){
//
// //paintSnake1(23,23,"black");
// //paintSnake1(23,49,"black");
// //paintSnake2(11,36,"black");
// //paintSnake2(11,62,"black");
// paintSnake1(x+26,y,"#9c9");
// moveSnaker1(i,10);
////moveSnaker2(i+1,j+13);
////var countx = 10; 
// j = j+ 26;
////moveRight2(); 
////for (var z=0; z<14;z++){
//// time = time + 2000;
//// moveRight2();
//// countx = countx + 26;
////};
////return countx;
//};
//
//function moveRight(){
//moveSnaker1(i,j);
//moveSnaker2(i-12,j);
//j = j+ 13;
//};
////moveRight();
//moveSnakef2(11,10);


 // var countx = 10;
  //moveForward2();
 
// for (var z=0; z<14;z++){
//  time = time + 2000;
//  moveForward2();
//
//  countx = countx + 26;
//  //////Wall condition/////////
//  
//     if ( countx === 374) {
//    console.log("Game Over");
//};
// };
 // End function.

    //moveForward();



//function moveForward2(){
//setTimeout(function(time){
//// 4. Delete 3rd cell-> 5th cell with moveSnakef1.
//// 5. Delete 4th cell - 6th cell with moveSnakef2. 
//    i = i+ 26;
//    moveSnakef1(i,10);
//    moveSnakef2(i+1,10);
//    },time);
//};
//
//function moveRight2(){
//setTimeout(function(time){
//// 4. Delete 3rd cell-> 5th cell with moveSnakef1.
//// 5. Delete 4th cell - 6th cell with moveSnakef2. 
// paintSnake1(23,23,"black");
  //paintSnake1(23,49,"black");
  //paintSnake2(11,36,"black");
  //paintSnake2(11,62,"black");
//   i = i+ 26;
//   moveSnakef1(23,i);
//   moveSnakef2(11,i+13);
//   },time);
//;



//console.log(ctx.fillRect(50,10,10,10));
//console.log(w);
//console.log(paintSnake2());








  //setTimeout(function(){
  //moveSnakef2(37,10); },2000);
 //setTimeout(function(){
 // moveSnakef1(i,10);
 // moveSnakef2(i+1,10);},2000);
//  i = i+13;
//  console.log(i);
//  setTimeout(function(){//moveSnakef1(i,10);
//   moveSnakef2(i+1,10);},3000);
//
//    i = i+13;
//    console.log(i);
//  setTimeout(function(){
//    moveSnakef1(i,10);
//   moveSnakef2(i+1,10);
//    },10000); 
  //while (i < 460);
  
//};
//};

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
//function stopForward(){
//  
//    setInterval(ctx.clearRect( 0, 0, $("#gameboard")[0].width, $("#gameboard")[0].h//eight),1000);
////if (1===1){
////return break;}
//  //var moveF= setTimeout(moveForward,0);
//  //clearTimeout(moveF);
//  //console.log("Stop");
//  //moveForward();
//  //break;
//};
//
//function stopRight(){
//  var moveF= setTimeout(moveRight,0);
//  clearTimeout(moveF);
//  console.log("Stop");
//  //moveForward();
//  //break;
//};
// console.log(clearTimeout(setTimeout(moveForward(),0)));
// Why on earth can't I use jQuery on my gameboard ????
// What the heck is going on here????



//function Snake() {
//  var length = 30;
//  snake = [];
//   // This function put the snake on screen, but it is invisible. That's why I //have to paint it.
//    
//  for (var i = 0; i<=length; i = i+10)
//    snake.push({x: i, y: 100});
//  }
//  Snake();

// My snake gets longer. Actually I'm also a snake. Haha. Well, my horoscope sign;

//End of document ready.
});