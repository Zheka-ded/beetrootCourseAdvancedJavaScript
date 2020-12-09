import axios from 'axios'

// export default {
//     films: {
//         fetchAll: () => axios.get('/api/films').then(result => result.data.films),
//     },
// }

// IDE ругалась очень, когда по умолчанию передавал анонимный объект

const foo = {
    films: {
        fetchAll: () => axios.get('/api/films').then(result => result.data.films),
        create: film => axios.post('/api/films', {film}).then(result => result.data.film),
        update: film => axios.put(`/api/films/${film._id}`, {film}).then(result => result.data.film),
        delete: film => axios.delete(`/api/films/${film._id}`),
    },
}

export default foo