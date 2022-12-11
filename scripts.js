//********************************************G L O B A L - C O N S T A N T S*************************************** */
const wordSubmitButton = document.getElementById("word-submit-button");
const wordInputField = document.getElementById("word-input-field");
const orderedWordList = document.getElementById("ordered-List");
const riddleSolver = document.getElementById("solveRiddle");
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
  if (
    wordInputField.value.length > 2 &&
    wordInputField.value.length < 11 &&
    /[^a-zA-Z]+/g.test(wordInputField.value) === false &&
    wordArray.includes(wordInputField.value) === false  
  ) {
    let newAddList = document.createElement("li");
    newAddList.classList.add("listedItems");
    newAddList.setAttribute("id", wordInputField.value.toLowerCase());
    newAddList.textContent = wordInputField.value.toLowerCase();
    orderedWordList.appendChild(newAddList);
    wordArray.push(newAddList.textContent);
    // console.log(wordArray);
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
      document.getElementById("" + i + j).innerHTML = 0;
    })
  );
}
//*************************************C L E A R - L I S T******************F U N C T I O N************* */
function deleteList() {
  wordArray.length = 0;
  orderedWordList.replaceChildren();
}

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
  $("td").css("background-color", ""),
  $("td").removeClass("solved")
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
var testRun = 0;
  
 
function wordPlacement() {
 // if (testRun <= 4) {
 console.log(parseInt(testRun++));
 // for( let i = 0; i < 200; i++) {
  
  row = Math.floor(Math.random() * 10);
  col = Math.floor(Math.random() * 10);
  cell = document.getElementById("" + row + col);
  switchRandomizer = Math.floor(Math.random() * 8) + 1;
  
  
  
  if (switchRandomizer > 4) {
    rndWord = reverseString(rndWord);
  }

  switch (switchRandomizer) {
    // ----- R O W S ------
    case 1:
      if (
        row + rndWord.length <= riddleArray.length &&
        testWord(cell, row, col, switchRandomizer) === true
      ) {
        for (let k = 0; k < rndWord.length; k++) {
          const cell = document.getElementById("" + row++ + col);
          cell.innerHTML = "";
          cell.innerHTML += rndWord[0 + k];
          savedLetterArray.push(cell.id)
         
        }
      } else {
        wordPlacement();
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
          savedLetterArray.push(cell.id)
        }
      } else {
        wordPlacement();
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
          savedLetterArray.push(cell.id)
        }
      } else {
        wordPlacement();
      }
      break;
    // ----- D I A G O N A L - TopRight to BottomLeft------
    case 4:
      if (
        //rndWord.length <= row && rndWord.length >= col &&
        row + rndWord.length <= riddleArray.length &&
        col - rndWord.length >= 0 &&
        testWord(cell, row, col, switchRandomizer) == true
      ) {
        for (let k = 0; k < rndWord.length; k++) {
          const cell = document.getElementById("" + row++ + col--);
          cell.innerHTML = "";
          cell.innerHTML += rndWord[0 + k];
          savedLetterArray.push(cell.id)
        }
      } else {
        wordPlacement();
      }
      break;
    // ------ R O W S - R E V E R S E ---------
    case 5:
      if (
        row + rndWord.length <= riddleArray.length &&
        testWord(cell, row, col, switchRandomizer) == true
      ) {
        //rndWord = reverseString(rndWord);
        for (let k = 0; k < rndWord.length; k++) {
          const cell = document.getElementById("" + row++ + col);
          cell.innerHTML = "";
          cell.innerHTML += rndWord[0 + k];
          savedLetterArray.push(cell.id)
        }
      } else {
        wordPlacement();
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
          savedLetterArray.push(cell.id)
        }
      } else {
        wordPlacement();
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
          savedLetterArray.push(cell.id)
        }
      } else {
        wordPlacement();
      }
      break;

    // ----- D I A G O N A L - R E V E R S E TopRight to BottomLeft------
    case 8:
      if (
        rndWord.length <= row &&
        rndWord.length >= col &&
        row + rndWord.length <= riddleArray.length &&
        col - rndWord.length >= 0 &&
        testWord(cell, row, col, switchRandomizer) == true
      ) {
        //   rndWord = reverseString(rndWord);
        for (let k = 0; k < rndWord.length; k++) {
          const cell = document.getElementById("" + row++ + col--);
          cell.innerHTML = "";
          cell.innerHTML += rndWord[0 + k];
          savedLetterArray.push(cell.id)
        }
      } else {
        wordPlacement();
      }
      break;

    default:
      break;
    

  }
} //else {
 // window.alert("you can solve up to" + rndWord)
  //return;
//}
//}
/**************************W O R D - M A T C H - C H E C K E R***************** */
function testWord(bool, row2, col2, switchRandomizer2) {
  var cell = bool;
  var row = row2;
  var col = col2;
  var switchRandomizer = switchRandomizer2;

  switch (switchRandomizer2) {
    case 1:
    case 5:
      for (let k = 0; k < rndWord.length; k++) {
        cell = "" + (row + k) + col;
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

    case 2:
    case 6:
      for (let k = 0; k < rndWord.length; k++) {
        cell = "" + row + (col + k);
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

    case 3:
    case 7:
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

    case 4:
    case 8:
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
var wordCheck = "";

function drawRiddle() {
 // resets all stored css properties for all items as well as the dependant arrays 
  savedLetterArray = [];
  testRun = 0;
  $("td").css("background-color", "");                                             
  $("td").removeClass("boxHighlight");
  $("td").removeClass("solved");
  $(".listedItems").css({                                                      
    "text-decoration": "",
    "color": "",
  });
  wordCheck = ""

 
  addLetters();
  
  for (let x = 0; x < wordArray.length ; x++) {
    if (testRun <= 100) {
    rndWord = wordArray[x];
    $("#" + wordArray[x]).addClass("inRiddle")
    rndWord = rndWord.split("");
    wordPlacement();
    } else {
      replaceZero();
      [x] = [x - 1];
      return window.alert("Not all words fit in the riddle. \n\nYou can find words up to " + wordArray[x].toUpperCase() + " / " + reverseString(wordArray[x]).toUpperCase())
    }
  }
  replaceZero();
  
}

/*****************************R E P L A C E - Z E R O S ***********************************************/
function replaceZero() {
  riddleArray.forEach((row, i) =>
    row.forEach((item, j) => {
      if (document.getElementById("" + i + j).innerHTML === "0") {
        document.getElementById("" + i + j).innerHTML = newRandomLetter();
      }
    })
  );
}

/*************************Mouse Event - C L I C K - O B S E R V E R  ******************************* */

var compareArray = [];
var savedLetterArray = [];
var letterArray = [];
var startCell, newCell, storedCell;
var x1, y1, x2, y2; 
var distance

$("td").on("click", function () {
  newCell = this.id[0] + this.id[1];
  distance = letterArray.length
  
  //console.log(savedLetterArray)
  if (compareArray.includes(newCell) === false) {                                  //the initial-click on the riddle field when starting anew
  if (letterArray.length === 0) {
  
    compareArray.push(newCell);
    storedCell = newCell;
    this.classList.add("boxHighlight");
    $(this).css("background-color", "#8a8a8a");
    letterArray.push(this.innerHTML);
    startCell = this.id[0] + this.id[1];
    x1 = parseInt(this.id[0]);
    y1 = parseInt(this.id[1]); 
    //console.log(compareArray)
    //console.log({x1, y1})
  } else {
    dx = Math.abs(newCell[0] - storedCell[0]);
    dy = Math.abs(newCell[1] - storedCell[1]);
    if (dx <= 1 && dy <= 1) { 
      x2 = parseInt(this.id[0]);
      y2 = parseInt(this.id[1]);
      if(calcOrientation(x1, y1, x2, y2) !== null) {                                                          // hit direct neighbour
      compareArray.push(newCell);
      this.classList.add("boxHighlight");                
      $(this).css("background-color", "#8a8a8a");
      letterArray.push(this.innerHTML);
      wordCheck = letterArray.join("");
      storedCell = newCell;   
      if (wordArray.includes(wordCheck)) {                                            // if correct word, applies color to td             
        letterArray.forEach((element) =>
        $(".boxHighlight").removeClass("boxHighlight").addClass("solved"),
        $(".boxHighlight").css("background-color", "green")
        );
        $("#" + wordCheck).css({                                                      // adds crossing out and grey to word in list 
          "text-decoration": "line-through",
          "color": "#8a8a8a",
        });
        letterArray = [];
        compareArray = [];
      }
    } 
  }
    else {
      $(".boxHighlight").css("background-color", "");                                // the "reset"-click, if the move was not valid,
      $("td").removeClass("boxHighlight");                                           // sets this as the new startmove
      letterArray = [];
      compareArray = [];
      compareArray.push(newCell);
      storedCell = newCell;
      this.classList.add("boxHighlight");
      $(this).css("background-color", "#8a8a8a");
      letterArray.push(this.innerHTML);
      startCell = this.id[0] + this.id[1];
      x1 = parseInt(this.id[0]);
      y1 = parseInt(this.id[1]); 
      
    }
  }
}
});






/*************** M A R K - W O R D - A S - C O M P L E T E ***********/

/** direction array for better handling and access **/
var allDirections = ['horizontal','horizontalBack','vertical','verticalUp',
'diagonal','diagonalUp','diagonalBack','diagonalUpBack'];

// The definition of the orientation, calculates the next square given a
// starting square (x,y) and distance (distance) from that square.
var directions = {
  horizontal:     function(x,y) { return {x: x+distance, y: y  }; },           //( "" + (x+1) + y )
  horizontalBack: function(x,y) { return {x: x-distance, y: y  }; },              // x= x-1, y= y;
  vertical:       function(x,y) { return {x: x,          y: y+distance}; },
  verticalUp:     function(x,y) { return {x: x,          y: y-distance}; },
  diagonal:       function(x,y) { return {x: x+distance, y: y+distance}; },
  diagonalBack:   function(x,y) { return {x: x-distance, y: y+distance}; },
  diagonalUp:     function(x,y) { return {x: x+distance, y: y-distance}; },
  diagonalUpBack: function(x,y) { return {x: x-distance, y: y-distance}; }
  };

  // compares startPosition and currentPosition; blocks illegal moves
  var calcOrientation = function (x1, y1, x2, y2) {
    for (var allDirections in directions) {
      var nextFn = directions[allDirections];
      var nextPos = nextFn(x1, y1, 1);

      if (nextPos.x === x2 && nextPos.y === y2) {
        return allDirections;
      }
    }

    return null;
  };

/****** S E L F - S O L V E R ******/

  riddleSolver.addEventListener("click", () => {
    for (var i = 0; i < savedLetterArray.length; i++) { 
    document.getElementById(savedLetterArray[i]).style.backgroundColor = "green";
    }
    $(".inRiddle").css({                                                      // adds crossing out and grey to word in list 
      "text-decoration": "line-through",
      "color": "#8a8a8a",
    });
  });
    
      


/************************T E S T - A R R A Y ************************/

/*+++++TO DO's+++
- add a wordbuilding array on screen MAYBE
- mark words, in case they did not enter the riddle

- add a self-complete function? -- done
- have words enter counter-diagonal -- done
- get cell coords on event -- done
- grey out words if they are found -- done
- have the color events react correctly (as in remove their css properties) -- done
- add directional intelligence -- done
*/

