//********************************************G L O B A L - C O N S T A N T S*************************************** */
const wordSubmitButton = document.getElementById("word-submit-button");
const wordInputField = document.getElementById("word-input-field");
const wordList = document.querySelector("addedWordList");
const orderedWordList = document.getElementById("ordered-List");
var rndWord = "";
var wordArray = [];

// ****************************A D D - N E W - W O R D - T O - L I S T**********************************************************
/***event listener for word entry on mouse click ****/
wordSubmitButton.addEventListener("click", () => {
  validate();
});

/***prevents spacebar usage and allows valid entry with enter-button ****/
wordInputField.addEventListener("keydown", function (e) {
  console.log(e.which);
  if (e.code === "Enter" && e.which !== 32) {
    validate(e);
  } else if (e.which === 32) {
    e.preventDefault();
  }

  /****checks, if word is a valid entry, blocks everything except small/capital letters  *****/
});
function validate(e) {
  if (wordInputField.value.length > 2 && wordInputField.value.length < 11 &&  /[^a-zA-Z]+/g.test(wordInputField.value) === false) {
    let newAddList = document.createElement("li");
    newAddList.classList.add("listedItems");
    newAddList.setAttribute("id", "newWordEntry");
    newAddList.textContent = wordInputField.value;
    orderedWordList.appendChild(newAddList);
    console.log(wordArray.push(newAddList.textContent));
    console.log(wordArray);
    wordInputField.value = "";
  } else {
    wordInputField.value = wordInputField.value.match(new RegExp(/[a-zA-Z]+/));  
  } 
}

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
function drawRiddle() {
  riddleArray.forEach((row, i) =>
    row.forEach((item, j) => {
      document.getElementById("cell" + i + j).innerHTML = "0"; //newRandomLetter();
    })
  );
}
//*************************************C L E A R - L I S T******************F U N C T I O N************* */
function deleteList() {
  wordArray.length = 0;
  orderedWordList.replaceChildren();
}
/* while (orderedWordList.length !== 0) {
  orderedWordList.removeChild(document.getElementById('newWordEntry'));
  } */

//*************************************C L E A R - L E T T E R S******************F U N C T I O N************* */
function clearRiddle() {
  rndWord = [];
  riddleArray.forEach((row, i) =>
    row.forEach((item, j) => {
      document.getElementById("cell" + i + j).innerHTML = "";
    })
  );
  deleteList();
  wordInputField.value = "";
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
    case 1 || 4:
      for (let k = 0; k < rndWord.length; k++) {
        cell = "cell" + (row2 + k) + col2;
        if (
          document.getElementById(cell).textContent !== "0" &&
          rndWord[0 + k] !== document.getElementById(cell).textContent
        ) {
          bool = false;
          // window.alert(rnd);
          return bool;
        } else {
          bool = true;
        }
      }
      return bool;

    case 2 || 5:
      for (let k = 0; k < rndWord.length; k++) {
        cell = "cell" + row2 + (col2 + k);
        if (
          document.getElementById(cell).textContent !== "0" &&
          rndWord[0 + k] !== document.getElementById(cell).textContent
        ) {
          bool = false;
          return bool;
        } else {
          bool = true;
        }
      }
      return bool;

    case 3 || 6:
      for (let k = 0; k < rndWord.length; k++) {
        cell = "cell" + (row2 + k) + (col2 + k);
        if (
          document.getElementById(cell).textContent !== "0" &&
          rndWord[0 + k] !== document.getElementById(cell).textContent
        ) {
          bool = false;
          return bool;
        } else {
          bool = true;
        }
      }
      return bool;
  }
}

/***********************C R E A T E - R I D D L E***********************/
function addAllWords() {
  drawRiddle();
  for (let x = wordArray.length - 1; x >= 0; x--) {
    rndWord = wordArray[x];
    testButton2();
  }
  replaceZero();
}

/*****************************R E P L A C E - Z E R O S ***********************************************/
function replaceZero() {
  riddleArray.forEach((row, i) =>
    row.forEach((item, j) => {
      if (document.getElementById("cell" + i + j).innerHTML === "0") {
        document.getElementById("cell" + i + j).innerHTML = newRandomLetter();
      }
    })
  );
}
//console.log(wordArray.length);
// rndWord = wordArray[0];
// console.log(wordArray.length);
// console.log(rndWord);
//   //  rndWord => testButton2();
// }

//rndWord.pop.forEach((rndWord => testButton2()));
// testButton2(rndWord[b]);
//}
//console.log(word[1])
/*+++++++++++++++++++++++H E L P F U L - F U N C T I O N S +++++++++++++++++++*/
//var tryAgain = [];

  document.addEventListener('click', () => {
      cellHighlight = document.querySelector('tr > td:hover');
  cellHighlight.classList.add('selected');
  //tryAgain.push(cellHighlight);
  
})




/*************************M O U S E - E V E N T S ******************************* */


/*******applies class on mouseOver - prototype(diagonals iffy) ********/
/*
let isSelecting = false;
let x = 0;
let y = 0;

document.addEventListener('mousedown', (e) => {
  cellHighlight = document.querySelector('tr > td:hover');
  x = e.offsetX;
  y = e.offsetY;
  isSelecting = true;
  
})

document.addEventListener('mousemove', (e) => {
  cellHighlight = document.querySelector('tr > td:hover');
  if (isSelecting) {
    cellHighlight.classList.add('selected');
   // drawLine(context, x, y, e.offsetX, e.offsetY);
    x = e.offsetX;
    y = e.offsetY;
  }
});

window.addEventListener('mouseup', (e) => {
  cellHighlight = document.querySelector('tr > td:hover');
  if (isSelecting) {
    //cellHighlight.classList.delete('selected');
    //drawLine(context, x, y, e.offsetX, e.offsetY);
    x = 0;
    y = 0;
    isSelecting = false;
  }
});
*/
