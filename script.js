var number = 0
var counter = 0;
var min_numb = 0;
var max_numb = 100;

document.getElementById('clear_button').disabled = true;
document.getElementById('clear_button').style.backgroundColor = '#D0D2D3'
document.getElementById('reset_button').disabled = true;
document.getElementById('reset_button').style.backgroundColor = '#D0D2D3'

document.getElementById('range_button').onclick = function(){
  min_numb = document.getElementById('min_number').value;
  max_numb = document.getElementById('max_number').value;

  min_numb = parseInt(min_numb)
  max_numb = parseInt(max_numb)

  number = Math.floor(Math.random() * (max_numb - min_numb) + min_numb);

  if (min_numb > max_numb) {
    document.getElementById('answer-1').innerHTML = 'The Minimum Value Is';
    document.getElementById('answer-2').innerHTML = 'Higher Than The Maximum';
    document.getElementById('answer-3').innerHTML = 'Please Input New Values';
    document.getElementById('answer-4').innerHTML = 'For Minimum and Maximum';
  } else if (isNaN(min_numb) || isNaN(max_numb)){
    document.getElementById('answer-1').innerHTML = 'One Of The Values You Have';
    document.getElementById('answer-2').innerHTML = 'Entered Was Not A Number.';
    document.getElementById('answer-3').innerHTML = 'Please Enter New Minimum';
    document.getElementById('answer-4').innerHTML = 'And Maximum Values';
  } else {
    document.getElementById('answer-1').innerHTML = 'Try To Guess The Number';
    document.getElementById('answer-2').innerHTML = '';
    document.getElementById('answer-3').innerHTML = '';
    document.getElementById('answer-4').innerHTML = '';
    document.getElementById('min_max').style.display = "none"
    document.getElementById('reset_button').disabled = false;
    document.getElementById('reset_button').style.backgroundColor = '#929497'
  }
};

document.getElementById('number_field').onkeyup = function(){
  if (document.getElementById('number_field').value.length == 0) {
    document.getElementById('clear_button').disabled = true;
    document.getElementById('clear_button').style.backgroundColor = '#D0D2D3'
  } else {
    document.getElementById('clear_button').disabled = false;
    document.getElementById('clear_button').style.backgroundColor = '#929497';
  }
};

document.getElementById('clear_number').onclick = function(){
  document.getElementById('number_field').value = ''
  document.getElementById('clear_button').disabled = true;
  document.getElementById('clear_button').style.backgroundColor = '#D0D2D3'
};

document.getElementById('guess_number').onclick = function(){
  document.getElementById('clear_button').disabled = true;
  document.getElementById('clear_button').style.backgroundColor = '#D0D2D3';
  counter++;

  var guess = document.getElementById('number_field').value;

  var guessedNumber = parseInt(guess);

  if (isNaN(guessedNumber)) {
    document.getElementById('answer-1').innerHTML = 'That Is Not A Number'
    document.getElementById('answer-num').innerHTML = ''
    document.getElementById('answer-2').innerHTML = ''
    document.getElementById('answer-3').innerHTML = ''
    document.getElementById('answer-4').innerHTML = ''
  }
  else if (guessedNumber > max_numb) {
    document.getElementById('answer-1').innerHTML = 'You Last Guess Was'
    document.getElementById('answer-2').innerHTML = ''
    document.getElementById('answer-num').innerHTML = `${guessedNumber}`
    document.getElementById('answer-3').innerHTML = 'Which Is Higher than the Possible Maximum Value'
    document.getElementById('answer-4').innerHTML = ''
  }
  else if (guessedNumber < min_numb) {
    document.getElementById('answer-1').innerHTML = 'You Last Guess Was'
    document.getElementById('answer-2').innerHTML = ''
    document.getElementById('answer-num').innerHTML = `${guessedNumber}`
    document.getElementById('answer-3').innerHTML = 'Which Is Lower than the Possible Maximum Value'
    document.getElementById('answer-4').innerHTML = ''
  }
  else if (guessedNumber > number) {
    document.getElementById('answer-1').innerHTML = 'You Last Guess Was'
    document.getElementById('answer-2').innerHTML = ''
    document.getElementById('answer-num').innerHTML = `${guessedNumber}`
    document.getElementById('answer-3').innerHTML = 'Which is too High'
    document.getElementById('answer-4').innerHTML = ''
  }
  else if (guessedNumber < number) {
    document.getElementById('answer-1').innerHTML = 'You Last Guess Was'
    document.getElementById('answer-2').innerHTML = ''
    document.getElementById('answer-num').innerHTML = `${guessedNumber}`
    document.getElementById('answer-3').innerHTML = 'Which is too low'
    document.getElementById('answer-4').innerHTML = ''
  }
  else {
    document.getElementById('answer-1').innerHTML = 'BOOM!'
    document.getElementById('answer-num').innerHTML = `${guessedNumber}`
    document.getElementById('answer-2').innerHTML = `You Got The Answer in ${counter} Guesses`
    document.getElementById('answer-3').innerHTML = 'A New Possible Answer is Waiting to be Discovered'
    document.getElementById('answer-4').innerHTML = 'The Max Has Been Increased By Ten And The Min has been decreased by Ten'
    max_numb = max_numb + 10
    min_numb = min_numb - 10
    number = Math.floor(Math.random() * (max_numb - min_numb) + min_numb);
    counter = 0
  }
  document.getElementById('number_field').value = ''
};

document.getElementById('reset_button').onclick = function(){
  counter = 0;
  document.getElementById('reset_button').disabled = true;
  document.getElementById('reset_button').style.backgroundColor = '#D0D2D3'
  document.getElementById('answer-1').innerHTML = 'The Game Has Been Reset';
  document.getElementById('answer-num').innerHTML = '';
  document.getElementById('answer-2').innerHTML = 'The Maximum Possible Answer';
  document.getElementById('answer-3').innerHTML = 'Has Been Reset To Ten';
  document.getElementById('answer-4').innerHTML = ''
  document.getElementById('min_max').style.display = "block";
};
