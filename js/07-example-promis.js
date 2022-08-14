
// Промисификация функции:
// с таймаутом 1000


// const makeOrder = dish => {
//     const DELAY = 1000;

// return new Promise((resolve, reject) => {
//     const passed = Math.random() > 0.5

// setTimeout(() => {
//     if (passed) {
//         resolve('вот ваше блюдо');
//     }
// reject('Извините, закончились продукты')


// }, DELAY);

// });

// }

// makeOrder('пирожок').then(onMakeOrderSuccess).catch(onMakeOrderError);

// function onMakeOrderSuccess(result) {
//     console.log('onMakeOrderSuccess');
//     console.log(result);
// }


// function onMakeOrderError(error) {
//     console.log('onMakeOrderError');
//     console.log(error);
// }

// ========Промисификация функции:
// ========без таймаута 1000============

// const makeOrder = (dish, onSuccess, onError) => {
    
// return new Promise((resolve, reject) => {
//     const passed = Math.random() > 0.5

//     if (passed) {
//         resolve('вот ваше блюдо');
//         }
//         reject('Извините, закончились продукты')
// });
// };

// makeOrder('пирожок').then(onMakeOrderSuccess).catch(onMakeOrderError);

// function onMakeOrderSuccess(result) {
//     console.log('onMakeOrderSuccess');
//     console.log(result);
// }

// function onMakeOrderError(error) {
//     console.log('onMakeOrderError');
//     console.log(error);
// }


// =======Promise.resolve()============

const makeOrder = dish => {
    
    return Promise.resolve(`Вот ваш заказ: ${dish}`)
    };
    
    makeOrder('пирожок').then(onMakeOrderSuccess);
    
    function onMakeOrderSuccess(result) {
        console.log('onMakeOrderSuccess');
        console.log(result);
    }
    
    function onMakeOrderError(error) {
        console.log('onMakeOrderError');
        console.log(error);
    }