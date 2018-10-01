var number = 0
var counter = 0;
var min_numb = 0;
var max_numb = 100;
var clear_button = document.getElementById('clear_button');
var reset_button = document.getElementById('reset_button');
var range_button = document.getElementById('range_button');
var minMax = document.getElementById('min_max');
var numberField = document.getElementById('number_field');
var guessNumber = document.getElementById('guess_number');

var answerLineOne = document.getElementById('answer-1');
var answerLineTwo = document.getElementById('answer-2');
var answerLineNum = document.getElementById('answer-num');
var answerLineThree = document.getElementById('answer-3');
var answerLineFour = document.getElementById('answer-4');

function getUserRange() {
  min_numb = document.getElementById('min_number').value;
  max_numb = document.getElementById('max_number').value;

  min_numb = parseInt(min_numb)
  max_numb = parseInt(max_numb)

  number = Math.floor(Math.random() * (max_numb - min_numb) + min_numb);

  if (min_numb > max_numb) {
    answerLineOne.innerHTML = 'The Minimum Value Is';
    answerLineTwo.innerHTML = 'Higher Than The Maximum';
    answerLineThree.innerHTML = 'Please Input New Values';
    answerLineFour.innerHTML = 'For Minimum and Maximum';
  } else if (isNaN(min_numb) || isNaN(max_numb)){
    answerLineOne.innerHTML = 'One Of The Values You Have';
    answerLineTwo.innerHTML = 'Entered Was Not A Number.';
    answerLineThree.innerHTML = 'Please Enter New Minimum';
    answerLineFour.innerHTML = 'And Maximum Values';
  } else {
    answerLineOne.innerHTML = 'Try To Guess The Number';
    answerLineTwo.innerHTML = '';
    answerLineThree.innerHTML = '';
    answerLineFour.innerHTML = '';
    minMax.style.display = "none"
    reset_button.disabled = false;
    reset_button.style.backgroundColor = '#929497'
  }
};

function enableClearButton() {
  if (numberField.value.length == 0) {
    clear_button.disabled = true;
    clear_button.style.backgroundColor = '#D0D2D3'
  } else {
    clear_button.disabled = false;
    clear_button.style.backgroundColor = '#929497';
  }
};

function clearNumber() {
  numberField.value = ''
  clear_button.disabled = true;
  clear_button.style.backgroundColor = '#D0D2D3'
};

function guessGamePlay() {
  clear_button.disabled = true;
  clear_button.style.backgroundColor = '#D0D2D3';
  counter++;

  var guess = numberField.value;

  var guessedNumber = parseInt(guess);

  if (isNaN(guessedNumber)) {
    answerLineOne.innerHTML = 'That Is Not A Number'
    answerLineNum.innerHTML = ''
    answerLineTwo.innerHTML = ''
    answerLineThree.innerHTML = ''
    answerLineFour.innerHTML = ''
  }
  else if (guessedNumber > max_numb) {
    answerLineOne.innerHTML = 'You Last Guess Was'
    answerLineTwo.innerHTML = ''
    answerLineNum.innerHTML = `${guessedNumber}`
    answerLineThree.innerHTML = 'Which Is Higher than the Possible Maximum Value'
    answerLineFour.innerHTML = ''
  }
  else if (guessedNumber < min_numb) {
    answerLineOne.innerHTML = 'You Last Guess Was'
    answerLineTwo.innerHTML = ''
    answerLineNum.innerHTML = `${guessedNumber}`
    answerLineThree.innerHTML = 'Which Is Lower than the Possible Maximum Value'
    answerLineFour.innerHTML = ''
  }
  else if (guessedNumber > number) {
    answerLineOne.innerHTML = 'You Last Guess Was'
    answerLineTwo.innerHTML = ''
    answerLineNum.innerHTML = `${guessedNumber}`
    answerLineThree.innerHTML = 'Which is too High'
    answerLineFour.innerHTML = ''
  }
  else if (guessedNumber < number) {
    answerLineOne.innerHTML = 'You Last Guess Was'
    answerLineTwo.innerHTML = ''
    answerLineNum.innerHTML = `${guessedNumber}`
    answerLineThree.innerHTML = 'Which is too low'
    answerLineFour.innerHTML = ''
  }
  else {
    answerLineOne.innerHTML = 'BOOM!'
    answerLineNum.innerHTML = `${guessedNumber}`
    answerLineTwo.innerHTML = `You Got The Answer in ${counter} Guesses`
    answerLineThree.innerHTML = 'A New Possible Answer is Waiting to be Discovered'
    answerLineFour.innerHTML = 'The Max Has Been Increased By Ten And The Min has been decreased by Ten'
    max_numb = max_numb + 10
    min_numb = min_numb - 10
    number = Math.floor(Math.random() * (max_numb - min_numb) + min_numb);
    counter = 0
  }
  numberField.value = ''
};

function resetGame() {
  counter = 0;
  reset_button.disabled = true;
  reset_button.style.backgroundColor = '#D0D2D3'
  answerLineOne.innerHTML = 'The Game Has Been Reset';
  answerLineNum.innerHTML = '';
  answerLineTwo.innerHTML = 'The Maximum Possible Answer';
  answerLineThree.innerHTML = 'Has Been Reset To Ten';
  answerLineFour.innerHTML = ''
  minMax.style.display = "block";
};

clear_button.disabled = true;
clear_button.style.backgroundColor = '#D0D2D3'

reset_button.disabled = true;
reset_button.style.backgroundColor = '#D0D2D3'

range_button.onclick = function(){getUserRange()}

numberField.onkeyup = function(){enableClearButton()};

clear_button.onclick = function(){clearNumber()};

guessNumber.onclick = function(){guessGamePlay()};

reset_button.onclick = function(){resetGame()};
