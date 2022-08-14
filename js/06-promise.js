// Базовый синтаксис promis
 


const promise = new Promise((resolve, reject) => {
    const canFulfill = Math.random() > 0.5;
setTimeout(() => {
    if(canFulfill) {
        resolve('Промис выполнился успешно, с результатом (исполнен, fulfilled)');
    }
    
    reject('Промис выполнился с ошибкой(отклонен, rejected)');


}, 2000);
});

// Цепочки промисов (chaining);

promise
.then(onFullfilled)
.then (
    x => {
        console.log(x);

throw new Error ('ошибка во втором then')

        return 10;
    },
    error => console.log(error),
)    
.then(
    y => console.log(y),
    error => console.log(error),
)

.catch(error => console.log(error))
.finally(() => console.log("Я буду выполнен в любом случае"));


function onFullfilled(result) {
    console.log(`${result}`);
}

function onRejected(result) {
    console.log(`${result}`);
}

// 2-й вариант записи

// promise.then(
//     result => {
//     console.log(result);
// },
// error => {
//     console.log(error);
// },
// )











