
<!DOCTYPE html>
<html>
<head>

	<!-- 
		Full Stack Birmingham 
	-->
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
				<h3 id="question-text">
					{Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate hic, placeat molestias vero inventore rerum}?
				</h3>
			</div>
		</header>
		<div class="container">
			<ul id="answers" class="list-group">
				
			</ul> <!-- close #answers -->

			<button id="submitBtn" class="btn btn-block btn-succss next-q">Next Question</button>			
		</div>
		

	</div>
	<footer id="footer">
		<div class="container counter">
			<span>{num}</span> / <span>{questions.length}</span>
		</div>	
	</footer>
	<script src="js/templates.js"></script>
	<!-- <script src="js/jsFunctions.js"></script> -->

</body>
</html>