//********************************************G L O B A L - C O N S T A N T S*************************************** */
const wordSubmitButton = document.getElementById("word-submit-button");
const wordInputField = document.getElementById("word-input-field");
const wordList = document.querySelector("addedWordList");
const orderedWordList = document.getElementById("ordered-List");
var rndWord = "ahoi";

// ****************************E V E N T - L I S T E N E R S**********************************************************
wordSubmitButton.addEventListener("click", () => {
  let newAddList = document.createElement("li");
  newAddList.classList.add("listedItems");
  newAddList.setAttribute("id", "newWordEntry");
  newAddList.textContent = wordInputField.value;
  orderedWordList.appendChild(newAddList);
});

//*******************************************R I D D L E - A R R A Y****************************************************
var riddleArray = [
  ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09"],
  ["10", "11", "12", "13", "14", "15", "16", "17", "18", "19"],
  ["20", "21", "22", "23", "24", "25", "26", "27", "28", "29"],
  ["30", "31", "32", "33", "34", "35", "36", "37", "38", "39"],
  ["40", "41", "42", "43", "44", "45", "46", "47", "48", "49"],
  ["50", "51", "52", "53", "54", "55", "56", "57", "58", "59"],
  ["60", "61", "62", "63", "64", "65", "66", "67", "68", "69"],
  ["70", "71", "72", "73", "74", "75", "76", "77", "78", "79"],
  ["80", "81", "82", "83", "84", "85", "86", "87", "88", "89"],
  ["90", "91", "92", "93", "94", "95", "96", "97", "98", "99"],
];

//*************************************R A N D O M - L E T T E R******************F U N C T I O N************* */
const Alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function newRandomLetter() {
  let z = Math.random() * Alphabet.length;
  let index = Math.floor(z);
  let randomLetter = Alphabet[index];
  return randomLetter;
}
console.log(newRandomLetter);
//*************************************A D D S - L E T T E R S******************F U N C T I O N************* */
// NEW version to add numbers to riddle  //
function drawRiddle() {
  riddleArray.forEach((row, i) =>
    row.forEach((item, j) => {
      document.getElementById("cell" + i + j).innerHTML = "0"; //newRandomLetter();
    })
  );
}
//*************************************C L E A R - L E T T E R S******************F U N C T I O N************* */

function clearRiddle() {
  riddleArray.forEach((row, i) =>
    row.forEach((item, j) => {
      document.getElementById("cell" + i + j).innerHTML = "";
    })
  );
}

//**************************************R E V E R S E - W O R D S **************** */
function reverseString(rndWord) {
  let reversedWord = "";
  for (let i = rndWord.length - 1; i >= 0; i--) {
    reversedWord += rndWord[i];
  }
  return reversedWord;
}

//*************************************R A N D O M - W O R D - I N P U T******************F U N C T I O N

function testButton2() {
  var row = Math.floor(Math.random() * 10);
  var col = Math.floor(Math.random() * 10);
  var cell = document.getElementById("cell" + row + col);
  var switchRandomizer = Math.floor(Math.random() * 2) + 1;

  switch (switchRandomizer) {
    // ----- R O W S ------
    case 1:
      if (
        row + rndWord.length <= riddleArray.length &&
        testWord(cell, row, col, switchRandomizer) == true
      ) {
        for (let k = 0; k < rndWord.length; k++) {
          const cell = document.getElementById("cell" + row++ + col);
          cell.innerHTML = "";
          cell.innerHTML += rndWord[0 + k];
          // window.alert(cell.innerHTML + row + col);
        }
      } else {
        testButton2();
      }
      break;
    // ----- C O L U M N S ------
    case 2:
      if (
        col + rndWord.length <= riddleArray.length &&
        testWord(cell, row, col, switchRandomizer) == true
      ) {
        for (let k = 0; k < rndWord.length; k++) {
          const cell = document.getElementById("cell" + row + col++);
          cell.innerHTML = "";
          cell.innerHTML += rndWord[0 + k];
        }
      } else {
        testButton2();
      }
      break;
    // ----- D I A G O N A L S------
    case 3:
      if (
        row + rndWord.length <= riddleArray.length &&
        col + rndWord.length <= riddleArray.length &&
        testWord(cell, row, col, switchRandomizer) == true
      ) {
        for (let k = 0; k < rndWord.length; k++) {
          const cell = document.getElementById("cell" + row++ + col++);
          cell.innerHTML = "";
          cell.innerHTML += rndWord[0 + k];
        }
      } else {
        testButton2();
      }
      break;
    // ------ R O W S - R E V E R S E ---------
    case 4:
      if (
        row + rndWord.length <= riddleArray.length &&
        testWord(cell, row, col, switchRandomizer) == true
      ) {
        rndWord = reverseString(rndWord);
        for (let k = 0; k < rndWord.length; k++) {
          const cell = document.getElementById("cell" + row++ + col);
          cell.innerHTML = "";
          cell.innerHTML += rndWord[0 + k];
        }
      } else {
        testButton2();
      }
      break;
    // ----- C O L U M N S - R E V E R S E------
    case 5:
      if (
        col + rndWord.length <= riddleArray.length &&
        testWord(cell, row, col, switchRandomizer) == true
      ) {
        rndWord = reverseString(rndWord);
        for (let k = 0; k < rndWord.length; k++) {
          const cell = document.getElementById("cell" + row + col++);
          cell.innerHTML = "";
          cell.innerHTML += rndWord[0 + k];
        }
      } else {
        testButton2();
      }
      break;
    // ----- D I A G O N A L S - R E V E R S E------
    case 6:
      if (
        row + rndWord.length <= riddleArray.length &&
        col + rndWord.length <= riddleArray.length &&
        testWord(cell, row, col, switchRandomizer) == true
      ) {
        rndWord = reverseString(rndWord);
        for (let k = 0; k < rndWord.length; k++) {
          const cell = document.getElementById("cell" + row++ + col++);
          cell.innerHTML = "";
          cell.innerHTML += rndWord[0 + k];
        }
      } else {
        testButton2();
      }
      break;
      default:
        break;
      

    //return cell.innerHTML;
  }
}

/**************************W O R D - M A T C H - C H E C K E R***************** */
function testWord(bool, row2, col2, switchRandomizer2) {
  var cell = bool;
  var row = row2;
  var col = col2;
  var switchRandomizer = switchRandomizer2;

  switch (switchRandomizer2) {
    case (1 || 4):
      for (let k = 0; k < rndWord.length; k++) {
        cell = "cell" + (row2 + k) + col2;
        if (document.getElementById(cell).textContent !== "0" /* && document.getElementById(cell).textContent !== rndWord[0] */) {
          bool = false;
         // window.alert(rnd);
          return bool;
        } else {
          bool = true;
        }
      }
      return bool;

    case (2 || 5):
      for (let k = 0; k < rndWord.length; k++) {
        cell = "cell" + row2 + (col2 + k);
        if (document.getElementById(cell).textContent !== "0" /* && document.getElementById(cell).textContent !== cell.textContent */) {
          bool = false;
          return bool;
        } else {
          bool = true;
        }
      }
      return bool;

    case (3 || 6):
      for (let k = 0; k < rndWord.length; k++) {
        cell = "cell" + (row2 + k) + (col2 + k);
        if (document.getElementById(cell).textContent !== "0" /* && document.getElementById(cell).textContent !== cell.textContent */) {
          bool = false;
          return bool;
        } else {
          bool = true;
        }
      }
      return bool;
  }
}
// for (let i = 0; i < riddleArray.length; i++) {
//   for (let j = 0; j < riddleArray[i].length; j++) {
//     document.getElementById("cell" + i + j) = ;
//     cell.innerHTML = riddleArray[i][j];

// console.log(riddleArray[i][j]);

/***********************C R E A T E  - M A P**********************/

/* ----- working cell implement numbers 00-99 -----------------------
function wordMatchCheck() {
  for (let i = 0; i < riddleArray.length; i++) {
    for (let j = 0; j < riddleArray[i].length; j++) {
      cell = document.getElementById("cell" + i + j);
     // riddleArray[i][j].textContent = cell;
      cell.innerHTML = riddleArray[i][j];
      
      
      // console.log(riddleArray[i][j]);
    }; 
  } 
  }
*/

/*+++++++++++++++++++++++H E L P F U L - F U N C T I O N S +++++++++++++++++++*/

/*
var i = 0; j = 0;

riddleArray.forEach(function each(item) {
  if (Array.isArray(item)) {
    // If is array, continue repeat loop
    item.forEach(each);
    i++;
    j = 0;
  } else {
    console.log("[" + i + "][" + j + "] = " + item);
    j++;
  }
  console.log("cell" + i + j);
}); */
/*
var i = 0; j = 0;

riddleArray.forEach(function each(item) {
  if (Array.isArray(item)) {
    // If is array, continue repeat loop
    item.forEach(each);
    i++;
    j = 0;
  } else {
    console.log("[" + i + "][" + j + "] = cell" + item);    
    //console.log("cell" + i + j);
    j++;
  }
  
});
*/
/*
function drawRiddle() {
    for (var row = 0; row < riddleArray.length; row++) {
        for (var col = 0; col < riddleArray[row].length; col++) {
            var cell = document.getElementById("cell" + row + col);
            riddleArray[row][col] = newRandomLetter();
            cell.innerHTML = riddleArray[row][col];
    }

}
}
*/
//window.alert(cell.innerHTML + row + col);
//window.alert(riddleArray.indexOf(cell.innerHTML));
/*
function randomIndex() {
    
     
        //return rndRow + rndCol;
    //window.alert(["cell" + row + col]);
 //  cell.innerHTML = riddleArray[row][col]; 
    var cell = "cell" + [row] + [col];
    return cell;  

}
*/
/*
function wordLengthCheck() {
  let word = "hoi";
  var row = [Math.floor(Math.random() * 10)];
  var col = [Math.floor(Math.random() * 10)];
  let cell = "cell" + [row] + [col];
  if (word.length + cell[row] > 10) {
    window.alert(cell[row]);
  }

  //if (word.length + cell[row].length <= 10) {
  //  cell[row].replace(cell[row][col], [word] );
}
//}
*/
//*************************************R E S T E******************F U N K T I O N E N - E T C************* */

/* // old version to add numbers to Riddle  //                                              
function drawRiddle() {
    for (var row = 0; row < riddleArray.length; row++) {
        for (var col = 0; col < riddleArray[row].length; col++) {
            var cell = document.getElementById("cell" + row + col);
            riddleArray[row][col] = newRandomLetter();
            cell.innerHTML = riddleArray[row][col];
    }

}
} */

// new index1 = [Math.floor(Math.random() * M)][Math.floor(Math.random() * N)];

/*
// find a random index of riddleArray and check if wordLength fits
function randomIndex() {
    let randomInput = Math.floor(Math.random() * 2)+1;
    let i = [Math.floor(Math.random() * M)];
    let j = [Math.floor(Math.random() * N)];
    let word = "HELLO";
    let indexLayout = newRiddleArray();
    //indexLayout[i][j];
      if (word.length <= (M - i)) {      // Check, if word fits into either length or height of riddle
        console.log("trueX");
      } else {
        console.log("falseX");
      }
      if (word.length <= (N - j)) {     
        console.log("trueY");
      } else {
        console.log("falseY");
      }
      switch (randomInput) {           // picks a random effect to implement the word, as long as theyre possible
        case 1:
         // console.log("blubb");
          for (let k = 0; k < word.length; k++) {
          indexLayout[i].splice(indexLayout[i+k], 1, word[0+k]); 
          }
          return indexLayout;
          break;
        case 2:
        //  console.log("extraBlubb");
          for (let k = 0; k < word.length; k++) {
          indexLayout[j].splice(indexLayout[j+k], 1, word[0+k]);       
          }
          return indexLayout;
          break;
      } return indexLayout;
      
    }
    
      
    //console.log(randomIndex()) */

/* function testButton1() {
  var row = Math.floor(Math.random() * 10);
  var col = Math.floor(Math.random() * 10);
  var cell = document.getElementById("cell" + row + col);
  
// ----- R O W S ------
  if (row + rndWord.length <= riddleArray.length) {
    for (let k = 0; k < rndWord.length; k++) {
      const cell = document.getElementById("cell" + row++ + col);
      cell.innerHTML = "";

      cell.innerHTML += rndWord[0 + k];
    }
  // ----- C O L U M N S ------
  } else if (col + rndWord.length <= riddleArray.length) {
    for (let k = 0; k < rndWord.length; k++) {
      const cell = document.getElementById("cell" + row + col++);
      cell.innerHTML = "";

      cell.innerHTML += rndWord[0 + k];
    } 
 // ----- D I A G O N A L S------
  } else if (col + rndWord.length <= riddleArray.length) {
    for (let k = 0; k < rndWord.length; k++) {
      const cell = document.getElementById("cell" + row++ + col++);
      cell.innerHTML = "";

      cell.innerHTML += rndWord[0 + k];
    }
  }
  return cell.innerHTML;
} */
