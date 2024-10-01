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

// Tarot quiz questions (8 questions from earlier)
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
    {
        question: "How do you handle difficult challenges?",
        answers: {
            A: {
                text: "I face them head-on with confidence.",
                points: {
                    "The Guardian (Strength)": 2,
                    "The Hero (The Chariot)": 1,
                    "The Sovereign (The Emperor)": 1,
                },
            },
            B: {
                text: "I adapt and wait for the right moment.",
                points: {
                    "The Weaver (Wheel of Fortune)": 2,
                    "The Enlightened One (The Hermit)": 1,
                    "The Alchemist (Temperance)": 1,
                },
            },
            C: {
                text: "I analyze and learn from them.",
                points: {
                    "The Sage (The Hierophant)": 2,
                    "The Seer (The High Priestess)": 1,
                    "The Sovereign (The Emperor)": 1,
                },
            },
            D: {
                text: "I seek support and guidance from others.",
                points: {
                    "The Lovers (The Lovers)": 2,
                    "The Star Maiden (The Star)": 1,
                    "The Sovereign (The Emperor)": 1,
                },
            },
            E: {
                text: "I take risks and embrace chaos.",
                points: {
                    "The Tempest (The Tower)": 2,
                    "The Wanderer (The Fool)": 1,
                    "The Rebirth (Death)": 1,
                },
            },
        },
    },
    {
        question: "Which element do you feel the strongest connection to?",
        answers: {
            A: {
                text: "Fire - for its passion and energy.",
                points: {
                    "The Sovereign (The Emperor)": 2,
                    "The Sun Lord (The Sun)": 1,
                    "The Hero (The Chariot)": 1,
                },
            },
            B: {
                text: "Water - for its adaptability and depth.",
                points: {
                    "The Seer (The High Priestess)": 2,
                    "The Lovers (The Lovers)": 1,
                    "The Alchemist (Temperance)": 1,
                },
            },
            C: {
                text: "Earth - for its stability and strength.",
                points: {
                    "The Guardian (Strength)": 2,
                    "The Arbiter (Justice)": 1,
                    "The World Tree (The World)": 1,
                },
            },
            D: {
                text: "Air - for its freedom and change.",
                points: {
                    "The Weaver (Wheel of Fortune)": 2,
                    "The Enlightened One (The Hermit)": 1,
                    "The Wanderer (The Fool)": 1,
                },
            },
        },
    },
    {
        question: "What is your ideal role in a team?",
        answers: {
            A: {
                text: "The leader who takes charge.",
                points: {
                    "The Sovereign (The Emperor)": 2,
                    "The Hero (The Chariot)": 1,
                    "The Arbiter (Justice)": 1,
                },
            },
            B: {
                text: "The one who provides wisdom and guidance.",
                points: {
                    "The Sage (The Hierophant)": 2,
                    "The Seer (The High Priestess)": 1,
                    "The Enlightened One (The Hermit)": 1,
                },
            },
            C: {
                text: "The one who creates harmony and balance.",
                points: {
                    "The Alchemist (Temperance)": 2,
                    "The Star Maiden (The Star)": 1,
                    "The Lovers (The Lovers)": 1,
                },
            },
            D: {
                text: "The risk-taker who pushes the limits.",
                points: {
                    "The Wanderer (The Fool)": 2,
                    "The Rebirth (Death)": 1,
                    "The Tempest (The Tower)": 1,
                },
            },
        },
    },
    {
        question: "What is your greatest strength?",
        answers: {
            A: {
                text: "My determination to succeed.",
                points: {
                    "The Hero (The Chariot)": 2,
                    "The Sovereign (The Emperor)": 1,
                    "The Guardian (Strength)": 1,
                },
            },
            B: {
                text: "My ability to bring people together.",
                points: {
                    "The Lovers (The Lovers)": 2,
                    "The Empress (The Empress)": 1,
                    "The Star Maiden (The Star)": 1,
                },
            },
            C: {
                text: "My wisdom and understanding of life.",
                points: {
                    "The Sage (The Hierophant)": 2,
                    "The Enlightened One (The Hermit)": 1,
                    "The Seer (The High Priestess)": 1,
                },
            },
            D: {
                text: "My adaptability to change.",
                points: {
                    "The Weaver (Wheel of Fortune)": 2,
                    "The Rebirth (Death)": 1,
                    "The Alchemist (Temperance)": 1,
                },
            },
        },
    },
    {
        question: "What do you fear the most?",
        answers: {
            A: {
                text: "Losing control over my life.",
                points: {
                    "The Sovereign (The Emperor)": 2,
                    "The Arbiter (Justice)": 1,
                    "The Hero (The Chariot)": 1,
                },
            },
            B: {
                text: "Being alone or unloved.",
                points: {
                    "The Lovers (The Lovers)": 2,
                    "The Seer (The High Priestess)": 1,
                    "The Guardian (Strength)": 1,
                },
            },
            C: {
                text: "Chaos and unpredictability.",
                points: {
                    "The Alchemist (Temperance)": 2,
                    "The Enlightened One (The Hermit)": 1,
                    "The Weaver (Wheel of Fortune)": 1,
                },
            },
            D: {
                text: "Being stuck in a situation without change.",
                points: {
                    "The Rebirth (Death)": 2,
                    "The Wanderer (The Fool)": 1,
                    "The Tempest (The Tower)": 1,
                },
            },
        },
    },
    {
        question: "How do you approach love and relationships?",
        answers: {
            A: {
                text: "With passion and intensity.",
                points: {
                    "The Lovers (The Lovers)": 2,
                    "The Sun Lord (The Sun)": 1,
                    "The Hero (The Chariot)": 1,
                },
            },
            B: {
                text: "With care and nurturing.",
                points: {
                    "The Empress (The Empress)": 2,
                    "The Star Maiden (The Star)": 1,
                    "The Guardian (Strength)": 1,
                },
            },
            C: {
                text: "With balance and compromise.",
                points: {
                    "The Alchemist (Temperance)": 2,
                    "The Enlightened One (The Hermit)": 1,
                    "The Seer (The High Priestess)": 1,
                },
            },
            D: {
                text: "With an open heart, embracing change.",
                points: {
                    "The Rebirth (Death)": 2,
                    "The Weaver (Wheel of Fortune)": 1,
                    "The Wanderer (The Fool)": 1,
                },
            },
        },
    },
    {
        question: "What do you value most in life?",
        answers: {
            A: {
                text: "Order and structure.",
                points: {
                    "The Sovereign (The Emperor)": 2,
                    "The Arbiter (Justice)": 1,
                    "The Hero (The Chariot)": 1,
                },
            },
            B: {
                text: "Love and emotional fulfillment.",
                points: {
                    "The Lovers (The Lovers)": 2,
                    "The Empress (The Empress)": 1,
                    "The Guardian (Strength)": 1,
                },
            },
            C: {
                text: "Wisdom and spiritual growth.",
                points: {
                    "The Sage (The Hierophant)": 2,
                    "The Enlightened One (The Hermit)": 1,
                    "The Seer (The High Priestess)": 1,
                },
            },
            D: {
                text: "Freedom and adventure.",
                points: {
                    "The Wanderer (The Fool)": 2,
                    "The Rebirth (Death)": 1,
                    "The Tempest (The Tower)": 1,
                },
            },
        },
    }
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
            answerElement.style.display = "block";  // Make each button appear on a separate line
            answerElement.style.margin = "10px 0";  // Add margin between buttons
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

    // Display the top card
    const topCard = sortedResults[0].card;
    const topCardElement = document.createElement("h3");
    topCardElement.textContent = `You are most aligned with: ${topCard}`;
    resultText.appendChild(topCardElement);

    // Add a link to learn more about the card
    const referenceLink = document.createElement("p");
    referenceLink.innerHTML = `Want to know more about your card? Check out the <a href="card_reference.html" target="_blank">Tarot Card Reference Page</a>!`;
    resultDiv.appendChild(referenceLink);
    
    // Display results
    sortedResults.forEach((result) => {
        const resultElement = document.createElement("p");
        resultElement.textContent = `${result.card}: ${result.percentage}%`;
        resultText.appendChild(resultElement);
    });
}

// Start the quiz
nextQuestion();
