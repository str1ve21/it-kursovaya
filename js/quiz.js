const answerCont = document.querySelector('#answer-cont');
const nextButton = document.querySelector('#next-button');
const beforeButton = document.querySelector('#before-button');
const againButton = document.querySelector('#again-button');
let currentQuestion = 1;
let correctAnswers = 0;

const questionTexts = [
    'Как звали моего первого друга в школе?',
    'В каком году я изучил HTML?',
    'В каком классе появился мой любимый предмет?',
    'Производитель моего фотоаппарата:',
    'Писал ли я код на уроках в тетради?',
    ''
];

const answerMass = {
    answ1: [
        'Гладиолус',
        'X Æ A-Xii',
        'Илья',
        'Paramécium caudátum'
    ],

    answ2: [
        '2003',
        '2049',
        '2020'
    ],

    answ3: [
        '1',
        '10',
        '101',
        '100101'
    ],

    answ4: [
        'МЦСТ',
        'Audi',
        'Google',
        'Nikon'
    ],

    answ5: [
        'Да',
        'Нет'
    ]
};

function addCorrect() {
    if (currentQuestion === 1 && document.querySelector('#question-3').checked === true) {
        correctAnswers++;
    };

    if (currentQuestion === 2 && document.querySelector('#question-3').checked === true) {
        correctAnswers++;
    };

    if (currentQuestion === 3 && document.querySelector('#question-2').checked === true) {
        correctAnswers++;
    };

    if (currentQuestion === 4 && document.querySelector('#question-4').checked === true) {
        correctAnswers++;
    };

    if (currentQuestion === 5 && document.querySelector('#question-1').checked === true) {
        correctAnswers++;
    };
};

function finishTest() {
    if (currentQuestion === questionTexts.length - 1) {
        nextButton.innerHTML = 'Результат';
    };

    if (currentQuestion < questionTexts.length - 1) {
        nextButton.innerHTML = 'Следующий вопрос';
    };

    if (currentQuestion === questionTexts.length) {
        questionNum.innerHTML = 'Результат.';
        questionText.innerHTML = `Вы ответили правильно на ${correctAnswers} из ${currentQuestion - 1} вопросов.`;
        nextButton.classList.add('hidden');
        beforeButton.classList.add('hidden');
        againButton.classList.remove('hidden');
    };

    if (currentQuestion < questionTexts.length) {
        nextButton.classList.remove('hidden');
        beforeButton.classList.remove('hidden');
        againButton.classList.add('hidden');
    };


};

function createRadio(massName) {
    answerCont.innerHTML = '';
    if (currentQuestion < questionTexts.length) {
        for (let i = 0; i < massName.length; i++) {
            const answerInput = document.createElement('input');
            const answerLabel = document.createElement('label');
            const br = document.createElement('br');
            
            answerInput.setAttribute('id', `question-${i + 1}`);
            answerInput.setAttribute('type', 'radio');
            answerInput.setAttribute('name', 'radio-answ-1');
            answerInput.setAttribute('class', 'answer-input accent-amber-500 scale-125 mr-5');
        
            answerLabel.setAttribute('for', 'answer-input');
            answerLabel.setAttribute('class', 'text-raleway text-sm lg:text-2xl');
            answerLabel.innerHTML = massName[i];
        
            answerCont.appendChild(answerInput);
            answerCont.appendChild(answerLabel);
            answerCont.appendChild(br);
        };
    };
};
createRadio(answerMass[`answ${currentQuestion}`]);

const questionsArray = document.getElementsByName('radio-answ-1');
const questionNum = document.querySelector('#question-num');
const questionText = document.querySelector('#question-text');

function unlockBefore() {
    if (currentQuestion > 1) {
        beforeButton.removeAttribute('disabled');
    };

    if (currentQuestion <= 1) {
        beforeButton.setAttribute('disabled', 'disabled');
    };
};

function addQuetsionText(num) {
    questionNum.innerHTML = `Вопрос ${currentQuestion}.`;
    questionText.innerHTML = questionTexts[num - 1];
};

questionNum.innerHTML = `Вопрос ${currentQuestion}.`;
questionText.innerHTML = questionTexts[0];

nextButton.addEventListener('click', () => {
    if (currentQuestion < questionTexts.length) {
        addCorrect();
        currentQuestion++;
        addQuetsionText(currentQuestion);
        unlockBefore();
        createRadio(answerMass[`answ${currentQuestion}`]);
        finishTest();
    };
});

beforeButton.addEventListener('click', () => {
    if (currentQuestion > 1) {
        currentQuestion--;
        addQuetsionText(currentQuestion);
        unlockBefore();
        createRadio(answerMass[`answ${currentQuestion}`]);
        finishTest();
    };
});

againButton.addEventListener('click', () => {
    currentQuestion = 1;
    correctAnswers = 0;
    addQuetsionText(currentQuestion);
    unlockBefore();
    createRadio(answerMass[`answ${currentQuestion}`]);
    finishTest();
});