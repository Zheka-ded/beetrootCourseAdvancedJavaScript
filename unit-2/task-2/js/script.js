/*
 * Написать функцию sum(a), которая должна вызываться как
 *    sum(a)(b)  и возвращать сумму двух чисел
 *   Например  sum(3)(1) -> 4  , sum(7)(-1) -> 6
 * */

function sum (a) {
    return function (b) {
        return a + b;
        // console.log(a + b);
    };
}

console.log(sum(4)(-3));
console.log(sum(3)(1));
console.log(sum(7)(-1));
// sum(4)(-3);
// sum(3)(1);
// sum(7)(-1);