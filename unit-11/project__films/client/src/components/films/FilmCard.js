import React, { useState } from "react"
import PropTypes from 'prop-types'
import Featured from './Featured'

const FilmCard = ({film}) => {
    /**
     * С версткой вообще не заморачивался, да и с логткой походу тоже)))
     * но теперь могу посмотреть как ты сделал
     */
    const [eyeOn, setEyeOn] = useState(true);

    const toggleDescription = eye => eye(!eyeOn);
    const eyeCls = eyeOn ? '' : 'slash';

    return (
        <div className="ui card">
            <span className="ui right corner label">
                <i className="empty star icon" />
            </span>
            {eyeOn ? (
                <div className="image">
                    <span className="ui green label ribbon">$ {film?.price} </span>
                    <Featured featured={film.featured} id={film._id} />
                    <img src={film?.img} alt={film?.title} />
                </div>
            ) : (
                <div className="description">
                    <p>{film?.description}</p>
                </div>
            )}

            <div className="content">
                <span href="#" className="header">
                    {film?.title}
                </span>
                <div className="meta">
                    <i className="icon users" /> {film?.director}
                    <span className="right floated">
                        <i className="icon wait right" /> {film?.duration} min
                    </span>
                </div>
                
                <span onClick={() => toggleDescription(setEyeOn)}>
                    <i className={`icon link eye ${eyeCls}`}></i>
                </span>
            </div>
        </div>
    )
}


FilmCard.propTypes = {

    film: PropTypes.shape({
        title: PropTypes.string.isRequired,
        director: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        duration: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        featured: PropTypes.bool.isRequired,
    }),
    
}

export default React.memo(FilmCard)
