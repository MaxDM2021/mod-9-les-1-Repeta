
// Unix-время Кол-во милисекунд (3000) с 1970-го гда
const date =new Date(3000);

// Точное кол-во милисекунд с 1970-го года
console.log(date.getTime());

const date1 = Date.now();
console.log('date1', date1);

setTimeout(() => {
const date2 = Date.now();

console.log('date1', date1);
console.log('date2', date2);

console.log(date2 - date1)

}, 3000);



