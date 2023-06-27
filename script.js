function getnewarray () {

const randomArr = Array.from({length: 9},
     
    () => Math.floor(Math.random() * 25) + 1);
      
    document.getElementById("array").innerHTML = JSON.stringify(randomArr);

};

console.log()

//function makecombos () {

    const SumKth = (randomArr, k) => {
        const pair = [];
        for(let i = 0; i < randomArr.length; i++){
          for(let j = i + 1; j < randomArr.length; j++){ //o(n)
             if([i] + randomArr[j] == k){
              pair.push(randomArr[i]);
              pair.push(randomArr[j]);
             }
          }
        }
        return pair;
      }
console.log(SumKth)



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