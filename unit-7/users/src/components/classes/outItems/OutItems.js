import React from 'react';

import './OutItems.css';

export default class OutItems extends React.Component{

    render() {

        /**
         * Получаем props users
         */
        const { users } = this.props;

        return(
            <div className="items__container">
                {/* Выводим users на страниныцу */}
                {Object.keys(users).map((elem, i) => {
                    return (
                        <div className="items" key={i}>
                            <p className="items__user-name">{users[elem].name}</p>
                            <div>
                                <span>{users[elem].username}</span>&nbsp;&nbsp;
                                <span>{users[elem].email}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}