const arrayAzar = [3,4,5,6,15,16,17,18];

throwDice = () => Math.floor(Math.random() * (18 - 3 + 1) + 3);

isAzar = score => ((score>=3 && score<=6) || (score>=15 && score<=18));

checkFirstRoundAction = (diceResult, ...args) => {
  let players = [...args]
  if (isAzar(diceResult)) {
    console.log(`${players[0].name} won the game with a Azar`);
    return false
  }
  players[1].luckyNumber=diceResult
  return true
}

secondRound = (diceResult, ...args) => {
  let players = [...args]
  if (isAzar(diceResult)) {
    console.log(`${players[0].name} lost the game due to a ReAzar`)
    return false
  } else if (diceResult === players[1].luckyNumber) {
    console.log(`It\s a draw !`)
    return false
  }
  else {
    players[0].luckyNumber = diceResult
  }
}

function otherRound(){

}
function luckyNumberForOpponent(){}


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
    let result = throwDice();
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

const player1 = {
    name: "Willfried",
    luckyNumber: null
}

const player2 = {
    name: "Wawrinka",
    luckyNumber: null
}

//startGame(player1, player2)