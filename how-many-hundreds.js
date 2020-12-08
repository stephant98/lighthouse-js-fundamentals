function howManyHundreds(numOfBottles){
  let result = numOfBottles / 100
  if(numOfBottles % 100 === 0){
    return result;
  } else if(numOfBottles % 100 !== 0){
    return Math.floor(result)
  }
 
}