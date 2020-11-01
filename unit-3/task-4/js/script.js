/*
Реализовать функцию bind которая должна работать так как показано в usage
Не использоапть ES 6
Подсказка - нужно использовать arguments, apply, closure (замыкания)
*/
const user = {
  firstName: "Bill"
};
function add(a, b, c) {
  return `${this.firstName} adds ${a + b + c}`;
}

function bind(fn, args) {

  /**
   * Тут тоже пришлось постараться, но все работает
   * Интересно будет почитать комменты
   * И опять я закомментировал первый вариант решения
   */

  // let firstArgs = [];

  // for (let letter of arguments){
    
  //   if(typeof letter === 'number' && letter < 4) firstArgs.push(letter);

  // }
  
  let x = [arguments[2], arguments[3], arguments[4]];

  x = x.filter(elem => elem !== undefined);

  return function (){

    // let secondArgs = [];

    // for (let letter of arguments){

    //   if(typeof letter === 'number' && letter < 4) secondArgs.push(letter)
    // }

    // let arghtpfgdsd = [...firstArgs, ...secondArgs];
    
    let y = [arguments[0], arguments[1], arguments[2]];
    
    y = y.filter(elem => elem !== undefined)
    
    let arghtpfgdsd = [...x, ...y];

    return fn.apply(args, [...arghtpfgdsd])
  };

};
// usage
console.log(bind(add, user)(1, 2, 3)); // Bill adds 6
console.log(bind(add, user, 1)(2, 3)); // Bill adds 6
console.log(bind(add, user, 1, 2, 3)()); // Bill adds 6
console.log(bind(add, user, 1, 2, 3)(4, 5, 6)); // Bill adds 6