
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>FS | Entrance Exam</title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
	<link rel="stylesheet" href="css/styles.css">
</head>
<body>
	
	<div id="test">
		<header id="question">
			<div class="container">
				<span>Question {num}</span>
				<h3 id="question-1">
					{Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate hic, placeat molestias vero inventore rerum}?
				
				</h3>
			</div>
		</header>
		<div class="container">
			<ul id="answers" class="list-group">
				<li class="answer-item list-group-item">	
					<input type="radio" name="answer" value="a" class="answer">
					<label for="a">A</label>
					<span id="answer-1-a">Lorem ipsum dolor sit.</span>
				</li>
				<li class="answer-item list-group-item">
						
					<input type="radio" name="answer" value="b" class="answer">
					<label for="b">B</label>
					<span id="answer-1-b">Lorem ipsum dolor sit.</span>
				</li>
				<li class="answer-item list-group-item">
						
					<input type="radio" name="answer" value="c" class="answer">
					<label for="c">C</label>
					<span id="answer-1-c">Lorem ipsum dolor sit.</span>
				</li>
				<li class="answer-item list-group-item">
						
					<input type="radio" name="answer" value="d" class="answer">
					<label for="d">D</label>
					<span id="answer-1-d">Lorem ipsum dolor sit.</span>
				</li>
			</ul>
			<button id="testButton" class="btn btn-block btn-primary">Clear Answers, Replace with Sample Answers</button>

			<button id="submitBtn" class="btn btn-block btn-succss next-q">Next Question</button>			
		</div>
		

	</div>
	<footer id="footer">
		<div class="container counter">
			<span>{num}</span> / <span>{questions.length}</span>
		</div>	
	</footer>
	<script src="js/templates.js">
	<script src="js/jsFunctions.js"></script>

</body>
</html>