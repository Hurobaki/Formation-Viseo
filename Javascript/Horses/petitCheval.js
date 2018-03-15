
throwDice = random => Math.floor(Math.random() * 6 + 1);

var player1 = { currentPos: "0", inGame: true, color: "red", textColor:"#cc0000" }
var player2 = { currentPos: "0", inGame: true, color: "blue", textColor:"#4d4dff" }
var player3 = { currentPos: "0", inGame: true, color: "green", textColor:"#00b33c" }
var player4 = { currentPos: "0", inGame: true, color: "yellow", textColor:"#ffcc00" }
var players = [player1, player2, player3, player4]

function playRound(player) {
    let result = throwDice();
    console.log(`%c Player ${player.color} in position ${player.currentPos} scored a ${result}`, `color: ${player.textColor}`)
    if (parseInt(player.currentPos + result) > 56) {
        console.log('%c He can\'t move !', `color: ${player.textColor}`)
    } else if (parseInt(player.currentPos + result) === 56) {
        console.log(`%c Player ${player.color} won and exited the game`, `color: ${player.textColor}`)
        player.inGame = false
    }
    else {
        player.currentPos = parseInt(player.currentPos + result)
        console.log(`%c Player ${player.color} new position is ${player.currentPos}`, `color: ${player.textColor}`)
        moveHorseInSameSpot(player)
    }
}

function moveHorseInSameSpot(mainPlayer){
    players.forEach(player => {
        if(player.color !== mainPlayer.color && player.currentPos === mainPlayer.currentPos){
            player.currentPos=0
            console.log(`%c Player ${player.color} got kicked out by player ${mainPlayer.color}`, `color: ${player.textColor}`)
        }
    })
}

game = () => {
    let playerCount = players.length;
    while (true) {
        for(let i=0; i<playerCount; ++i){
            if (playerCount===1){
                return
            }
            playRound(players[i])
            players = players.filter(player => player.inGame === true)
            playerCount = players.length
        }
        /*
        players.forEach(player => {
            playRound(player)
            players = players.filter(player => player.inGame === true)
            playerCount = players.length
        })*/
    }
}

game()