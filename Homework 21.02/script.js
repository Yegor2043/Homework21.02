// let num = prompt("Введите число");
// console.log(num ** 2);
// let num = prompt("Select a number")
// if(+num === 0){
// console.log("Число равно нулю")
// }
// if(+num % 2===0 && +num!==0) {
//     console.log("Число чётное")
// }
// if(+num % 2 === 1){
//     console.log("Число нечётнное")
// }
// if(+num < 0){
//     console.log("Число меньше нуля!");
// }
let variable = prompt("Введите число")
    if( variable == +variable){
    console.log("Это значение можно преобразовать в число")
    } else{
        console.log("Это значение преобразовать в число не получится. Получится NaN")
    }