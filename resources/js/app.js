var QA = function(question, answer, wrongA1, wrongA2){
  this.question = question,
  this.answer = answer,
  this.wrongA1 = wrongA1,
  this.wrongA2 = wrongA2
}

var success = 'Well done, you selected the correct answer!';
var fail = 'Sorry, the correct answer was ';
var score = 0;


var q1 = new QA('What is the chemical formula of the water', 'H2O', 'H2NA', 'CO3');

var q2 = new QA('Does a dog bark', 'Yes', 'No', 'Not always');

var q3 = new QA('Do all cars have 4 wheels', 'Yes', 'No', 'Some have 1 wheel');

var q4 = new QA('Who is  the real Donald Trump', 'Donald Trump', 'Does not exist', 'an alien');

var q5 = new QA('Do solicitors in the UK charge for the time or difficulty spent on a case', 'time', 'difficulty', 'both are taken into consideration');

var quizArray = [q1, q2, q3, q4, q5];
console.log(quizArray);

var qEngine = function(chosenAnswer){
  var  answerArray = [];
  for(var i = 0; i < quizArray.length; i++) {
    var questionObj = quizArray[i];
    if(chosenAnswer === questionObj.answer){
      score++;
      return success;
    }
    else if(chosenAnswer === questionObj.wrongA1){
      var failMessage1 = fail + questionObj.answer + ' | You answered ' + questionObj.wrongA1;
      return failMessage1;
    } else if(chosenAnswer === questionObj.wrongA2){
      var failMessage = fail + questionObj.answer + ' | You answered ' + questionObj.wrongA2;
      return failMessage;
    }
  }
}
console.log(qEngine(q1.answer));
console.log(qEngine(q1.wrongA1));
console.log(qEngine(q1.wrongA2));
console.log('____________________________________________________________________________');
console.log(qEngine(q2.answer));
console.log(qEngine(q2.wrongA1));
console.log(qEngine(q2.wrongA2));
console.log('____________________________________________________________________________');
console.log(qEngine(q3.answer));
console.log(qEngine(q3.wrongA1));
console.log(qEngine(q3.wrongA2));
console.log('____________________________________________________________________________');
console.log(qEngine(q4.answer));
console.log(qEngine(q4.wrongA1));
console.log(qEngine(q4.wrongA2));
console.log('____________________________________________________________________________');
console.log(qEngine(q5.answer));
console.log(qEngine(q5.wrongA1));
console.log(qEngine(q5.wrongA2));
console.log(score);
