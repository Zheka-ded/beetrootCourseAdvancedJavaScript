 /*
1.  В элемент select вывести сгруппированный возраст
    пользователей
То есть у нас 9 пользователей и их возраст 20, 30, 40
Элемент select должен получится таким

<select>
    <option value="-1">Choose age</option>
    <option value="20">20</option>
    <option value="30">30</option>
    <option value="40">40</option>
</select>


2. При выборе соответствующего option осуществить вывод
    пользователей соответствующих выбранному возрасту
    в элемент <div id="res"></div>
То есть при выборе например 20 должны вывестись  John, Ashley, Willy
*/


const usersSelect = document.getElementById('users-select')
const res = document.getElementById('res')

let users = [
 {id: 1, name: "John", age: "20"},
 {id: 2, name: "Sasha", age: "30"},
 {id: 3, name: "Bill", age: "40"},
 {id: 4, name: "Ashley", age: "20"},
 {id: 5, name: "Rachel", age: "40"},
 {id: 6, name: "Tom", age: "30"},
 {id: 7, name: "Steve", age: "30"},
 {id: 8, name: "Jim", age: "40"},
 {id: 9, name: "Willy", age: "20"}
];

// создание option
const createOption = (out, list) => {
    
    let ageSet = new Set();

    // выбираем уникальный возраст
    list.forEach((element) => ageSet.add(element.age));

    // делаем массив из набора
    ageSet = Array.from(ageSet);

    // создаем элементы option
    ageSet.forEach((element) => {

        let optionItem = document.createElement('option');
        optionItem.setAttribute('value', element);
        optionItem.textContent = element;

        out.append(optionItem);
    })
}

// запускаем функцию создания option
createOption(usersSelect, users);

// вывод имен по выбранному возрасту
usersSelect.onchange = function () {
    // удаляум предыдущий вывод
    removeElem(res);

    // фильтруем массив по выбранному option
    let fiterAge = users.filter((element) => element.age === this.value);

    // создаем список
    let ulOut = document.createElement('ul');

    // заполняем список элементами списка
    fiterAge.forEach((element) => {
        let liItem = document.createElement('li');
        liItem.textContent = element.name;
        ulOut.append(liItem);
    })

    res.append(ulOut);
};

// удаление/очистка предыдущего ывода
const removeElem = (elem) => {
    while (elem.firstChild) elem.removeChild(elem.firstChild);
}