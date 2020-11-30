import React from 'react'
import PropTypes from 'prop-types'
import FilmCard from './FilmCard'
import Message from '../Message'

const FilmmsList = ({films}) => (
    <div className="ui four cards">
        {films.length === 0 ? (
            <Message msg='No films in our base yet' type='star outline' />
        ) : (
            films.map(film => (<FilmCard key={film._id} film={film} /> ))
        )}
    </div>
)

FilmmsList.propTypes = {
    films: PropTypes.arrayOf(PropTypes.object).isRequired,
}

FilmmsList.defaultProps = {
    films: [],
}

export default FilmmsList;