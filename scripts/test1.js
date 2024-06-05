function nextQuestion(current) {
    let questionDiv = document.getElementById(`question${current}`);
    let nextQuestionDiv = document.getElementById(`question${current + 1}`);

    if (!validateAnswer(`q${current}`)) {
        alert("Please select an answer before proceeding.");
        return;
    }

    questionDiv.classList.remove("active");
    if (nextQuestionDiv) {
        nextQuestionDiv.classList.add("active");
    } else {
        checkAnswers();
    }
}

function validateAnswer(questionName) {
    return document.querySelector(`input[name="${questionName}"]:checked`) !== null;
}

function checkAnswers() {
    let correctAnswers = {
        q1: "2",
        q2: "3",
        q3: "2",
        q4: "3",
        q5: "1",
        q6: "1"
    };

    let userAnswers = {};
    for (let i = 1; i <= Object.keys(correctAnswers).length; i++) {
        userAnswers[`q${i}`] = document.querySelector(
            `input[name="q${i}"]:checked`
        )
            ? document.querySelector(`input[name="q${i}"]:checked`).value
            : "";
    }
    let resultText = "";
    for (let i = 1; i <= Object.keys(correctAnswers).length; i++) {
        if (userAnswers[`q${i}`] === correctAnswers[`q${i}`]) {
            resultText += `Вопрос ${i}: Верно!<br>`;
        } else {
            resultText += `Вопрос ${i}: Неверно. Правильный ответ: ${correctAnswers[`q${i}`]
                }.<br>`;
        }
    }

    document.getElementById("result").innerHTML = resultText;
}
