
let quizDiv = document.querySelector("#quiz")
let questionButton1 = document.querySelector("#answer1")
let questionButton2 = document.querySelector("#answer2")
let questionButton3 = document.querySelector("#answer3")
let questionButton4 = document.querySelector("#answer4")


// let timer = 90

// let timerId = setInterval(function(){

//     timer -=1
//     console.log(timer)

// }, 1000)





let questions = [{question: "Which pokemon does Ash get at the start of pokemon?", answers:["charmander", "squirtle", "bulbasaur", "pikachu"], correctAnswer: 3 },
{question: "Which pokemon is able to deal fire damage?", answers:["charmander", "squirtle", "bulbasaur", "pikachu"], correctAnswer: 2 },
{question: "Which pokemon is able to deal fire damage?", answers:["charmander", "squirtle", "bulbasaur", "pikachu"], correctAnswer: 2 },
{question: "Which pokemon is able to deal fire damage?", answers:["charmander", "squirtle", "bulbasaur", "pikachu"], correctAnswer: 2 },
{question: "Which pokemon is able to deal fire damage?", answers:["charmander", "squirtle", "bulbasaur", "pikachu"], correctAnswer: 2 },
{question: "Which pokemon is able to deal fire damage?", answers:["charmander", "squirtle", "bulbasaur", "pikachu"], correctAnswer: 2 }]


let currentQuestion = 0

renderQuestion();

function renderQuestion(){
    (questions[currentQuestion].question)
    questionButton1.textContent = questions[currentQuestion].answers[0];
    questionButton2.textContent = questions[currentQuestion].answers[1];
    questionButton3.textContent = questions[currentQuestion].answers[2];
    questionButton4.textContent = questions[currentQuestion].answers[3];
    console.log(questions[0].answers[1])
    console.log(questions[0].answers[2])
    console.log(questions[0].answers[3])
    console.log('correct answer:' + questions[currentQuestion].correctAnswer)

}



quizDiv.addEventListener("click", function(event){

    if(event.target.matches("button")){
        console.log('clicked')
        console.log(event.target.innerText);

        renderQuestion();
        currentQuestion++
    }
})
