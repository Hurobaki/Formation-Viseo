
throwDice = random => Math.floor(Math.random() * 6 + 1);

var player1 = { currentPos: "0", inGame: true, color: "red" }
var player2 = { currentPos: "0", inGame: true, color: "blue" }
var player3 = { currentPos: "0", inGame: true, color: "green" }
var player4 = { currentPos: "0", inGame: true, color: "yellow" }
var players = [player1, player2, player3, player4]

function playRound(player) {
    let result = throwDice();
    console.log(`Player ${player.color} in position ${player.currentPos} scored a ${result}`)
    if (parseInt(player.currentPos + result) > 56) {
        console.log('He can\'t move !')
    } else if (parseInt(player.currentPos + result) === 56) {
        console.log(`Player ${player.color} won and exited the game`)
        player.inGame = false
    }
    else {
        player.currentPos = parseInt(player.currentPos + result)
        console.log(`Player ${player.color} new position is ${player.currentPos}`)
        moveHorseInSameSpot(player)
    }
}

function moveHorseInSameSpot(mainPlayer){
    players.forEach(player => {
        if(player.color !== mainPlayer.color && player.currentPos === mainPlayer.currentPos){
            player.currentPos=0
            console.log(`Player ${player.color} got kicked out by player ${mainPlayer.color}`)

        }
    })
}

game = () => {
    let playerCount = players.length;
    while (playerCount > 1) {
        players.forEach(player => {
            playRound(player)
            players = players.filter(player => player.inGame === true)
            playerCount = players.length
        })
    }
}
game()