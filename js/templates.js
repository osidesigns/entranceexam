class Question{
	constructor(_id, _question, _a, _b, _c, _d){
		this.id = _id; // index
		this.question = _question; // string
		this.answers = shuffleArray([_a, _b, _c, _d]); //randomizes the order of the answers;
	}	
}


var question1   = new Question(1, "What color is a pumpkin?", "red", "blue", "green", "orange");

var answersList = document.getElementById("answers");
var userAnswers = [];
var answerKey   = ["orange", "orange", "orange", "orange", "orange"];

function answerTemplate(_i, answer_text){
	var letters = ["a", "b", "c", "d"];
	var label = document.createElement('label');
			label.append(document.createTextNode(letters[_i].toUpperCase()))
	
	var item = document.createElement('li');
			item.className = "answer-item list-group-item";
			item.setAttribute('type', 'radio');
			item.data = answer_text;
			item.onclick = selectAnswer;
			item.append(label);
			item.append(document.createTextNode(answer_text));
    
  return item;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
	return array;
}

(function(){
	getQuestion(question1);
})()

function getQuestion(_question){
	document.querySelector("#question-text").innerText = _question.question;
	
	while(answersList.firstChild){
		answersList.removeChild(answersList.firstChild);
	}
	
	for (var i = 0; i < _question.answers.length; i++){
		answersList.append(answerTemplate(i, _question.answers[i]));
	}
}

function selectAnswer(){
	var answerItems = document.querySelectorAll(".answer-item");
	
	for (var i = 0; i < answerItems.length; i++){
		answerItems[i].classList.remove("selected");
		answerItems[i].checked = false;
	}
	this.classList.add("selected");
	this.checked = true;
	console.log("Selected " + this.data);
	
}

function pushAnswer(){
	var answers = document.querySelectorAll('.answer-item');
	var answer;
	
	for (var radio of answers){
		if (radio.checked == true){
			answer = radio.data;
		}
	}
	
	if (!answer){
		answer = null;
	}
	userAnswers.push(answer);
	console.log(userAnswers);
}

function nextQuestion(){
	pushAnswer();
	if(userAnswers.length != answerKey.length){
		getQuestion(question1);
	}else{
		gradeTest(userAnswers, answerKey);
	}
}

var submitBtn = document.getElementById('submitBtn');
submitBtn.onclick = nextQuestion;