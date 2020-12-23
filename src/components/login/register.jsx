import React from 'react'
import loginImg from '../../login.svg'

function Register(props) {
    return (
        <div className="base-container" ref={props.containerRef}>
            {/* <div className="header">Register</div> */}
            <div className="content">
                <div className="image">
                    <img src={loginImg} alt="register"/>
                </div>
                <div className="form">
                    <div className="form-group">
                    <h3>Register</h3>
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" placeholder="username"></input>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="email"></input>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="password"></input>
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="button" className="btn">Register</button>
            </div>
        </div>
    )
}

export {Register}
