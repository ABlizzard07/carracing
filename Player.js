class Player{
    constructor(){
       this.index = null;
       this.distance = 0;
       this.name = null;

    }
    getCount(){
        var playercountref = database.ref("playercount");
        playercountref.on("value",function(data){
            playercount = data.val();
        })
    }
    updateCount(count){
       database.ref("/").update({
         playercount: count
       })
       console.log(playercount);

    }
    update(){
        var playerIndex = "players/player"+this.index;
        database.ref(playerIndex).set({
            distance: this.distance,
            name: this.name
        })
    }

    // static function doesn't require an object to be called
    static getPlayerInfo(){
        var playerInforef = database.ref("player");
        playerInforef.on("value",(data)=>{
          allPlayers = data.val();
        })
    
    }
 
}