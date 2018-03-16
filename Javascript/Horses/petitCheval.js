class Player {
    constructor(color, textColor, initPos) {
        this.currentPos = initPos
        this.inGame = true
        this.color = color
        this.textColor = textColor
        this.initPos = initPos
    }
}

class Game {
    constructor(board, ...args){
        this.players=[...args]
        this.board = board
    }
    init(board){
        let i=0
        this.players.forEach(player => {
            board.setPlayerPosition(player, i)
            player.initPos = i
            player.currentPos = i
            i+=14
        })
    }

    playRound(player){
        let result = this.throwDice()
        board.move(player, result)
    }

    throwDice(){
        random => Math.floor(Math.random() * 6 + 1)
    } 

    launch(){
        while(true){
            for(let i=0; i<this.players.length; ++i){
                if (this.players.length===1){
                    return
                }
                this.playRound(this.players[i])
            }
        }
    }
}

class Board {
    constructor(boardSize){
        this.board = []
        for (let i=0;i<boardSize;++i){
            this.board.push(new Case(i))
        }
    }
    setPlayerPosition(player, position){
        this.board[position].setPlayer(player)
    }
    move(player, diceResult) {
        console.log(player.currentPos)
        console.log(diceResult)
        let moveRange = parseInt(player.currentPos+diceResult)
        this.checkCaseFree(moveRange)
        this.checkNotAboveInitialPosition(player, moveRange)
    }

    checkCaseFree(position){
        console.log(position)
        let player = this.board[position].getPlayer()
        if (player)
            this.board.setPlayerPosition(player, player.initPos)
    }

    checkNotAboveInitialPosition(player, moveRange) {
        let move = moveRange%55
        if (move>player.initPos){
            console.log(`Player ${player.color} can't move`)
        } else if (move === player.initPos){
            console.log(`Player ${player.color} win`)
        } 
        else {
            player.currentPos = move;
            this.board.setPlayerPosition(player, move)
            console.log(`Player ${player.color} moves to case ${move}`)
        }
    }
}

class Case {
    constructor(i){
        this.pos=i
        this.currentPlayer=null
    }
    setPlayer(player){
        this.currentPlayer=player
    }

    getPlayer(){
        return this.currentPlayer
    }
}


const player1 = new Player("red", "#cc0000")
const player2 = new Player("blue", "#4d4dff" )
const player3 = new Player("green", "#00b33c") 
const player4 = new Player("yellow", "#ffcc00" )
const board = new Board(56)
const game = new Game(board, player1, player2, player3, player4)
game.init()
game.launch()
/*
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
    players.players.forEach(player => {
        if(player.color !== mainPlayer.color && player.currentPos === mainPlayer.currentPos){
            player.currentPos=0
            console.log(`%c Player ${player.color} got kicked out by player ${mainPlayer.color}`, `color: ${player.textColor}`)
        }
    })
}

game = () => {
    let playerCount = players.players.length;
    while (true) {
        for(let i=0; i<playerCount; ++i){
            if (playerCount===1){
                return
            }
            playRound(players.players[i])
            players.players = players.players.filter(player => player.inGame === true)
            playerCount = players.players.length
        }
    }
}

game()*/