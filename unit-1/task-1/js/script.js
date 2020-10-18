// Написать функцию map, которая будет принимать в качестве
// аргумента массив arr и функцию, которая в свою очередь будет
// осуществлять преобразование массива arr  в вид
 // [ "<li class="list-group-item">Tom</li>", ....]
// и выводить элементы массива в ul с id="list"
// Вывод должен осуществляться в отсортированном по алфавиту виде

let arr = ["Tom", "Steve", "Bill", "Rita", "Pete", "Ashley"];
const list = document.getElementById('list');

// Сигнатура map
function map(list, fn){
    // todo
    fn.forEach((element) => list.append(element));
}

map(list, createList(arr));

function createList (arr) {

    let sortListItem = arr.sort().map((element) => {

        let listItem = document.createElement('li');
        listItem.classList.add('list-group-item');
        listItem.textContent = element;

        return listItem;
    });

    return sortListItem;
};