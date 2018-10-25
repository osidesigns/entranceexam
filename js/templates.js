let sample = [
    { question : "what is love?" },
    { question : "Baby don't hurt me!" },
    { question : "Don't hurt me!" },
    { question : "No more!" },
    { question : "Buh duh duh da duh!" }
]

document.getElementById('testButton').onclick = () => nextQuestion();

function nextQuestion(){
    clearAnswers();
    for (let i = 0; i < sample.length; i++){
        document.getElementById('answers').append(answerTemplate(i, sample[i].question))
    }  
}

// HTML templates
function answerTemplate(_i, question_text){
    let letters = ["a", "b", "c", "d", "e", "f", "g"];

    let item = document.createElement('li');
    item.className = "answer-item list-group-item";

    let radio = document.createElement('input');
    radio.setAttribute('type', 'radio');
    radio.setAttribute('name', 'answer');
    radio.className = 'answer';
    radio.value = letters[_i];

    let label = document.createElement('label');
    label.setAttribute('for', letters[_i]);
    label.innerText = letters[_i].toUpperCase();

    let text = document.createTextNode(question_text);

    let itemContents = [radio, label, text];

    for (let content of itemContents){
        item.append(content);
    }
    
    return item 
}

function clearAnswers(){
    const answersList = document.getElementById('answers')
    while(answersList.firstChild){
        answersList.removeChild(answersList.firstChild);
    }
}

// GUI functions
function clickRadio(_parentNode){
    _parentNode.onclick = function(){
        this.querySelector("input:radio").prop('checked', true)
    }
}