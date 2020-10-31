/*
При клике на любой элемент li мы в alert() получаем цифру 5
а по логике должны получать номер элемента на который кликнули

// alert()? не не не console.log())))

Задачи
1. С помощью debugger проанализировать почему так получается 
2. С помощью замыкания сделать так, чтобы при клике на элемент
   li получали его номер (let НЕ ИСПОЛЬЗОВАТЬ)
3. Выполнить задачу 2 но при этом используя объявление
   итерационной переменной через let 
   
*/

// Ответ на 1-ю задачу
// Потому что "var" и область видимости, и потому что еще до нажатия на элемент цикл уже
// отработал и записал "i" равную 5. И теперь на какой-бы элемент мы не кликнули
// "i" будеть равное 5, как-то так.

const list = document.getElementById("list"),
els = list.getElementsByTagName("li");

// Var
function withVar () {

   console.log('Используем var');

   for (var i = 0, len = els.length; i < len; i++) {
       els[i].onclick = function() {
           console.log('var - ',i);
       };
   };
};

// Замыкание
// Решение этой задачи увидел когда читал материалы к занятию
// ну пока просто смотрел на код то было понятно не так чтобы полностью, корорче терялся чтоли...
// в общем когда решал задачу, все стало на свои места
function withClosure () {

   console.log('Используем closure');

   function showElement (elem) {

      return function () {

         console.log('closure - ', elem);

      };
   };

   function selectElement () {

      for(var i = 0; i < els.length; i++) {
         
         els[i].onclick = showElement(i);
      };

   };

   selectElement();

};

// Let
function withLet () {

   console.log('Используем let');

   for (let i = 0; i < els.length; i++) {

      els[i].onclick = () => console.log('let - ',i);

   };
};

document.querySelector('.with-var').onclick = withVar;

document.querySelector('.with-closure').onclick = withClosure;

document.querySelector('.with-let').onclick = withLet;
