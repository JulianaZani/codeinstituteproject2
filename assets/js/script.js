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
    optionsContainer.innerHTML = "";

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
        showResult();
    }

}

function showResult() {
  let workouts = [];

  if (answers.includes("Gain muscle"))
      workouts.push("For muscle gain: Calisthenics and bodybuilding");
  if (answers.includes("Relaxation"))
      workouts.push("Stretching exercises");
  if (answers.includes("Improve endurance"))
    workouts.push("Exercises that improve cardiovascular endurance: HIIT, Dancing");
  if (answers.includes("Lose weight"))
    workouts.push("For weight loss, in addition to a good diet, it is important to combine cardio with weight training, exemplo: Functional training");  

  if (answers.includes("HIIT"))
      workouts.push("HIIT training for high intensity activity!");
  if (answers.includes("Weight training"))
      workouts.push("Weight Training to Build Strength!");
  if (answers.includes("Running"))
      workouts.push("Running and Cycling to improve Endurance!");
  if (answers.includes("Yoga"))
      workouts.push("Yoga and Pilates to relax your body and mind!");

  document.getElementById("result").innerText = workouts.join(" . ");
  
  document.querySelector(".quizcontainer").style.display = "none";
  document.querySelector(".result-container").style.display = "flex";
}

showQuestion();
