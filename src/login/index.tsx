import * as React from "react"
import { useState } from "react"
import * as ReactDOM from "react-dom"
import "./index.css"
import * as sha256 from "crypto-js/sha256"

import { User } from "../core/user/domain/user"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [invalid, setInvalid] = useState({
        email: false,
        emailMessage: null,
        password: false,
        passwordMessage: null
    })

    const clickLogin = () => {
        let inv = { ...invalid }
        if (email === "" || password === "") {
            if (email === "") {
                inv.email = true
                inv.emailMessage = "Username is not empty"
            }
            if (password === "") {
                inv.password = true
                inv.passwordMessage = "Password is not empty"
            }
            setInvalid(inv)
            return
        }
        inv.email = false
        inv.emailMessage = null
        inv.password = false
        inv.passwordMessage = null
        setInvalid(inv)
    }

    return <>
        <div className="login">
            <label>Username</label>
            <input type="text" className={(invalid.email) ? "error" : ""}
                value={email} onChange={event => setEmail(event.target.value)} />
            {(invalid.emailMessage) && <small>{invalid.emailMessage}</small>}
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