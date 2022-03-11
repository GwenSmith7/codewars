'use strict';

// List Filtering Kata -

// My solution

function filter_list(l) {
  // create new array to store numbers in
  const newArr = [];

  // loop through array
  for (let i = 0; i < l.length; i++) {
    // if the character is a number, push to newArr, else continue on
    if (Number.isInteger(l[i])) {
      newArr.push(l[i]);
    } else {
      continue;
    }
  }

  // return newArr
  return newArr;
}

// THIS CODE COULD BE REFACTORED HOWEVER IT WORKS RIGHT NOW AND THAT WAS MY GOAL
