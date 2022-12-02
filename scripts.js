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
  if (wordInputField.value.length > 2 && wordInputField.value.length < 11) {
  newAddList.textContent = wordInputField.value;
  orderedWordList.appendChild(newAddList);
  };
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
//*************************************A D D S - L E T T E R S******************F U N C T I O N************* */
// NEW version to add numbers to riddle  //
function drawRiddle() {
  riddleArray.forEach((row, i) =>
    row.forEach((item, j) => {
      document.getElementById("cell" + i + j).innerHTML = "0"; //newRandomLetter();
    })
  );
}
//*************************************C L E A R - L I S T******************F U N C T I O N************* */
function deleteList() {
  while (orderedWordList.length !== 0) {
  orderedWordList.removeChild(document.getElementById('newWordEntry'));
  }
};
//*************************************C L E A R - L E T T E R S******************F U N C T I O N************* */
function clearRiddle() {
  riddleArray.forEach((row, i) =>
    row.forEach((item, j) => {
      document.getElementById("cell" + i + j).innerHTML = "";  
    })
  );
  deleteList();
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
  var switchRandomizer = Math.floor(Math.random() * 6) + 1;

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
        if (document.getElementById(cell).textContent !== "0" && rndWord[0 + k] !== document.getElementById(cell).textContent) {
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
        if (document.getElementById(cell).textContent !== "0"  && rndWord[0 + k] !== document.getElementById(cell).textContent) {
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
        if (document.getElementById(cell).textContent !== "0" && rndWord[0 + k] !== document.getElementById(cell).textContent ) {
          bool = false;
          return bool;
        } else {
          bool = true;
        }
      }
      return bool;
  }
}


/*+++++++++++++++++++++++H E L P F U L - F U N C T I O N S +++++++++++++++++++*/


