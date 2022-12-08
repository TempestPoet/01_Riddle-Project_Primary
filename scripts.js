//********************************************G L O B A L - C O N S T A N T S*************************************** */
const wordSubmitButton = document.getElementById("word-submit-button");
const wordInputField = document.getElementById("word-input-field");
const wordList = document.querySelector("addedWordList");
const orderedWordList = document.getElementById("ordered-List");
//var rndWord = "";
var wordArray = [];


// ****************************A D D - N E W - W O R D - T O - L I S T**********************************************************
/***event listener for word entry on mouse click ****/
wordSubmitButton.addEventListener("click", () => {
  validate();
});

/***prevents spacebar usage and allows valid entry with enter-button ****/
wordInputField.addEventListener("keydown", function (e) {
  //console.log(e.which);
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
    newAddList.textContent = wordInputField.value.toLowerCase();
    orderedWordList.appendChild(newAddList);
    wordArray.push(newAddList.textContent);
    console.log(wordArray);
  //  wordInputField.value = "";
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
const Alphabet = "abcdefghijklmnopqrstuvwxyz"; //"ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function newRandomLetter() {
  let z = Math.random() * Alphabet.length;
  let index = Math.floor(z);
  let randomLetter = Alphabet[index];
  return randomLetter;
}
//*************************************A D D S - L E T T E R S******************F U N C T I O N************* */
// NEW version to add numbers to riddle  //
function addLetters() {
  riddleArray.forEach((row, i) =>
    row.forEach((item, j) => {
      document.getElementById("" + i + j).innerHTML = "0"; //newRandomLetter();
    })
  );
 // document.getElementById("cell75").innerHTML = "E"
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
      document.getElementById("" + i + j).innerHTML = "";
      
    })
  );
  deleteList();
  wordInputField.value = "";
  $("td").css("background-color", "");
}

//**************************************R E V E R S E - W O R D S **************** */
function reverseString(rndWord) {
  let rndWordRev = "";
  for (let i = rndWord.length - 1; i >= 0; i--) {
    rndWordRev += rndWord[i];
  }
  return rndWordRev;
}

//*************************************R A N D O M - W O R D - I N P U T******************F U N C T I O N

function testButton2() {
  var row = Math.floor(Math.random() * 10);
  var col = Math.floor(Math.random() * 10);
  var cell = document.getElementById("" + row + col);
  var switchRandomizer = Math.floor(Math.random() * 8) + 1;
  
  
  if (switchRandomizer > 4) {
    rndWord = reverseString(rndWord);
  } 

  switch (switchRandomizer) {
    // ----- R O W S ------
    case 1:
      if (
        (row + rndWord.length <= riddleArray.length) && 
        (testWord(cell, row, col, switchRandomizer) === true)
      ) {
        for (let k = 0; k < rndWord.length; k++) {
          const cell = document.getElementById("" + row++ + col);
          cell.innerHTML = "";
          cell.innerHTML += rndWord[0 + k];
          numberCompareArray.push(cell.id)
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
          const cell = document.getElementById("" + row + col++);
          cell.innerHTML = "";
          cell.innerHTML += rndWord[0 + k];
          numberCompareArray.push(cell.id)
        }
      } else {
        testButton2();
      }
      break;
   
      // ----- D I A G O N A L - TopLeft to BottomRight------
    case 3:
      if (
        row + rndWord.length <= riddleArray.length &&
        col + rndWord.length <= riddleArray.length &&
        testWord(cell, row, col, switchRandomizer) == true
      ) {
        for (let k = 0; k < rndWord.length; k++) {
          const cell = document.getElementById("" + row++ + col++);
          cell.innerHTML = "";
          cell.innerHTML += rndWord[0 + k];
          numberCompareArray.push(cell.id)
        }
      } else {
        testButton2();
      }
      break;
    // ----- D I A G O N A L - TopRight to BottomLeft------
    case 4:
      if (
        //rndWord.length <= row && rndWord.length >= col &&
        row + rndWord.length <= riddleArray.length  &&
        col - rndWord.length >= 0 &&
        testWord(cell, row, col, switchRandomizer) == true
      ) {
        for (let k = 0; k < rndWord.length; k++) {
          const cell = document.getElementById("" + row++ + col--);
          cell.innerHTML = "";
          cell.innerHTML += rndWord[0 + k];
          numberCompareArray.push(cell.id)
        }
      } else {
        testButton2();
      }
      break;
    // ------ R O W S - R E V E R S E ---------
    case 5:
      
      if (
        (row + rndWord.length <= riddleArray.length) &&
        (testWord(cell, row, col, switchRandomizer) == true)
      ) {
        //rndWord = reverseString(rndWord);
        for (let k = 0; k < rndWord.length; k++) {
          const cell = document.getElementById("" + row++ + col);
          cell.innerHTML = "";
          cell.innerHTML += rndWord[0 + k];
          numberCompareArray.push(cell.id)
        }
      } else {
       testButton2();
      }
      break;
    // ----- C O L U M N S - R E V E R S E------
    case 6:
      if (
        col + rndWord.length <= riddleArray.length &&
        testWord(cell, row, col, switchRandomizer) == true
      ) {
      //  rndWord = reverseString(rndWord);
        for (let k = 0; k < rndWord.length; k++) {
          const cell = document.getElementById("" + row + col++);
          cell.innerHTML = "";
          cell.innerHTML += rndWord[0 + k];
          numberCompareArray.push(cell.id)
        }
      } else {
        testButton2();
      }
      break;
    // ----- D I A G O N A L S - R E V E R S E------
    case 7:
      if (
        row + rndWord.length <= riddleArray.length &&
        col + rndWord.length <= riddleArray.length &&
       testWord(cell, row, col, switchRandomizer) == true
      ) {
      //  rndWord = reverseString(rndWord);
        for (let k = 0; k < rndWord.length; k++) {
          const cell = document.getElementById("" + row++ + col++);
          cell.innerHTML = "";
          cell.innerHTML += rndWord[0 + k];
          numberCompareArray.push(cell.id)
        }
      } else {
        testButton2();
      }
      break;
    // ----- D I A G O N A L - R E V E R S E TopRight to BottomLeft------
    case 8:
      if (
        rndWord.length <= row && rndWord.length >= col &&
        row + rndWord.length <= riddleArray.length &&
        col - rndWord.length >= 0 &&
       testWord(cell, row, col, switchRandomizer) == true
      ) {
     //   rndWord = reverseString(rndWord);
        for (let k = 0; k < rndWord.length; k++) {
          const cell = document.getElementById("" + row++ + col--);
          cell.innerHTML = "";
          cell.innerHTML += rndWord[0 + k];
          numberCompareArray.push(cell.id)
          
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
let numberCompareArray = []
/**************************W O R D - M A T C H - C H E C K E R***************** */
function testWord(bool, row2, col2, switchRandomizer2) {
  var cell = bool;
  var row = row2;
  var col = col2;
  var switchRandomizer = switchRandomizer2;

 
  switch (switchRandomizer2) {
    case 1: case 5:
      console.log("dir5")
      for (let k = 0; k < rndWord.length; k++) {
        cell = "" + (row + k) + col;
        if (document.getElementById(cell).textContent !== "0" && rndWord[0 + k]  !== document.getElementById(cell).textContent) {
          bool = false;
          // window.alert(rnd);
          return bool;
        } else {
          bool = true;
        }
      }
      return bool;

    case 2: case 6:
      for (let k = 0; k < rndWord.length; k++) {
        cell = "" + row + (col + k);
        if (document.getElementById(cell).textContent !== "0"  && rndWord[0 + k] !== document.getElementById(cell).textContent) {
          bool = false;
          return bool;
        } else {
          bool = true;
        }
        
      }
      return bool;

    case 3: case 7:
      for (let k = 0; k < rndWord.length; k++) {
        cell = "" + (row + k) + (col + k);
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

    case 4: case 8:
      for (let k = 0; k < rndWord.length; k++) {
        cell = "" + (row + k) + (col - k);
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
let compareArray = [];

function drawRiddle() {
  addLetters();

  for (let x = wordArray.length - 1; x >= 0; x--) {
    rndWord = wordArray[x];
    rndWord = rndWord.split('');
    compareArray.push(rndWord);
   // console.log(compareArray);
    testButton2();
  } 
  replaceZero();
}
/*
 function getAllLetters(rndWord) {
  if (rndWord === '') {               // If arguments is blank
      return [];                  // return an empty array
  }
  return rndWord.split('');           // Else, split string using the split() method, which returns an array
}
var output = getAllLetters('Radagast');
 */



/*****************************R E P L A C E - Z E R O S ***********************************************/
function replaceZero() {
  riddleArray.forEach((row, i) =>
    row.forEach((item, j) => {
      if (document.getElementById("" + i + j).innerHTML === "0") {
      document.getElementById("" + i + j).innerHTML = 0 //newRandomLetter();
      }
    })
  );
}


/*************************Mouse Event - C L I C K - O B S E R V E R  ******************************* */


//let testSet = new Set();

let letterArray = [];
var storedCell;
//var storedCell = letterArray.slice(-1)


$("td").on("click", function () {
  let newCell = this.id[0] + this.id[1];
 // testSet.add(this.id);
  
  
  //console.log(testSet.entries())
  if (letterArray <= 0) {
    storedCell = newCell;
    this.classList.add('boxHighlight')
    $(this).css("background-color", "#8a8a8a");
    letterArray.push(this.innerHTML); 
  } else {
    // console.log(storedCell)
    var dx = Math.abs (newCell[0] - storedCell[0]);
    var dy = Math.abs (newCell[1] - storedCell[1]);
      if ((dx <= 1) && (dy <= 1)) {          // direkte Nachbarzelle getroffen
        this.classList.add('boxHighlight')
        $(this).css("background-color", "#8a8a8a");
        letterArray.push(this.innerHTML); 
        wordCheck = letterArray.join("")
        storedCell = newCell;
        if ((wordArray.length > 2) && wordArray.includes(wordCheck)) {
           letterArray.forEach(element => $('.boxHighlight').css("background-color", "green"));
            $("td").removeClass("boxHighlight")    
         
        }

       // console.log($(".boxHighlight"))
      } else {
        $(".boxHighlight").css("background-color", "");
        $("td").removeClass("boxHighlight")
        letterArray = [];
       /*  this.classList.add('boxHighlight')
        $(this).css("background-color", "#8a8a8a");
        letterArray.push(this.innerHTML); */
        //testSet.clear();
      }  
      }
})
 
/************************T E S T - A R R A Y ************************/


/*+++++TO DO's+++
- get cell coords on event -- done for lookup
- add a wordbuildig array on screen MAYBE
- grey out words if they are found 
- mark words, in case they did not enter the riddle
- have the color events react correctly (as in remove their css properties)
- add a self-complete function?
- have words enter counter-diagonal -- done
- get cell coords on event -- done
*/
/*******************O P T I O N S - F O R - B O X - C H E C K *************** */
/*
lastclick.x = -1
lastclick.y = -1

function clicktest() => {
  aktuellclick.x = coordX
  aktuellclick.y = coordY
  if lastclick -1 then lastclick = firstclick
  firstclick = farbe, coordx, coordY
  aktuellcluck = farbe;

    prüfe mit deltaX deltaY, if lastclick = -1, -1 pattern (z.b) über differenz,
    färbe alle felder auf dem weg;

}
*/

/*+++++++++++++++++++++++H E L P F U L - F U N C T I O N S +++++++++++++++++++*/

/******** allows mousedown to react to entire length of mousedown, not just entry *** */

/* 
let mouseDown = 0;
document.onmousedown = () => {
  ++mouseDown;
  if (mouseDown) {
  }
}
document.onmouseup = () => {
  --mouseDown;
  if (mouseDown) {
  }
}

 */

/**********Working version of colorChanger on mouseDown event *********************/

/* class hiddenWords {
  constructor(rndWord, )
} */


/*
document.addEventListener('mouseover', () => {
  if (mouseDown > 0){
  $('tr > td:hover').css('background-color', 'green');} 
})

document.addEventListener('mouseover', () => {
  if (mouseDown == 0){
  $('tr > td:hover').css('background-color', '');
  } 
})
*/
