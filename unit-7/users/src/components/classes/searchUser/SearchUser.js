import React from 'react';

import './SearchUser.css';

export default class SearchUser extends React.Component {

    constructor(props){
        super(props);
        this.state={
            text: '',
        }
    }

    /**
     * Получаем value из input и передаем его в AppClasses
     */
    inputText = (e) => {
        const text = e.target.value;
        this.setState({ text });
        this.props.searchUser(text);
    }

    render() {

        return (
            <input type="text" 
                    placeholder="searc user"
                    value={this.state.text}
                    onChange={this.inputText}/>
        )
    }
}