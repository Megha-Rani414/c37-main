class Game{

    constructor(){
        
    }

    getState(){
        var gamestateRef = dataBase.ref('Gamestate');
        gamestateRef.on("value",function(data){
            gameState = data.val();
        })
    }

    updateState(state){
        dataBase.ref('/').update({
            Gamestate:state
        });
    }

    async startState(){
        if(gameState === 0){

            player = new Player();
            var playerCountRef = await dataBase.ref('playerCount').once("value");

            if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount();
            }

            form = new Form();
            form.display();
        }
    }

    playState(){

        form.hide();
        textSize(25);
        text("Get Ready to Begin!!!",120,200)
        Player.getPlayerInfo();

        if(allPlayers !== undefined){

            var yvalue = 240;

            for(var plr in allPlayers){
                if(plr === "player" + player.index)
                    fill("red")
                else
                    fill("black");
                yvalue = yvalue + 30;
                textSize(10);
                text(allPlayers[plr].Name + ": " + allPlayers[plr].Distance,150,yvalue);
           }
        }

        if(keyDown(UP_ARROW) && player.index !== null){
            player.distance = player.distance + 10;
            player.updateName();
        }
    }
}


