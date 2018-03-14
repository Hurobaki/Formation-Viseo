const arrayAzar = [3,4,5,6,15,16,17,18];

throwDice = random => Math.floor(Math.random() * (18 - 3 + 1) + 3);

isAzar = score => arrayAzar.includes(score);

recursiveTurn = (opponent, currentPlayer) => {
    var result = throwDice();
    console.log(`${currentPlayer.name} got a ${result} in his throw`)
    if (result === currentPlayer.luckyNumber) {
        console.log(`${currentPlayer.name} won the game by getting his lucky number`);
        return 
    } else if (result === opponent.luckyNumber){
        console.log(`${opponent.name} won the game by getting his lucky number`);
        return 
    }
    recursiveTurn(currentPlayer, opponent);
}

startGame = (player1, player2) => {
    var result = throwDice();
    console.log(`${player1.name} got a ${result} in his first throw`)
    if (isAzar(result)) {
        console.log(`${player1.name} won the game with a Azar on first throw`)
        return
    } 

    player2.luckyNumber = result,
    console.log(`${player2.name} lucky number is ${result}`)

    result = throwDice();
    console.log(`${player1.name} got a ${result} in his second throw`)
    if (isAzar(result)) {
        console.log(`${player1.name} lost the game with a ReAzar`)
    } else if (result === player2.luckyNumber) {
        console.log(`${player1.name} got the same lucky number, game restarts`)
        startGame(player1, player2)
    } else {
        console.log(`${player1.name}'s lucky number is ${result}`)
        player1.luckyNumber = result;
        return recursiveTurn(player1, player2);
    }
}

var player1 = {
    name: "Willfried",
    luckyNumber: null
}

var player2 = {
    name: "Wawrinka",
    luckyNumber: null
}

startGame(player1, player2)