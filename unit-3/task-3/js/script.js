/* 
Код работает, но не защищен - клментский код может удалить элементы массива  из-вне
Исправить этот недостаток 
*/

function getUsers() {
    const _users = ["Bill"];
    return {
        addUser: function(name) {
            _users.push(name);
            return _users;
        },
        getUsers: function() {
            /**
             * Иньересно на сколько это решение правильное
             */
            let users = _users.map((elem) => elem);
            return users;

            /**
             * А так можно? По сути это одно и тоже
             */
            // return _users.map((elem) => elem);
        }
    };
}
  
const u = getUsers();
u.addUser("Jim");
u.addUser("Paul");
console.log(u.getUsers()); // выведется [ 'Bill', 'Jim', 'Paul' ]

u.getUsers().pop(); // удаляем 2-й элемент массива
console.log(u.getUsers()); //  ['Bill', 'Jim']
u.getUsers().pop(); // удаляем 2-й элемент массива
console.log(u.getUsers()); //  ['Bill', 'Jim']
u.getUsers().pop(); // удаляем 2-й элемент массива
console.log(u.getUsers()); //  ['Bill', 'Jim']
u.getUsers().pop(); // удаляем 2-й элемент массива
console.log(u.getUsers()); //  ['Bill', 'Jim']