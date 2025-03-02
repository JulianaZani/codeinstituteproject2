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

const quizanswers = JSON.parse(localStorage.getItem("quizAnswers"));

      function determineWorkout(quizanswers) {
        let workouts = [];

        if (answers.includes("Gain muscle"))
          workouts.push("Weight Training - Build Strength!");

        if (answers.includes("HIIT"))
          workouts.push("HIIT Training - High Intensity!");
        if (answers.includes("Weight training"))
          workouts.push("Weight Training - Build Strength!");
        if (answers.includes("Running"))
          workouts.push("Running & Cycling - Improve Endurance!");
        if (answers.includes("Yoga"))
          workouts.push("Yoga & Pilates - Relax Your Body & Mind!");

        if (workouts.length === 0) {
          return "Custom Workout - Contact a trainer!";
        }

        return workouts.join(" & ");
      }

      document.getElementById("result").innerText = determineWorkout(answers);
