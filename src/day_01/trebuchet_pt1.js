coordinateArray = coordinates.split(/\r?\n/)
coordinateArrayTotals = []

coordinateArray.map(coordinate=>{
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
console.log("Day 01 Pt 1: "+coordinateArrayTotals.reduce(function(acc, val) { return acc + val; }, 0))