'use strict';

// 1.) Counting sheep 
//   Input: A number greater than zero (ex: 3)
//   Output: if number is 0, the phrase "no more sheep are left" is returned
//   recursive input: the number decremented by 1
//   recursive output: number - "Another sheep jump over the fence"

function countingSheep (numberOfSheep){

  if (numberOfSheep === 0){
    console.log ('No more sheep.');
  }
  else {
    console.log(numberOfSheep + ' - Another sheep jump over the fence');
    numberOfSheep--;
    return countingSheep(numberOfSheep);
  }
}

//countingSheep(10);


// 2.) Array Double
//   Input: array
//   Output: array with numbers doubled
//   recursive input: array with first index's number needing to be doubled
//   recursive output: an array with some of the doubled values and the next value from the original array to be doubled
    


function arrayDouble (array){
  if (!array.length){
    return [];
  }
  else {
    array[0]=array[0]*2;
    return [array[0], ...arrayDouble(array.slice(1))];
  }
}

let arr = [1,2,3];

// console.log(arrayDouble(arr));


// 3.) Reverse String
//   Input: string
//   Output: string with reversed characters
//   recursive input: string with sliced characters, string of partially reversed characters
  

function reverseString (str, revStr =''){
  if (!str.length){
    return '';
  }
  else {
    // console.log(str);
    revStr = revStr + str.charAt(str.length-1);
    // console.log(revStr);

    return  console.log(revStr), reverseString (str.slice(0,str.length-1), revStr);
  }

}

// reverseString('make happy time', '');




// 4.) nth Triangular Number
//   Input: number representing the number of stars on the bottom row
//   Output: diagram of a triangle of stars with n dots on the side
//   recursive input: unfinished array of rows with stars, number incremented until the it equals the original input number
//   recursive output: array of rows with stars


function nthTriangularNumber (nth, row){

  let stars= '', triangleString='';
  const starArray = ['         * \n', '        * *\n', '       * * *\n', '      * * * *\n', '     * * * * *\n', '    * * * * * *\n', '   * * * * * * *\n', '  * * * * * * * *\n', ' * * * * * * * * *\n'];
  if (row > nth){
    return;
  }
  else {

    for (let i=0; i < row; i++){
      stars = stars + starArray[i];
    }
    if (row !== 1 && row !== 2 && row!== 3){
      stars = stars + row+'th';
    }
    if (row === 1){
      stars = stars + row+'st';
    }
    if (row === 2){
      stars = stars + row+'nd';
    }
    if (row === 3){
      stars = stars + row+'rd';
    }
    row++;

    triangleString= triangleString + stars;
    return console.log(triangleString),nthTriangularNumber(nth, row);
  }
}

//nthTriangularNumber(8, 1);


// 5.) String Splitter
//   Input: a string and a separator
//   output: a string separated into an array
//   recursive input: remainder string, and the separator
//   recursive output: the split string as an array
  

let strArray = [];

function stringSplitter(str, separator){
  if (str === ''){
    return strArray;
  }
  else {
    for (let i =0; i < str.length; i ++){
      if (str[i] !== separator){

        strArray.push(str[i]);
      }
      else {
        str = str.substring(i+1);
        return strArray, stringSplitter(str, separator); 
      }
    }
  }

}

// stringSplitter('The quick brown fox jumped over the lazy dog.', '');
// strArray.forEach( i => console.log(i));



// 6.) Binary Representation
// Input : a decimal number
// Output: returns the current binary number
// recursive input: quotient of decimal number
// recursive output: the current binary number, the function with the rec. inputs


let binary='';
function binaryRepresentation (decimal){
  if (Math.floor(decimal/2 === 0)){
    return;
  }
  else {
    binary = (decimal % 2) + binary;
    return binary, binaryRepresentation(Math.floor(decimal/2));
  }
}

// binaryRepresentation(440);
// console.log(binary);


// 7.) Factorial
// Input: a number
// Output: the factorial number
// recursive input: original input number minus 1,
// recursive output: the input number times 1-input number

let factorialNum= 1;

function factorial (number){
  if (number === 0){
    return;
  }

  else {
    factorialNum = factorialNum * number;
    number=number-1;
    return factorial (number);
  }
}

// factorial(7);

// console.log(factorialNum);


  
// 8.) Fibonacci
// Input: A number
// Output: a string of numbers where each number is the sum of the two numbers before it
// recursive input: original input number
// recursive output: the current point in the sequence string



let fibonacciArray = [0,1];
let position=2;
function fibonacci (number){

  if (number <= 0 || number === 1 || position>number){
    fibonacciArray.splice(0, 1);
    return ;
  }
  else {
   
    if (position <= number){
      fibonacciArray.push(fibonacciArray[fibonacciArray.length-2] + fibonacciArray[fibonacciArray.length-1]);
      position++;

    }
    return fibonacciArray, fibonacci(number);
  }


}

// fibonacci(10);
// console.log(fibonacciArray);

// 9.) Anagrams
// Input: A string
// Output: if string length is 1, return that string in an array
// recursive input: original input number
// recursive output: an array of the same string but with characters shuffled around


function anagram (str){

  let arr= [];
 
  if(str.length===1) {
    return [str];
  }

  for(let i = 0; i <str.length; i++){
    console.log(str.replace(str[i], ''));
    const result = anagram(str.replace(str[i], ''));
    result.forEach(substring => {
      arr.push(str[i]+substring);
    });
  }
  return arr;

}

// console.log(anagram('tea'));


// 10.) Animal Hierarchy
// Input: An array of objects and a string
// Output: a cascading object (objects in objects)
// recursive input:  An array of objects and a string
// recursive output: a cascading object (objects in objects)


const animalHierarchy = [
  {id: 'Animals', parent: null},
  {id: 'Mammals', parent: 'Animals'},
  {id: 'Dogs', parent:'Mammals' },
  {id: 'Cats', parent:'Mammals' },
  {id: 'Golden Retriever', parent: 'Dogs'},
  {id: 'Husky', parent:'Dogs' },
  {id: 'Bengal', parent:'Cats' }
];


function traverse(animalHierarchy, parent) {
  let node = {};
  animalHierarchy.filter(item => item.parent === parent)
    .forEach(item => node[item.id] = traverse(animalHierarchy, item.id));
  return node;  
}
// console.log(traverse(animalHierarchy, 'Animals'));



// 11.) Organization Chart
// Input: An array of objects and a string
// Output: a cascading object (objects in objects)
// recursive input:  An array of objects and a string
// recursive output: a cascading object (objects in objects)

const facebookHierarchy = [
  {id:'Zuckerberg', boss: null},
  {id:'Schrepher', boss:'Zuckerberg'},
  {id:'Schrage', boss:'Zuckerberg'},
  {id:'Sandberg', boss:'Zuckerberg'},
  {id:'Bosworth', boss:'Schrepher' },
  {id:'Zhao', boss:'Schrepher'},
  {id:'VanDyck', boss:'Schrage'},
  {id:'Swain', boss:'Schrage'},
  {id:'Goler', boss:'Sandberg'},
  {id:'Hernandez', boss:'Sandberg'},
  {id:'Moissinac', boss:'Sandberg'},
  {id:'Kelley', boss:'Sandberg'},
  {id:'Steve', boss:'Bosworth'},
  {id:'Kyle', boss:'Bosworth'},
  {id:'Andra', boss:'Bosworth'},
  {id:'Richie', boss:'Zhao'},
  {id:'Sofia', boss:'Zhao'},
  {id:'Jen', boss:'Zhao'},
  {id:'Sabrina', boss:'VanDyck'},
  {id:'Michelle', boss:'VanDyck'},
  {id:'Josh', boss:'VanDyck'},
  {id:'Blanch', boss:'Swain'},
  {id:'Tom', boss:'Swain'},
  {id:'Joe', boss:'Swain'},
  {id:'Eddie', boss:'Goler'},
  {id:'Julie', boss:'Goler'},
  {id:'Annie', boss:'Goler'},
  {id:'Rowi', boss:'Hernandez'},
  {id:'Inga', boss:'Hernandez'},
  {id:'Morgan', boss:'Hernandez'},
  {id:'Amy', boss:'Moissinac'},
  {id:'Chuck', boss:'Moissinac'},
  {id:'Vinni', boss:'Moissinac'},
  {id:'Eric', boss:'Kelley'},
  {id:'Ana', boss:'Kelley'},
  {id:'Wes', boss:'Kelley'},
];


function traverseFacebook(facebookHierarchy, boss) {
  let node = {};
  facebookHierarchy.filter(item => item.boss === boss)
    .forEach(item => node[item.id] = traverseFacebook(facebookHierarchy, item.id));
  return node;  
}

// console.log(JSON.stringify(traverseFacebook(facebookHierarchy, null), null, 1));
