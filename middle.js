const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length){
    return false
  }
  for(let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false
    }
  }
  return true
}

const eqArrays = require(./eqArrays);


const assertArraysEqual = function(array1, array2) {
  result = eqArrays(array1, array2);
  if (result) {
    console.log(`✅✅✅ Assertion Passed: [${array1}] === [${array2}]`);
  } else {
    console.log(`🛑🛑🛑 Asseration Failed: [${array1}] !== [${array2}]`);
  }
};

const middle = function(array) {
  let output = []
  let index = Math.floor(array.length/2)
  if (array.length <= 2) {
    return output
  }
  else if (array.length % 2 === 0) {
      output.push(array[(index)-1])
      output.push(array[(index)]) 
  }
  else {
    output.push(array[index])
  }
  return output
}

module.exports = middle;
