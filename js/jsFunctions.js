
var submitBtn = document.getElementById('submitBtn');
var userAnswers = [];
var answerKey = ['b', 'a', 'd', 'c', 'a', 'b'];
var testLength = 0;

submitBtn.onclick = captureAns;



function captureAns(e){

	e.preventDefault();
	var answers = document.querySelectorAll("li.answer-item input[type='radio']");  // selects all radio buttons

	for(var i = 0; i < answers.length; i++){  //checks all radio buttons for an answer
		if(answers[i].checked === true){
			answer = answers[i].value;
			console.log(typeof answer);
		}
	}

	userAnswers.push(answer); //pushes the user selected answer to an array for use in gradeTest
	testLength++;
	if(testLength == 6){
		gradeTest(userAnswers, answerKey);
	}
	console.log(userAnswers + " " + testLength);
}

function gradeTest(userAnswers, _answerKey){ // compares user answers to the answerKey
	for(var i = 0; i < userAnswers.length; i++){
		if(userAnswers[i] != _answerKey[i]){
			console.log("Incorrect");
		}else{
			console.log("Correct");
		}
	}
}

