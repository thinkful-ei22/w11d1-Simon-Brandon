'use strict';


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

let string = 'make happy time', revStr='';

// reverseString(string, revStr);


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

console.log(JSON.stringify(traverseFacebook(facebookHierarchy, null), null, 1));
