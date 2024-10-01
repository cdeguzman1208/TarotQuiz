// Tarot card data structure
const tarotCards = {
    "The Sovereign (The Emperor)": 0,
    "The Empress (The Empress)": 0,
    "The Sage (The Hierophant)": 0,
    "The Hero (The Chariot)": 0,
    "The Weaver (Wheel of Fortune)": 0,
    "The Guardian (Strength)": 0,
    "The Enlightened One (The Hermit)": 0,
    "The Lovers (The Lovers)": 0,
    "The Seer (The High Priestess)": 0,
    "The Wanderer (The Fool)": 0,
    "The Arbiter (Justice)": 0,
    "The Rebirth (Death)": 0,
    "The Tempest (The Tower)": 0,
    "The Alchemist (Temperance)": 0,
    "The Illusionist (The Devil)": 0,
    "The Star Maiden (The Star)": 0,
    "The Moon Guardian (The Moon)": 0,
    "The Sun Lord (The Sun)": 0,
    "The World Tree (The World)": 0,
    "The Awakening (Judgement)": 0,
    "The Heavenly Court (The Hanged Man)": 0,
};

// Quiz questions
const quiz = [
    {
        question: "What motivates you the most in life?",
        answers: {
            A: {
                text: "Power and control over my destiny.",
                points: {
                    "The Sovereign (The Emperor)": 2,
                    "The Arbiter (Justice)": 1,
                    "The Hero (The Chariot)": 1,
                },
            },
            B: {
                text: "Creating and nurturing beauty around me.",
                points: {
                    "The Empress (The Empress)": 2,
                    "The Star Maiden (The Star)": 1,
                    "The Guardian (Strength)": 1,
                },
            },
            C: {
                text: "Seeking and sharing wisdom.",
                points: {
                    "The Sage (The Hierophant)": 2,
                    "The Enlightened One (The Hermit)": 1,
                    "The Seer (The High Priestess)": 1,
                },
            },
            D: {
                text: "Achieving victory and success.",
                points: {
                    "The Hero (The Chariot)": 2,
                    "The Wanderer (The Fool)": 1,
                    "The Sun Lord (The Sun)": 1,
                },
            },
            E: {
                text: "Accepting the flow of fate and change.",
                points: {
                    "The Weaver (Wheel of Fortune)": 2,
                    "The Tempest (The Tower)": 1,
                    "The Rebirth (Death)": 1,
                },
            },
        },
    },
    // Add more questions here in the same format
];

let currentQuestion = 0;
let totalPoints = { ...tarotCards };

// Function to display the next question
function nextQuestion() {
    const quizDiv = document.getElementById("quiz");
    quizDiv.innerHTML = "";

    if (currentQuestion < quiz.length) {
        const question = quiz[currentQuestion].question;
        const answers = quiz[currentQuestion].answers;

        // Display the question
        const questionElement = document.createElement("p");
        questionElement.textContent = question;
        quizDiv.appendChild(questionElement);

        // Display the answer choices
        for (const key in answers) {
            const answerElement = document.createElement("button");
            answerElement.textContent = answers[key].text;
            answerElement.onclick = function () {
                // Assign points based on the selected answer
                for (const card in answers[key].points) {
                    totalPoints[card] += answers[key].points[card];
                }
                currentQuestion++;
                nextQuestion(); // Move to the next question
            };
            quizDiv.appendChild(answerElement);
        }
    } else {
        // Quiz finished, calculate and display results
        displayResults();
    }
}

// Function to display the results
function displayResults() {
    const resultDiv = document.getElementById("result");
    const resultText = document.getElementById("resultText");
    resultDiv.style.display = "block";

    // Calculate total points
    const total = Object.values(totalPoints).reduce((acc, points) => acc + points, 0);

    // Calculate percentages and sort results
    const sortedResults = Object.keys(totalPoints)
        .map((card) => ({
            card: card,
            percentage: ((totalPoints[card] / total) * 100).toFixed(2),
        }))
        .sort((a, b) => b.percentage - a.percentage);

    // Display results
    sortedResults.forEach((result) => {
        const resultElement = document.createElement("p");
        resultElement.textContent = `${result.card}: ${result.percentage}%`;
        resultText.appendChild(resultElement);
    });

    // Display the top card
    const topCard = sortedResults[0].card;
    const topCardElement = document.createElement("h3");
    topCardElement.textContent = `You are most aligned with: ${topCard}`;
    resultText.appendChild(topCardElement);
}

// Start the quiz
nextQuestion();
