function getnewarray () {

  const randomArr = Array.from({length: 9},
     
    () => Math.floor(Math.random() * 20) + 1);
      
    document.getElementById("array").innerHTML = JSON.stringify(randomArr);

  };

   


