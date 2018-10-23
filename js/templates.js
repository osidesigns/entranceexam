function answerTemplate(_question_id, _i, _text){
    let answers = ["a", "b", "c", "d", "e", "f", "g"];

    return `
    <li class="answer-item list-group-item">	
        <input type="radio" name="answer" value="${answers[_i]}" class="answer">
        <label for="${answers[_i]}">${answers[_i].toUpperCase}</label>
        <span id="answer-${_question_id}-${_i}">${_text}</span>
    </li>`
}