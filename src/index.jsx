import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

const App = () => {
    return <>
        <div className="header">
            <p className="is-size-1">Welcome!</p>
            <p className="is-size-4">
                This is a simple example how to configure webpack with react and multiple pages.
            </p>
        </div>
        <div className="content">
            <p className="is-size-3"><b>INTRODUCTION</b></p>
            <p className="is-size-5">
                This example shows how to configure react with multiple pages.
                This approach is mainly for servers that are not node focused or just frontend 
                like apache.
            </p>
            <div className="continue">
                <a href="/login">Login</a>
            </div>
        </div>
        <footer>
            <p>
                Created by <b>SYSMA</b>
            </p>
        </footer>
    </>
}

const root = document.getElementById("root")
ReactDOM.render(<App />, root)