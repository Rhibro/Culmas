/* function getnewarray () {

  const randomArr = Array.from({length: 9},
     
    () => Math.floor(Math.random() * 20) + 1);
      
    document.getElementById("array").innerHTML = JSON.stringify(randomArr);

  };

  const array = getnewarray();

 function findCombinations(array) {
    const result = [];
  
    function isCombinationSum21(combination) {
      return combination.reduce((sum, num) => sum + num, 0) === 21;
    }
  
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        const combination = [array[i], array[j]];
        if (isCombinationSum21(combination)) {
          result.push([{ index: i, value: array[i] }, { index: j, value: array[j] }]);
        }
      }
    }

    document.getElementById("comboo").innerHTML = JSON.stringify(result);

     return result;
  }; */

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

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      const combination = [array[i], array[j]];
      if (isCombinationSum21(combination)) {
        result.push([{ index: i, value: array[i] }, { index: j, value: array[j] }]);
      }
    }
  }

  document.getElementById("comboo").innerHTML = JSON.stringify(result);
  return result;
}

document.addEventListener("DOMContentLoaded", function() {
  array = getNewArray(); // Assign the array in the global scope

  const button = document.getElementById("myButton");
  button.addEventListener("click", function() {
    findCombinations(array);
  });
});



 