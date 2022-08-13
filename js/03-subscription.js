



const PROMPT_DELAY = 3000;
const MAX_PROMPT_ATTEMPTS = 3;

let promptCounter = 0;
let hasSubscribed = true;

const intervalId = setInterval(() => {
if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed){
    console.log('нужно остановить интервал');
    clearInterval(intervalId );
    return;
}


console.log('Подпишись на рассылку! - ' +Date.now())
promptCounter +=1;
}, PROMPT_DELAY)