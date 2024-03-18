const questions = [
    "When is our anniversary? (dd/mm/yyyy)",
    "What's my fav body part on you?",
    "Where was our first kiss (Hint: 1 word)?",
    "What's my favorite drink in China?",
    "What's the last series we watched together?",
    "What series have we watched most episodes of together?"
];

const correctAnswers = [
    "19/06/2023",
    "Biceps",
    "Bed",
    "Tropicana",
    "The Gentlemen",
    "Love island"
];

const messages = [
    "So, it's day one of your birthday week. We are celebrating all week because a day is not enough and i want you to be happy for as long as possible. I<3U xxx!",
    "You make my heart smile!, Day two, and I wish I was with you. Look at me rhymeeee. Anyway, I<3U more",
    "You're the apple to my pie and the straw to my berry ❤️ !",
    "I miss you baby.. can't wait for your birthday! I hope you are having a good week babes",
    "You're my favorite person, i love you to the moon and back",
    "You're my boo forever and ever and ever!",
    "We are soooo close xxxx, I would've been spoiling you so hard all week if I was there. I Love you"
];

let currentQuestion = 0;

function displayQuestion() {
    document.getElementById("container").style.display = "block";
    document.getElementById("questionContainer").style.display = "block";
    document.getElementById("messageContainer").style.display = "none";
    document.getElementById("question").innerText = questions[currentQuestion];
    document.getElementById("nextBtn").style.display = "none";
}

function checkAnswer() {
    const answer = document.getElementById("answer").value.trim().toLowerCase();
    const correctAnswer = correctAnswers[currentQuestion];
    if (answer === correctAnswer) {
        displayMessage(messages[currentQuestion]);
        currentQuestion++;
        if (currentQuestion === questions.length) {
            displayVideoMessage();
        } else {
            document.getElementById("answer").value = "";
            document.getElementById("submitBtn").style.display = "none";
            document.getElementById("nextBtn").style.display = "block";
        }
    } else {
        alert("Incorrect answer. Try again!");
    }
}

function displayMessage(message) {
    document.getElementById("container").style.display = "block";
    document.getElementById("questionContainer").style.display = "none";
    document.getElementById("messageContainer").style.display = "block";
    document.getElementById("message").innerText = message;
    document.getElementById("nextQuestionMessage").style.display = "block";
}

function displayVideoMessage() {
    document.getElementById("container").style.display = "none";
    // Show video message here
}

// Countdown to the birthday (adjust the date accordingly)
const birthdayDate = new Date('2024-03-24').getTime();
const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = birthdayDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    document.getElementById("countdown").innerText = days;
    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerText = "Happy Birthday!";
    } else if (days === questions.length - currentQuestion) {
        document.getElementById("nextBtn").style.display = "block";
    }
}, 1000);

function nextQuestion() {
    displayQuestion();
}

// Display the first question initially
displayQuestion();

function displayRemainingTime() {
    const currentDate = new Date();
    const tomorrow = new Date(currentDate);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    
    const timeUntilTomorrow = tomorrow.getTime() - currentDate.getTime();
    const hoursUntilTomorrow = Math.floor(timeUntilTomorrow / (1000 * 60 * 60));
    const minutesUntilTomorrow = Math.floor((timeUntilTomorrow % (1000 * 60 * 60)) / (1000 * 60));
    const secondsUntilTomorrow = Math.floor((timeUntilTomorrow % (1000 * 60)) / 1000);
    
    const remainingTime = `${hoursUntilTomorrow}h ${minutesUntilTomorrow}m ${secondsUntilTomorrow}s`;
    document.getElementById("remainingTime").innerText = remainingTime;
}

// Call displayRemainingTime function to show remaining time initially
displayRemainingTime();

// Call displayRemainingTime function every second to update remaining time
setInterval(displayRemainingTime, 1000);
