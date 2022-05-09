import * as React from "react"
import { useState } from "react"
import * as ReactDOM from "react-dom/client"
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
        passwordMessage: null,
        message: null
    })

    const _validateEmail = (email: string) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
    }

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
        if (!_validateEmail(email)) {
            inv.email = true
            inv.emailMessage = "Email not is valid"
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
            <label>Email</label>
            <input type="email" className={(invalid.email) ? "error" : ""}
                value={email} onChange={event => setEmail(event.target.value)} />
            {(invalid.emailMessage) && <small className="sError">
                {invalid.emailMessage}
            </small>}
            <label>Password</label>
            <input type="password" className={(invalid.password) ? "error" : ""}
                value={password} onChange={event => setPassword(event.target.value)} />
            {(invalid.passwordMessage) && <small className="sError">
                {invalid.passwordMessage}
            </small>}
            {(invalid.message) && <small className="sError">
                {invalid.message}
            </small>}
            <br />
            <button className="loginButton"
                onClick={clickLogin}>
                Login
            </button>
        </div>
    </>
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Login />)