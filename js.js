

//the target word that the user needs to guess
var filteredWords;

var selectWord;
var lettermatch;
var position;
//tracks the number of turns remaining
var turns = 8;

var hangmanWords = filterArray([ "the","of","and","a","to","in","is","you","that","it","he","was","for","on","are","as","with","his","they","I","at","be","this","have","from","or","one","had","by","word","but","not","what","all","were","we","when","your","can","said","there","use","an","each","which","she","do","how","their","if","will","up","other","about","out","many","then","them","these","so","some","her","would","make","like","him","into","time","has","look","two","more","write","go","see","number","no","way","could","people","my","than","first","water","been","call","who","oil","its","now","find","long","down","day","did","get","come","made","may","part"]);

// init();

//Function to sort through words for length

function filterArray(arr) {
  filteredWords = [];
for (var i = 0; i < arr.length; i++) {
  var word = arr[i];
    if (word.length > 2) {
    filteredWords.push(word);
    }
  }

  return filteredWords[wordIndex].toLowerCase();
  console.log filteredWords;
//  return biggishWords[wordIndex].toLowerCase();
}

console.log (filterArray(hangmanWords));

//Function to get random words

function randomWord(filteredWords) {
  selectWord = filteredWords[(Math.floor(Math.random() * filteredWords.length))];
   return selectWord;
}

console.log (randomWord(filteredWords));
console.log (selectWord);
console.log (selectWord.length);

var wordLength = selectWord.length;

console.log (wordLength);

//function to split words up
var splitArray = selectWord.split("");
console.log (splitArray);

var blank = [];

function createDash(arr) {
  for (i = 0; i < arr.length; i++) {
   blank.push("_");
  }
}

(createDash(splitArray));
console.log (blank);

var frm = document.querySelector('button.click');
frm.addEventListener('click', function() {
  document.querySelector('.wordbox').textContent = blank;
});

var btn = document.querySelector('.enter');

btn.addEventListener('click', function (e) {
  e.stopPropagation();
  e.preventDefault();
  search();
});

var extraletterbox = [];


function search() {
  var txt = document.querySelector('.tryletter input').value;
   for (var i = 0; i < splitArray.length; ++i) {

     if (splitArray[i] === txt) {
       position = splitArray.indexOf(txt);
       console.log (position);
       var replace = blank.splice (position, 1, txt);
       document.querySelector('.wordbox').innerHTML =          blank;
     } else {
    }
   }
  if (splitArray[i] !== txt) {
  extraletterbox.push(txt);
  console.log (extraletterbox);
  }
  document.querySelector('.extraletter').innerHTML = extraletterbox.join (",");
  }



// CHRIS"S CODE
// //init();
//  function init(){
//    shows words
//    show turns reremiaing
//    set guess input
//    handle user input
//
//  }
//
//  function isgamewon {
//    return underscoredWrod.indexOf();
//  }

// END OF CHRIS"S CODE
// function redrawTodos() {
//   var list = document.querySelector('.todo-list');

//   list.innerHTML = todos.map(function (todo, i) {
//     return '<li class="todo-item">' +
//       escape(todo) +
//       '<button type="button" class="remove" data-index="' + i + '">X</button>'+
//       '</li>';
//   }).join('');
// }


// function search() {
//   var txt = document.querySelector('.tryletter').value;
//     for (var i = 0; i < splitArray.length; ++i);

//     if (splitArray[i] === txt) {
//     console.log ("yes");
//     } else {
//     console.log ("no");
//   }
// }

// search ()

// document.querySelector('click').addEventListener('click', function () {
//   console.log ("form");
// });



// btn.addEventListener('enter', function () {
//   alert('Hi, ' + txt.value);
// });
