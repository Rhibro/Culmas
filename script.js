//it works but the page needs to be refreshed to get get new results. 
// I had an error on line 19 that I wasn't sure how to resolve. 

let array;

function getNewArray() {
  const randomArr = Array.from({ length: 9 }, () => Math.floor(Math.random() * 20) + 1);
  document.getElementById("array").innerHTML = JSON.stringify(randomArr);
  return randomArr;
}

function findCombinations(array) {
  const result = [];

  function isCombinationSum21(combination) {
    return combination.reduce((sum, num) => sum + num, 0) === 21;
  }

  for (let i = 0; i < array.length; i++) {  //had trouble with an error here where it says the property is undefined
    for (let j = i + 1; j < array.length; j++) {
      const combination = [array[i], array[j]];
      if (isCombinationSum21(combination)) {
        result.push( i , '&' , j );
      }
    }
  }

  document.getElementById("comboo").innerHTML = JSON.stringify(result);
  return result;
}

document.addEventListener("DOMContentLoaded", function() {
  array = getNewArray();

  const button = document.getElementById("myButton");
  button.addEventListener("click", function() {
    findCombinations(array);
  });
});



 