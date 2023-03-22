const quizes = [
    {
        id: 1,
        question: "1 + 1 = ?",
        answers: [1, 2, 3, 4],
    },
    {
        id: 2,
        question: "2 + 2 = ?",
        answers: [2, 3, 4, 5],
    },
    {
        id: 3,
        question: "3 + 3 = ?",
        answers: [3, 4, 5, 6],
    },
];

let divContainer = document.querySelector('.quiz-container');
for(let i = 0; i < quizes.length; i++) {
    let divItem = document.createElement('div');
    divItem.classList.add('quiz-item');
    divContainer.insertAdjacentElement('beforeend',divItem);

    let h3 = document.createElement('h3');
    h3.innerText = `Câu ${quizes[i].id} : ${quizes[i].question}`;
    divItem.insertAdjacentElement('beforeend', h3);

    let divAnswer = document.createElement('div');
    divAnswer.classList.add('quiz-answer');
    divItem.insertAdjacentElement('beforeend', divAnswer);

    

    for (let j = 0; j < quizes[i].answers.length; j++) {
        let divAnswerItem = document.createElement('div');
        divAnswerItem.classList.add('quiz-answer-item');
        divAnswer.insertAdjacentElement('beforeend', divAnswerItem);

        let input = document.createElement('input');
        input.type = 'radio';
        input.name = `${quizes[i].id}`;
        input.classList.add(`${quizes[i].id}input`)
        divAnswerItem.insertAdjacentElement('beforeend', input);
    
        let label = document.createElement('label');
        label.classList.add(`${quizes[i].answers[j]}`)
        label.innerText = `${quizes[i].answers[j]}`;
        divAnswerItem.insertAdjacentElement('beforeend', label);
    }
}

let btn = document.querySelector('button');
btn.addEventListener('click', function() {
    randomQuiz();
})

function randomQuiz() {
    let divAnswer = document.querySelectorAll('.quiz-item');
    for (let i = 0; i < divAnswer.length; i++) {
        let divAnswerItem = divAnswer[i].querySelectorAll('.quiz-answer-item');
        let range = Math.floor(Math.random() * 4);
        let input = divAnswerItem[range].querySelector('input');
        input.setAttribute('checked', 'true');
    }

}
 