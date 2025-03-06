const questions = [
    {
        que: "Which of the following is a markup language?",
        options: { 'a': "HTML", 'b': "CSS", 'c': "JavaScript", 'd': "PHP" },
        correct: 'a'
    },
    {
        que: "Which language is used for styling web pages?",
        options: { 'a': "HTML", 'b': "CSS", 'c': "JavaScript", 'd': "Python" },
        correct: 'b'
    },
    {
        que: "Which is a JavaScript framework?",
        options: { 'a': "React", 'b': "Laravel", 'c': "Django", 'd': "Spring" },
        correct: 'a'
    },
    {
        que: "Which of the following is not a programming language?",
        options: { 'a': "Python", 'b': "JavaScript", 'c': "HTML", 'd': "C++" },
        correct: 'c'
    },
    {
        que: "Which of the following is a backend language?",
        options: { 'a': "HTML", 'b': "CSS", 'c': "JavaScript", 'd': "Node.js" },
        correct: 'd'
    },
    {
        que: "Which tag is used to define an image in HTML?",
        options: { 'a': "<img>", 'b': "<image>", 'c': "<pic>", 'd': "<photo>" },
        correct: 'a'
    },
    {
        que: "What does CSS stand for?",
        options: { 'a': "Computer Style Sheets", 'b': "Cascading Style Sheets", 'c': "Creative Style Sheets", 'd': "Colorful Style Sheets" },
        correct: 'b'
    },
    {
        que: "Which JavaScript method is used to write into an alert box?",
        options: { 'a': "alert()", 'b': "msg()", 'c': "prompt()", 'd': "console.log()" },
        correct: 'a'
    },
    {
        que: "Which company developed JavaScript?",
        options: { 'a': "Microsoft", 'b': "Sun Microsystems", 'c': "Netscape", 'd': "Google" },
        correct: 'c'
    },
    {
        que: "Which of the following is used to connect to a database in PHP?",
        options: { 'a': "MySQLi", 'b': "SQL", 'c': "PDO", 'd': "Both a and c" },
        correct: 'd'
    }
];

let index = 0;
const queBox = document.getElementById('queBox');
const optionInputs = document.querySelectorAll('.options');

// Function to load a question
const loadQuestion = () => {
    const data = questions[index];
    queBox.innerText = `${index + 1}) ${data.que}`;
    
    optionInputs.forEach((input, i) => {
        const optionKey = Object.keys(data.options)[i];
        input.nextElementSibling.innerText = data.options[optionKey];
        input.checked = false; // Reset checked option
    });
};

// Function to get the selected answer
const getAnswer = () => {
    let selectedAnswer = null;
    
    optionInputs.forEach((input) => {
        if (input.checked) {
            selectedAnswer = input.value; // Store selected option's value
        }
    });

    return selectedAnswer;
};

// Function to submit and validate the quiz answer
const submitQuiz = () => {
    const selectedAnswer = getAnswer();
    
    if (selectedAnswer) {
        if (selectedAnswer === questions[index].correct) {
            alert("Correct answer!");
        } else {
            alert("Wrong answer!");
        }

        // Move to the next question
        index++;

        if (index < questions.length) {
            loadQuestion();
        } else {
            alert("Quiz completed!");
        }
    } else {
        alert("Please select an answer.");
    }
};

loadQuestion();
