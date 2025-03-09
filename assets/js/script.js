// Quiz questions and answers options
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
    },
    { 
        question: "How many times per week do you plan to exercise?", 
        options: ["1-2 times", "3-4 times", "5+ times"] 
    },
    { 
        question: "Do you prefer indoor or outdoor workouts?", 
        options: ["Indoor", "Outdoor"] 
    },
    { 
        question: "What type of equipment do you like using?", 
        options: ["Bodyweight only", "Dumbbells & Barbells", "Machines", "Resistance Bands"] 
    }
];

let answers = new Array(questions.length).fill(null);
let currentIndex = 0;

// Back button
const backButton = document.getElementById("back-button");

backButton.style.display = "none";

// Add event listener to the back button
backButton.addEventListener("click", goBack);

// Display the current question
function showQuestion() {
    const currentQuestion = questions[currentIndex];
    console.log("Current Question:", currentQuestion.question);
    
    document.getElementById("question").innerText = currentQuestion.question;
    
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = ""; // Clear previous options

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("button");

        if (answers[currentIndex] === option) {
            button.style.backgroundColor = "#5a8cc1";
        }

        button.onclick = () => selectAnswer(option);
        optionsContainer.appendChild(button);
    });

    // Show/hide back button based on question index
    backButton.style.display = currentIndex > 0 ? "block" : "none";
}

// Store the user's answer and move to the next question
function selectAnswer(answer) {
    answers[currentIndex] = answer;
    console.log("Selected Answer:", answer); 
    console.log("Current Answers Array:", answers); 
    
    if (currentIndex + 1 < questions.length) {
        currentIndex++;
        showQuestion();
    } else {
        showResult();
    }
}

// Function to go back to the previous question
function goBack() {
    if (currentIndex > 0) {
        currentIndex--;
        showQuestion();
    }
}

// Display the final result with workout recommendations
function showResult() {
    let workouts = [];

    if (answers.includes("Gain muscle")) 
        workouts.push("For muscle gain: Calisthenics and bodybuilding");
    if (answers.includes("Relaxation")) 
        workouts.push("Stretching exercises");
    if (answers.includes("Improve endurance")) 
        workouts.push("Exercises that improve cardiovascular endurance: HIIT, Dancing");
    if (answers.includes("Lose weight")) 
        workouts.push("For weight loss, in addition to a good diet, it is important to combine cardio with weight training, example: Functional training");

    if (answers.includes("HIIT")) 
        workouts.push("HIIT training for high-intensity activity!");
    if (answers.includes("Weight training")) 
        workouts.push("Weight training to build strength!");
    if (answers.includes("Running")) 
        workouts.push("Running and cycling to improve endurance!");
    if (answers.includes("Yoga")) 
        workouts.push("Yoga and Pilates to relax your body and mind!");

    console.log("Final Selected Workouts:", workouts);

    document.getElementById("result").innerText = workouts.join(" . ");
    document.querySelector(".quizcontainer").style.display = "none";
    backButton.style.display = "none";
    document.querySelector(".result-container").style.display = "flex";
}

// Adjust quiz box width based on screen size
function adjustQuizBoxWidth() {
    const quizBox = document.getElementById("quizbox");
    quizBox.style.width = window.innerWidth < 600 ? "90%" : "60%";
}

// Initialize on page load
window.onload = function() {
    document.querySelector(".result-container").style.display = "none";
    adjustQuizBoxWidth(); 
    showQuestion(); 
};

// Adjust quiz width on window resize
window.onresize = adjustQuizBoxWidth;
