/* This function should accept an array of dwarf names, for instance:
["Doc", "Dopey", "Bashful", "Grumpy"]
It should then return a string with the numbered dwarves. The string should look like this:
"1. Doc 2. Dopey 3. Bashful 4. Grumpy " */

var dwarves = ["Dopey", "Grumpy", "Bashful"];

function dwarfRollCall(dwarves) {
  return '1. ' + dwarves[0] + ' 2. ' + dwarves[1] + ' 3. ' + dwarves[2] + ' ' ;
}
dwarfRollCall(dwarves);


// 1. create an array called planeteerCalls and put the values in it
function summonCaptainPlanet(planeteerCalls){              //In this function, I souved using the for loop and variable method,
  //I used the punctuation exclamation, and I used the.push method to push planeteerCalls ands return planeteerCalls in capital using the .Uppercase method
  let uppercasePlaneteerCalls = [];
  for(let counter = 0; counter < planeteerCalls.length; counter++){
    let punctuation = "!"
    uppercasePlaneteerCalls.push(`${planeteerCalls[counter]}${punctuation}`.toUpperCase())
  }
  return uppercasePlaneteerCalls
}


function longPlaneteerCalls(words) {
  for(let counter = 0; counter < words.length; counter++){
//This function are sayinf if any of the calls are longer than 4 characters
// return true, otherwise, return false.
    if(words[counter].length>4){
      return true
    }
  }
  return false
}

function findTheCheese (foods) {
  for (var counter = 0; counter < foods.length; counter++) {
//The initialization is let counter = 0,
//so the loop will start counting at 0.
//The stopping condition is counter < food.length, meaning the
//loop will run as long as the iteration variable, counter, is less than food.length.
//The iteration statement is counter++. This means after each loop, the value of counter will increase by 1.

    if (foods[counter] ===  'gouda'|| foods[counter]===  'cheddar' || foods[counter]==='camembert') {
      return foods[counter];     // operator || mean OR
    }
  }
  //otherwise
  return 'no cheese!'
}
/*Solved in two ways, first way using for loop, second way using array.findTheCheese.
  The findTheCheese() method returns the value of the first element in the array that satisfies the provided testing function.
   Otherwise undefined is returned.
     let found = foods.find(element=> element==='cheddar')
       if (found ==='cheddar'){
         return foods;
       }
       otherwise
   return 'no cheese!'*/
