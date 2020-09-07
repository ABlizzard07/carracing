class Game{
    constructor(){

    }
    getState(){
      var gamestateref = database.ref("gamestate");
      gamestateref.on("value",function(data){
        gamestate = data.val();
      })
    }
    update(state){
      database.ref("/").update({
          gamestate: state
      })
    }
    async start(){
      if(gamestate == 0){
          player = new Player();
          var playercountref = await database.ref("playercount").once("value");
         if(playercountref.exists()){
           playercount = playercountref.val();
           player.getCount();
         }

          form = new Form();
          form.display();
      }
      car1 = createSprite(200,350);
      car2 = createSprite(300,350);
      car3 = createSprite(400,350);
      car4 = createSprite(500,350);
      cars = [car1, car2, car3, car4];
    }
    play(){
      form.hide();
      textSize(30);
      text("Game Start",120,100);

      player.getPlayerInfo();
      if(allPlayers != undefined){
         var x = 0;
         var y;
         for(var plr in allPlayers){
           index += 1;
           x += 200;
           y = displayHeight - allPlayers[plr].distance;
           cars[index - 1].x = x;
           cars[index - 1].y = y;
         
         if(plr == player.index){
        /*   fill("red");
         }
         else{
           fill("black");
         } */
         
         camera.position.x = displayWidth/2;
         camera.position.y = cars[index - 1].y;
         }
        }

      /*   display_position += 20;
         textSize(15);
         text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,display_position); */
      }
      if(keyDown(UP_ARROW) && player.index != null){
     //   player.distance += 50;
        player.update();

      }
     
    }
    drawSprites();

}