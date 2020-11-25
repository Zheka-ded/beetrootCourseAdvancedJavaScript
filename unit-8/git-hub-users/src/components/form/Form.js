import React from 'react';

import './Form.css';

export default class Form extends React.Component{
    state = {
        value: '',
    }

    update = event => this.setState({ value: event.target.value })

    hendelSubmit = event => {
        event.preventDefault();
        this.props.submit(this.state.value);
        this.setState({ value: '' });
    }

    render() {
        return(
            <form onSubmit={this.hendelSubmit} >
                <div className="form-box">
                    <div className="form-box__item">
                        <input type="text"
                                value={this.state.value}
                                onChange={this.update} />
                        <button>Add user</button>
                    </div>
                </div>
            </form>
        )
    }
}