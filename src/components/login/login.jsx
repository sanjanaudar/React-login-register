import React from 'react'
import loginImg from '../../login.svg'

function Login(props) {
    return (
        <div className="base-container" ref={props.containerRef}>
            {/* <div className="header">Login</div> */}
            <div className="content">
                <div className="image">
                    <img src={loginImg} alt="login"/>
                </div>
                <div className="form">
                    <div className="form-group">                 
                        <h3>Login</h3>
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" placeholder="username"></input>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="password"></input>
                        <label className= "hiding" htmlFor="username">Username</label>
                        <input className= "hiding" type="text" name="username" placeholder="username"></input>
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="button" className="btn">Login</button>
            </div>
        </div>
    )
}

export {Login};
