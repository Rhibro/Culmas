function getnewarray () {

  const randomArr = Array.from({length: 9},
     
    () => Math.floor(Math.random() * 20) + 1);
      
    document.getElementById("array").innerHTML = JSON.stringify(randomArr);

  };

  /*function findCombinations(array) {
    const result = [];
  
    // Helper function to check if a combination adds up to 21
    function isCombinationSum21(combination) {
      return combination.reduce((sum, num) => sum + num, 0) === 21;
    }
  
    // Generate all combinations of two numbers
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        const combination = [array[i], array[j]];
        if (isCombinationSum21(combination)) {
          result.push([{ index: i, value: array[i] }, { index: j, value: array[j] }]);
        }
      }
    }
  
    return result;
  }
  
  // Generate a randomized array of 9 numbers not exceeding 20
  function generateRandomArray() {
    const array = [];
    while (array.length < 9) {
      const number = Math.floor(Math.random() * 21) + 1;
      if (!array.includes(number)) {
        array.push(number);
      }
    }
    return array;
  }
  
  // Example usage
  const array = generateRandomArray();
  const combinations = findCombinations(array);
  
  console.log('Array:', array);
  console.log('Combinations:', combinations); */
  
  