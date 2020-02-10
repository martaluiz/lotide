const assertEqual = require('./eqArrays');

const assertArrayEqual = function (array1, array2) {
   //console.log(array1)
   if (array1.length !== array2.length) {
     console.log(`🔴🔴🔴 Assertion Failed:  ${array1} !== ${array2}`);
     return false;
   }
  };
    if (array1[i] !== array2[i]) {
      console.log(`🔴🔴🔴 Assertion Failed:  ${array1} !== ${array2}`);
      return false
    }
  
  console.log(`🟢🟢🟢 Assertion Passed:  ${array1} ==== ${array2}`);

  return true;


module.exports = assertArraysEqual;
