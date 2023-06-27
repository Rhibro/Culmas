const randomArr = Array.from({length: 9},
     
    () => Math.floor(Math.random() * 25) + 1);
      
    document.getElementById("array").innerHTML = JSON.stringify(randomArr);




/*const randomArray = (min, max, n = 1) =>
Array.from(
    { length: n },
    () => Math.floor(Math.random() * (max - min + 1)) + min
);

console.log(randomArray())*/


/*const arrayLength = 10 
const randomArray = []
for(let i = 0; i<arrayLength; i++) {randomArray.push(Math.random())}

console.log(randomArray)*/

//document.getElementById('array').innerHTML = Math.floor(Math.random() * 25) + 1