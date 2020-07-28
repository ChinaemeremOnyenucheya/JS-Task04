// Defining of variables
var currentQuestion= 0;
var score = 0;
var totalQuestions= questions.length;
var scoreCont = 0;
var holder = document.querySelector(".holder");
var questionDisplay= document.querySelector("#questionAsked");
var opt1 =document.querySelector("#opt1");
var opt2 =document.querySelector("#opt2");
var opt3 =document.querySelector("#opt3");
var opt4 =document.querySelector("#opt4");
var nextButton= document.querySelector("#next");
var tracker = document.querySelector("#tracker");
var resultCont = document.querySelector("#result");
var scoreCounter = document.querySelector("#scoreCounter");
var answeredCont = document.querySelector("#answeredCorrectly")
var containerOutput = document.querySelector(".container-output");
var start = document.querySelector("#start");
var startCont = document.querySelector(".container-start");
var restart= document.querySelector("#restart");


// Event to start the quiz
start.addEventListener("click",function(){
		startCont.style.display="none";
	    holder.style.display = "";						
})


// Function which extracts data from questions array and also keeps track of question number
function loadQuestion(questionIndex){
	var questionsArray = questions[questionIndex];

	questionDisplay.textContent =  questionsArray.quiz;
	opt1.textContent = questionsArray.option1;
	opt2.textContent = questionsArray.option2;
	opt3.textContent = questionsArray.option3;
	opt4.textContent = questionsArray.option4;
	tracker.textContent = (questionIndex + 1);
};

// calling function to load questions and options
loadQuestion(currentQuestion);


// Function to color an option selected green if true and red if false
function indicator(){
	var selectedOption = document.querySelector('input[type=checkbox]:checked');
	var answer = selectedOption.value;
	if(questions[currentQuestion].answer == answer){
		selectedOption.parentElement.classList.add("rightAnswer");}

	else{selectedOption.parentElement.classList.add("wrongAnswer");}
}


// Function to load next question and output score and total questions answered.
function loadNextQuestion(){
	var selectedOption = document.querySelector('input[type=checkbox]:checked');
	
	if(!selectedOption){ nextButton.style.disabled = true;
		return;}

	var answer = selectedOption.value;

	if(questions[currentQuestion].answer == answer){
		score += 3;
		scoreCounter.textContent = scoreCont += 1;}

	selectedOption.checked = false;
	currentQuestion++;

	selectedOption.parentElement.classList.remove("rightAnswer");
	selectedOption.parentElement.classList.remove("wrongAnswer");

	if(currentQuestion == totalQuestions - 1){
		nextButton.textContent= "Finish";}

    if(currentQuestion == totalQuestions){
		holder.style.display = "none";
		resultCont.style.display ="";
		answeredCont.style.display= "";
		containerOutput.style.display="";
		resultCont.textContent ="Your score: " + score +"/15";
		answeredCont.textContent = "You answered: " + scoreCont + " question(s) correctly.";
		return;}

	loadQuestion(currentQuestion);

};

// Event which restarts the quiz
restart.addEventListener("click",function(){
	containerOutput.style.display="none";
	startCont.style.display="";
})










