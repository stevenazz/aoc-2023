function findMaxColourEachGame(game, gameNumber) {
    const gameMap = new Map()
    let power = 1
    const colorArray = []

    colorArray.push(game.match(/(\d+ red)/g))
    colorArray.push(game.match(/(\d+ blue)/g))
    colorArray.push(greenCubes = game.match(/(\d+ green)/g))

    colorArray.map(color=>{
        color.map(set=>{
            colorName = set.split(' ')[1]
            numberOfCubes = Number(set.split(' ')[0])
            gameMap.set(colorName, gameMap.get(colorName) === undefined ? numberOfCubes : numberOfCubes > gameMap.get(colorName) ? numberOfCubes : gameMap.get(colorName))
        })
        
    })
    gameMap.forEach((value, key, map)=>{
        power = value * power
    })
    return power
}
gameArray = gamesList.split(/\r?\n/)
gamePowers = []
gameArray.map(game=>{
    gameNumber = game.match(/(\d+)/)
    gamePower = findMaxColourEachGame(game, gameNumber[0])
    gamePowers.push(Number(gamePower))
})
console.log("Day 02 Pt 2: "+gamePowers.reduce(function(acc, val) { return acc + val; }, 0))