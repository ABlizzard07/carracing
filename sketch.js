var canvas, backgroundImg;
var gamestate = 0;
var playercount;
var database;
var form, player, game;
var allPlayers;
var car1, car2, car3, car4, cars

function setup(){
 canvas = createCanvas(displayWidth-20,displayHeight-30);
 database = firebase.database();
 game = new Game();
 game.getState();
 game.start();
 
}

function draw(){
   if(playercount == 4){
       game.update(1);
   }
   if(gamestate == 1){
       clear();
       game.play();
   }
}
