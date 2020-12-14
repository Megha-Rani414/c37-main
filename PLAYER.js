class Player {

    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;
    }

    getCount(){
        var playerRef = dataBase.ref('playerCount');
        playerRef.on("value",function(data){
            playerCount = data.val();
        })
    }

    updateCount(count){
        dataBase.ref('/').update({
            playerCount:count
        })
    }

    updateName(){
        var playerIndex = "players/player" + this.index;
        dataBase.ref(playerIndex).set({
            Name:this.name,
            Distance:this.distance
        })
    }
    
    static getPlayerInfo(){
        var playerInfo = dataBase.ref('players');
        playerInfo.on("value",(data)=>{
            allPlayers = data.val();
        })
    }

}