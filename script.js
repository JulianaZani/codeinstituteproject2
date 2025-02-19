const questions = [
    { 
        question: "Do you prefer individual or group workouts?", 
        options: ["Individual", "Group"]
    },
    { 
        question: "What is your main fitness goal?", 
        options: ["Lose weight", "Gain muscle", "Improve endurance", "Relaxation"]
    },
    { 
        question: "Which type of workout do you enjoy the most?", 
        options: ["HIIT", "Weight training", "Running", "Yoga"]
    }
];

let answers = [];
let currentIndex = 0;

function showQuestion() {
    const currentQuestion = questions[currentIndex];
    document.getElementById("question").innerText = currentQuestion.question;
    
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = ""; // Clear previous options

    currentQuestion.options.forEach(option => {
        let button = document.createElement("button");
        button.innerText = option;
        button.classList.add("button");
        button.onclick = () => selectAnswer(option);
        optionsContainer.appendChild(button);
    });
}

function selectAnswer(answer) {
    answers.push(answer);
    
    if (currentIndex + 1 < questions.length) {
        currentIndex++;
        showQuestion();
    } else {
        // Save to localStorage and redirect to results page
        localStorage.setItem("quizAnswers", JSON.stringify(answers));
        window.location.href = "result.html";
    }
}

showQuestion();
