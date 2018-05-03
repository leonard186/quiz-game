var QA = function(question, answer, wrongA1, wrongA2){
  this.question = question,
  this.answer = answer,
  this.wrongA1 = wrongA1,
  this.wrongA2 = wrongA2
}

var q1 = new QA('What is the chemical formula of the water?', 'H2O', 'H2NA', 'CO3');

var q2 = new QA('Does a dog bark?', 'Yes', 'No', 'Not always');

var q3 = new QA('Do all cars have 4 wheels?', 'Yes', 'No', 'Some have 1 wheel');

var q4 = new QA('Who is  the real Donald Trump?', 'Donald Trump', 'Does not exist', 'an alien');

var q5 = new QA('Do solicitors in the UK charge for the time or the difficulty spent on a case?', 'time', 'difficulty', 'both are taken into consideration');


//global variables
var quizArray = [q1, q2, q3, q4, q5];
var randomOrder = [];
var counter = 0;
var randomA = Math.floor(Math.random() * 3 + 1);
var wrongAnswers = [];
var option1, option2, option3;
var score = 0;


//shuffles any array and returns a new shuffled array
var shuffle = function(array, emptyArray) {
  var j, x, i;
    for (i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = array[i];
        array[i] = array[j];
        array[j] = x;
    }
    emptyArray.push(array[0]);
    emptyArray.push(array[1]);
};

//random number generator between 1 and 3
function otherOptions() {
  var potentialNumbers = [1,2,3];
  for(var i = 0; i < potentialNumbers.length; i++){
    if(potentialNumbers[i] !== randomA){
      wrongAnswers.push(potentialNumbers[i]);
    }
  }
};

//reloads the quiz
var reload = function(){
  location = location;
}

//renders final score
function renderFinalScore(){
  document.getElementById('answers').innerHTML = score;
}

function printScore(){
  document.getElementById('console').insertAdjacentHTML("afterbegin", 'the score is: ' + score + '<br/>');
}

//game initialization function
function init(){

  var wrongAnswersShuffled = [];
  var randomQ =  Math.floor(Math.random() * quizArray.length);
  var wrongAnswerRandomizer = Math.floor(Math.random() * 2 + 1);

  shuffle([1,2], wrongAnswersShuffled);
  var renderQuiz = function() {
      var randomAnswerArray = [quizArray[counter].answer, quizArray[counter].wrongA1, quizArray[counter].wrongA2];
        document.getElementById('summary').textContent = quizArray[counter].question;
        option1 = document.getElementById('a-' + randomA).textContent = randomAnswerArray[0];
        option2 = document.getElementById('a-' + wrongAnswers[0]).textContent = randomAnswerArray[wrongAnswersShuffled[0]];
        option3 = document.getElementById('a-' + wrongAnswers[1]).textContent = randomAnswerArray[wrongAnswersShuffled[1]];
      };
    otherOptions();
    renderQuiz();

};

init();

///////////////validates the answers
var checkAnswers = function () {
  var consolePrint = document.getElementById('console')
  var success = 'You selected the correct answer: \' ' + option1 + ' \'<br/>';
  var fail1 = '\'' + option2 + '\'  is NOT the correct answer<br/>';
  var fail2 = '\'' + option3 + '\'  is NOT the correct answer<br/>';

  document.getElementById('a-' + randomA).addEventListener('click', function() {
    score++;

    consolePrint.insertAdjacentHTML("afterbegin", success);
    init();
    counter++;
    printScore()


  })
  document.getElementById('a-' + wrongAnswers[0]).addEventListener('click', function() {
    consolePrint.insertAdjacentHTML("afterbegin", fail1);
    init();
    counter++;
    printScore();

  })
  document.getElementById('a-' + wrongAnswers[1]).addEventListener('click', function() {
    consolePrint.insertAdjacentHTML("afterbegin", fail2);
    init();
    counter++;
    printScore();

  })
}


if(counter => 0 && counter <= quizArray.length) {
  init();
  checkAnswers();
  document.getElementById('forward').addEventListener('click', function(){
    counter++;
    printScore();
    init();
  });
  document.getElementById('back').addEventListener('click', function() {
    counter--;
    printScore();
    init();
  });
} else if(counter > quizArray.length){
  renderFinalScore()
}
