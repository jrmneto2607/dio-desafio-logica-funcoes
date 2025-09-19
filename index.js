let wins = parseInt(Math.random() * 200)
let loses = parseInt(Math.random() * 200)

let score = winsScore(wins, loses)
let currentRank = getRank(score)

console.log(`O Herói tem o saldo de **(${score} vitórias)**  e está no nível **(${currentRank})**`)

function winsScore(wins, loses){
    let calc = wins - loses
    return calc
}

function getRank(score){
    let rank

    if (score <= 10) rank = "ferro"
    else if (score > 10 && score <= 20) rank = "Bronze"
    else if (score > 20 && score <= 50) rank = "Prata"
    else if (score > 50 && score <= 80) rank = "Ouro"
    else if (score > 80 && score <= 90) rank = "Diamante"
    else if (score > 90 && score <= 100) rank = "Lendário"
    else rank = "Imortal"

    return rank
}
