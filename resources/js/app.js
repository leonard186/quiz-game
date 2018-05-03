var QA = function(question, answer1, answer2, answer3){
  this.question = question,
  this.answer1 = answer1,
  this.answer2 = answer2,
  this.answer3 = answer3
};

var astronomyQuiz = [
  new QA('How big is the Sun?', 'It has a diameter of nearly 1.4 million kilometers', 'Its volume could enclose about 6 million Earths', 'The sun has a mass of more then 100 000 Megatonnes'),
  new QA('What is the solar wind?', 'The super-hot corona is the source of the solar wind', 'Radiation emanating from the Sun', 'Dust particles that never reach the Earth'),
  new QA('How Many Planets Are In Our Solar System?', '8', '7', '9'),
  new QA('Will all eight planets ever line up on the same side of the Sun?', 'Every 396 billion years', 'Never', 'Every 1 trillion years'),
  new QA('How much space debris falls into Earth\'s atmosphere every year?', 'Roughly 40,000 metric tons', 'Roughly 300,000 metric tons', 'Impossible to estimate'),
  new QA('If the near-Earth asteroid 99942 Apophis ever strikes Earth, how big would the crater be?', 'About 2 km across and about 0.5 km deep', 'About 5 km across and about 1 km deep', '10km across'),
  new QA('Where was the Big Bang located?', 'Here and everywhere', 'Milky Way Galaxy', 'Andromeda Galaxy'),
  new QA('What is the age of the universe?', '13.77 billion years', '60.21 billion years', '5.9 billion years'),
  new QA('How many stars are in the Milky Way?', 'Nobody knows', '20 billion', 'just under 600 billion'),
  new QA('Is it true that Andromeda Galaxy is moving toward us?', 'Yes, with 300 km/second', 'No, it distances itself', 'Yes, but it will go past us')
];


var geographyQuiz = [
  new QA('What is the capital city of Zimbabwe?', 'Harare', 'Lilongwe', 'Bulawayo'),
  new QA('Does the Republic of the Congo have rainforests?', 'Yes', 'It has been chopped off', 'No, only deserts'),
  new QA('Where are the Pyrénées Mountains?', 'Between France and Spain', 'Between Germany and Austria', 'Chile'),
  new QA('To which country does Corsica belong to?', 'France', 'Italy', 'It is an independent state'),
  new QA('Wich is true about Suriname?', 'It used to be a Dutch colony', 'It is still a spanish colony', 'It\'s still under French occupation'),
  new QA('Where is Vladivostok?', 'Eastern side of Russia', 'The Baltics', 'On the Black sea coast'),
  new QA('Myanmar is not a neighbouring country with ... ', 'Vietnam', 'Thailand', 'China'),
  new QA('Does Papua New Guinea still have active volcanoes?', 'Yes', 'No', 'There are no volcanoes at all there'),
  new QA('Tasmania is an ...?', 'Isolated island state', 'A major city of Australia', 'Part of New Zealand'),
  new QA('What is the capital of Hawaii', 'Honolulu', 'Kualapuʻu', 'Maui')
];

var mathQuiz = [
  new QA('8 - 5 = ...', '3', '2', '4'),
  new QA('2586 - 24785 = ...', '-22.199', '-22.219', '22.220'),
  new QA('4785 * 35 = ...', '167.475', '167.477', '167.456'),
  new QA('369 / 66 = ...', '5.59', '6.2', '3.4'),
  new QA('751 + 333 = ...', '1084', '1064', '1066'),
  new QA('(2020 - 1986) * 3= ...', '102', '99', '74'),
  new QA('952 / 99999 = ...', '0.0095', '0.0230', '0.000012'),
  new QA('(258 + 357) * 2 = ...', '1230', '1320', '1420'),
  new QA('(66 * 33) / 22 = ...', '99', '101', '97'),
  new QA('(328 * 3) / 2 = ...', '492', '491', '493')
];

//global variables
var quizArray = [];
var randomOptions = [[1,2,3], [3,2,1], [2,1,3], [2,3,1], [1,3,2], [3,1,2]]
var counter = 0;
var score = 0;
var random =  Math.floor(Math.random() * randomOptions.length);

id('quiz1').addEventListener('click', function(){
setArray(astronomyQuiz);
});

id('quiz2').addEventListener('click', function(){
setArray(geographyQuiz);
});

id('quiz3').addEventListener('click', function(){
setArray(mathQuiz);
});


function setArray(array){
  for(var i = 0; i < array.length; i++){
    quizArray.push(array[i]);
  };
  if(counter > 0){
    location = location;
  }
  id('forward').classList.remove('hide');
  renderQuiz();
}

function id(x) {
  return document.getElementById(x);
};

function wrongAnswer() {
  id('console').insertAdjacentHTML('afterbegin', 'sorry wrong answer. The score is still ' + score + '<hr/>');
    counter++;
  renderQuiz();
};

function renderQuiz(){
  if(counter >= quizArray.length) {
    id('summary').textContent = 'Congratulations, you finished the quiz!';
    id('answers').textContent = 'Your final Score is ' + score + ' out of ' + quizArray.length;
    id('forward').classList.add('hide');
    id('back').classList.add('hide');
    return false;
  };

  counter < 1 ? id('back').classList.add('hide') : id('back').classList.remove('hide');

  var renderQuizArray = [quizArray[counter].question, quizArray[counter].answer1, quizArray[counter].answer2, quizArray[counter].answer3, quizArray[counter].correct];

  id('summary').textContent = renderQuizArray[0];
  id('a-' + randomOptions[random][0]).textContent = renderQuizArray[1];
  id('a-' + randomOptions[random][1]).textContent = renderQuizArray[2];
  id('a-' + randomOptions[random][2]).textContent = renderQuizArray[3];
};

id('a-' + randomOptions[random][0]).addEventListener('click', function() {
  counter++;
  score++;
  id('console').insertAdjacentHTML("afterbegin", 'well done. Current score is: ' + score + ' and the counter is  ' + counter + ' out of ' + quizArray.length + '<hr/>');
  renderQuiz();
});

id('a-' + randomOptions[random][1]).addEventListener('click', wrongAnswer);

id('a-' + randomOptions[random][2]).addEventListener('click', wrongAnswer);

id('back').addEventListener('click', function() {
  counter--;
  score--;
    id('console').insertAdjacentHTML("afterbegin", 'score is ' + score + '. counter is: ' + counter + '<br/>');
  renderQuiz();
});

id('forward').addEventListener('click', function() {
  counter++;
    id('console').insertAdjacentHTML("afterbegin", 'score is ' + score + '. counter is: ' + counter + '<br/>');
  renderQuiz();
});

id('reset').addEventListener('click', function() {
  location = location;
});




//window.addEventListener("load", renderQuiz, false);
