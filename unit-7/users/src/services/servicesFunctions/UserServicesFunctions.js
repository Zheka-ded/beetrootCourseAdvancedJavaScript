const UserServiceFunctions = {

    /**
     * Базовый url
     */
    _baseApi: 'https://jsonplaceholder.typicode.com',

    /**
     * Получаем api/данные
     */
    getResource: async function (url) {

        const res = await fetch(`${this._baseApi}${url}`);

        if(!res.ok) console.log("Хрень какая-то творится");

        return await res.json();
    },

    /**
     * Получаем пользователей
     */
    getUsers: async function () {
        const res = await this.getResource('/users');

        return res;
    },

    /**
     * Получаем посты
     */
    getPosts: async function () {
        const res = await this.getResource('/posts');

        return res;
    },

};

export default UserServiceFunctions;