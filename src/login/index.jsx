import React, { useState } from "react"
import ReactDOM from "react-dom"
import "./index.css"
import sha256 from "crypto-js/sha256"

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [invalid, setInvalid] = useState({
        username: false,
        usernameMessage: null, 
        password: false, 
        passwordMessage: null
    })

    const clickLogin = () => {
        let inv = { ...invalid }
        if(username === "" || password === "") {
            if(username === "") {
                inv.username = true
                inv.usernameMessage = "Username is not empty"
            }
            if(password === "") {
                inv.password = true
                inv.passwordMessage = "Password is not empty"
            }
            setInvalid(inv)
            return
        }
        inv.username = false
        inv.usernameMessage = null
        inv.password = false
        inv.passwordMessage = null
        setInvalid(inv)
    }

    return <>
        <div className="login">
            <label>Username</label>
            <input type="text" className={(invalid.username) ? "error" : ""} 
                value={username} onChange={event => setUsername(event.target.value)} />
            {(invalid.usernameMessage) && <small>{invalid.usernameMessage}</small>}
            <label>Password</label>
            <input type="password" className={(invalid.password) ? "error" : ""} 
                value={password} onChange={event => setPassword(event.target.value)} />
            {(invalid.passwordMessage) && <small>{invalid.passwordMessage}</small>}
            <button className="loginButton"
                onClick={clickLogin}>
                Login
            </button>
        </div>
    </>
}

const root = document.getElementById("root")
ReactDOM.render(<Login />, root)