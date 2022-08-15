const horses = [
    'Secretarial',
    'Eclips',
    'West Australian',
    'Fluing Fox',
    'Sebiscult',
]

let raceCounter = 0;

refs = {
    startBtn: document.querySelector('.js-start-race'),
    winnerField: document.querySelector('.js-winner'),
    progressField: document.querySelector('.js-progress'),
    tableBody: document.querySelector('.js-results-table > tbody'),
};

refs.startBtn.addEventListener('click', onStart)
    
    function onStart () {
    raceCounter += 1;
    const promises = horses.map(run);
   
    updateWinnerField('');
    updateProgressField('Заезд начался, ставки не принимаются!');
    determineWinner(promises);
    waitForAll(promises);

};

// Promise.race для ожидания первого выполнившегося промиса

function determineWinner (horsesP) { 
    Promise.race(horsesP).then(({horse, time}) => 
   {updateWinnerField(
   `Победил ${horse}, финишировал за ${time} времени`);
    updateResultTable({ horse, time, raceCounter })
});
};


function updateWinnerField(message) {
    refs.winnerField.textContent = message;
}

// // Promise.all для ожидания всех выполнившихся промисов

function waitForAll (horsesP) {
    Promise.all(horsesP).then(() => {
        updateProgressField('Заезд окончен, принимаются ставки!');
    });
}

function updateProgressField(message) {
    refs.progressField.textContent = message;
}

function updateResultTable({horse, time, raceCounter}) {
    const tr = `<tr><td>${raceCounter}</td><td>${horse}</td><td>${time}</td></tr>`;
    refs.tableBody.insertAdjacentHTML('beforeend', tr);
}



function run(horse) {
    return new Promise((resolve) => {
const time = getRandomTime(2000, 3500)

    setTimeout(() => {
    resolve({horse, time})
}, time);
});
}




function getRandomTime (min, max) {
return Math.floor(Math.random() * (max - min + 1) + min);
}


