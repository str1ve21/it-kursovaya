const nextButton = document.getElementsByClassName('next-button');
const beforeButton = document.getElementsByClassName('before-button');

let currentQuestion = 1;
let correctAnswers = 0;

function enableAfterRadioCheck(questions) {
    const questionsArray = document.getElementsByName(questions);
    console.log(questionsArray);
    for (let i = 0; i < questionsArray.length; i++) {
        questionsArray[i].addEventListener('change', () => {
            if (nextButton[currentQuestion - 1].attributes.getNamedItem('disabled') !== null) {
                nextButton[currentQuestion - 1].attributes.removeNamedItem('disabled');
            }
        });
    }
};
enableAfterRadioCheck(`radio-answ-${currentQuestion}`);

for (let i = 0; i < nextButton.length; i++) {
    nextButton[i].addEventListener('click', () => {
        document.querySelector(`#question-cont-${currentQuestion}`).classList.add('hidden');
        currentQuestion++;
        document.querySelector(`#question-cont-${currentQuestion}`).classList.remove('hidden');
        enableAfterRadioCheck(`radio-answ-${currentQuestion}`);
    });
};

for (let i = 0; i < beforeButton.length; i++) {
    beforeButton[i].addEventListener('click', () => {
        document.querySelector(`#question-cont-${currentQuestion}`).classList.add('hidden');
        currentQuestion--;
        document.querySelector(`#question-cont-${currentQuestion}`).classList.remove('hidden');
    });
};