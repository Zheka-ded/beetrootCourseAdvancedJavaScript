import './OutItemsFunc.css';

export default function OutItems (props) {
    /**
     * Получаем props users
     */
    const { users } = props;

    return(

        <div className="items__container">
            {/* Выводим users на страниныцу */}
            {/* Какой вариант лучше использовать этот или тот что закомментирован?*/}
            {(users.map((elem, i) => {
                return (
                    <div className="items" key={i}>
                        <p className="items__user-name">{elem.name}</p>
                        <div>
                            <span>{elem.username}</span>&nbsp;&nbsp;
                            <span>{elem.email}</span>
                        </div>
                    </div>
                )
            }))}

            {/* {Object.keys(users).map((elem, i) => {
                return (
                    <div className="items" key={i}>
                        <p className="items__user-name">{users[elem].name}</p>
                        <div>
                            <span>{users[elem].username}</span>&nbsp;&nbsp;
                            <span>{users[elem].email}</span>
                        </div>
                    </div>
                )
            })} */}

        </div>
    )
}