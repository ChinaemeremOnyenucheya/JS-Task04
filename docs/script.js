// Quiz questions
var questions = [{quiz:"Who is the most feared greek god?",
				  option1: "Hephaestus",
				  option2: "Zeus",
				  option3: "Hades",
				  option4: "Thor",
				  answer : "2"},

                {quiz:"Who is the god of war?",
				  option1: "Hermes",
				  option2: "Zeus",
				  option3: "Hades",
				  option4: "Ares",
				  answer : "4"},

				{quiz:"Which greek god lives in the underworld?",
				  option1: "Ares",
				  option2: "Cronos",
				  option3: "Hades",
				  option4: "Thor",
				  answer : "3"},

				{quiz:"What is the one-eyed and long-bearded Norsk god called?",
				  option1: "Odin",
				  option2: "Zeus",
				  option3: "Thor",
				  option4: "Apollos",
				  answer : "1"},

				{quiz:"A Norseman bows only to?",
				  option1: "Poseidon",
				  option2: "Hades",
				  option3: "Odin",
				  option4: "Thor",
				  answer : "3"}, 
				  ];




// Defining of variables
var currentQuestion=0;
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
var notSelect = document.querySelectorAll("input[type=checkbox]");



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

	else{
		selectedOption.parentElement.classList.add("wrongAnswer"); 
	    for(var i=0; i < notSelect.length; i++){
				var extract = notSelect[i].value;
				if(extract == questions[currentQuestion].answer){
				notSelect[i].parentElement.classList.add("rightAnswer");}
			}
		}
}

// Function to indicate the right answer when the wrong one is picked
function correctIndicator (){
	var notSelect = document.querySelectorAll("input[type=checkbox]");
	for(var i=0; i < notSelect.length; i++){
				var extract = notSelect[i].value;
				notSelect[i].parentElement.classList.remove("rightAnswer");}			
}

// Function to load next question and output score and total questions answered.
function loadNextQuestion(){
	var selectedOption = document.querySelector('input[type=checkbox]:checked');
	
	if(!selectedOption){
		alert("Please select your answer");
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

	correctIndicator();

	loadQuestion(currentQuestion);
	

};

// Event which restarts the quiz
restart.addEventListener("click",function(){
	containerOutput.style.display="none";
	startCont.style.display="";
	location.reload();
return false;

})











