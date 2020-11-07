import { useState } from 'react';
import './SearchUserFunc.css';

export default function SearchUser (props) {
    const [text, setText] = useState('')
    /**
     * Получаем value из input и передаем его в AppClasses
     */
    const inputText = (e) => {
        setText(e.target.value)
        props.getSearchUser(e.target.value);
    }

    return (
        <input type="text" 
                placeholder="searc user"
                value={text}
                onChange={inputText}/>
    )
}