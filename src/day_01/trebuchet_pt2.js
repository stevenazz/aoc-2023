function replaceStringNumbers(inputString) {
    inputString = inputString.replaceAll('one','o1e')
    inputString = inputString.replaceAll('two','t2o')
    inputString = inputString.replaceAll('three','t3e')
    inputString = inputString.replaceAll('four',4)
    inputString = inputString.replaceAll('five','f5e')
    inputString = inputString.replaceAll('six',6)
    inputString = inputString.replaceAll('seven','s7n')
    inputString = inputString.replaceAll('eight','e8t')
    inputString = inputString.replaceAll('nine','n9e')
 
    return inputString
}

coordinateArray = coordinates.split(/\r?\n/)
let coordinateArrayTotals = []

coordinateArray.map(coordinate=>{
    coordinate = replaceStringNumbers(coordinate)

  let coordinateNumbers = []
  for(let i=0; i<coordinate.length; i++) {
    if (!isNaN(coordinate[i])) {
      coordinateNumbers.push(coordinate[i])
    }
  }

let coordinateNumber = ''
  if (coordinateNumbers.length > 0) {
    coordinateNumber = coordinateNumber.concat(coordinateNumbers[0])
    if (coordinateNumbers.length > 1) {
      coordinateNumber = coordinateNumber.concat(coordinateNumbers[coordinateNumbers.length-1])
    } else {
        coordinateNumber = coordinateNumber.concat(coordinateNumbers[0])
    }
  } 

  coordinateArrayTotals.push(Number(coordinateNumber))
})
// Log to console
console.log("Day 01 Pt 2: "+coordinateArrayTotals.reduce(function(acc, val) { return acc + val; }, 0))