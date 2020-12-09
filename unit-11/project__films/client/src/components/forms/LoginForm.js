import React from 'react'

export default function LoginForm () {

    return(
        <form className="ui form">
            <div className="ui grid">
                <div className="field">
                    <label>Email</label>
                    <input type="email"  name="email" id="login_email" placeholder="Email"/>
                </div>
                
                <div className="field">
                    <label>Password</label>
                    <input type="password"  name="password" id="login_password" placeholder="Password"/>
                </div>

                <div className="ui fluid buttons">
                    <button className="ui button primary">OK</button>
                    <div className="or" />
                    <button className="ui button">Cancel</button>
                </div>
            </div>
        </form>
    )
}