import React from "react"
import ReactDOM from "react-dom"

import caramelo from "../assets/img/caramelo.jpg"

const Login = () => {
    return <div>
        <h2>LOGIN</h2>
        <img src={caramelo} alt="caramelo.jpg" />
    </div>
}

const root = document.getElementById("root")
ReactDOM.render(<Login />, root)