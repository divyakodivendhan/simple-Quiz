const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "Berlin", "Madrid", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Venus", "Jupiter"],
        correctAnswer: "Mars"
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        correctAnswer: "Blue Whale"
    }
];
 // Shuffle quiz questions
quizData.sort(() => Math.random() - 0.5);


let currentQuestion = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");

    questionElement.textContent = quizData[currentQuestion].question;
    optionsElement.innerHTML = "";

    quizData[currentQuestion].options.forEach((option, index) => {
        const optionElement = document.createElement("div");
        optionElement.className = "option";
        optionElement.textContent = option;
        optionElement.onclick = () => checkAnswer(index);
        optionsElement.appendChild(optionElement);
    });
}

function checkAnswer(selectedIndex) {
    const selectedOption = quizData[currentQuestion].options[selectedIndex];
    const correctAnswer = quizData[currentQuestion].correctAnswer;

    if (selectedOption === correctAnswer) {
        alert("Correct!");
    } else {
        alert("Wrong! The correct answer is: " + correctAnswer);
    }

    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        alert("Quiz completed!");
    }
}

function nextQuestion() {
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        alert("Quiz completed!");
    }
}

// Initial load
loadQuestion();