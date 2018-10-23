
var submitBtn = document.getElementById('submitBtn');
var userAnswers = [];
var testLength = 0;

submitBtn.onclick = captureAns;



function captureAns(e){

	e.preventDefault();
	var answers = document.querySelectorAll("input[type='radio']");

	for(var i = 0; i < answers.length; i++){
		if(answers[i].checked === true){
			answer = answers[i].value;
		}
	}

	userAnswers.push(answer);
	testLength++;
	if(testLength == 6){
		gradeTest(userAnswers);
	}
	console.log(userAnswers + " " + testLength);
}

function gradeTest(userAnswers){
	var answerKey = ['b', 'a', 'd', 'c', 'a', 'b'];
	for(var i = 0; i < userAnswers.length; i++){
		if(userAnswers[i] != answerKey[i]){
			console.log("Incorrect <br />");
		}else{
			console.log("Correct <br />");
		}
	}
}
