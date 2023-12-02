function filterCubesByColour(game, gameNumber) {
    const gameMap = new Map()
    sets = game.split(':')[1].split(';')
    gameMap.set(gameNumber, 0)
    sets.map(set=>{
        redCubes = set.match(/(\d+ red)/)
        blueCubes = set.match(/(\d+ blue)/)
        greenCubes = set.match(/(\d+ green)/)

        if (redCubes) {
            if (redCubes[0].split(' ')[0] > 12) {
                gameMap.set(gameNumber, gameMap.get(gameNumber)+1)
            }
        }
        if (greenCubes) {
            if (greenCubes[0].split(' ')[0] > 13) {
                gameMap.set(gameNumber, gameMap.get(gameNumber)+1)
            }
        }
        if (blueCubes) {
            if (blueCubes[0].split(' ')[0] > 14) {
                gameMap.set(gameNumber, gameMap.get(gameNumber)+1)
            }
        }
    })
    
    return gameMap
}
gameArray = gamesList.split(/\r?\n/)
possibleGames = []
gameArray.map(game=>{
    gameNumber = game.match(/(\d+)/)
    gameResult = filterCubesByColour(game, gameNumber[0])
    
    gameResult.forEach((value, key, map) => {
        if(value===0) {
            possibleGames.push(Number(key))
        }
    })
})

console.log("Day 02 Pt 1: "+possibleGames.reduce(function(acc, val) { return acc + val; }, 0))
