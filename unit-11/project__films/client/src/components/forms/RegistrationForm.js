import React from 'react'

export default function RegistrationForm () {

    return(
        <form className="ui form">
            <div className="ui grid">
                <div className="field">
                    <label>Email</label>
                    <input type="email"  name="email" id="email" placeholder="Email"/>
                </div>

                <div className="field">
                    <label>Password</label>
                    <input type="password"  name="password" id="password" placeholder="Password"/>
                </div>

                <div className="field">
                    <label>Confirm Password</label>
                    <input type="password"  name="confirm_password" id="confirm_password" placeholder="Confirm Password"/>
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