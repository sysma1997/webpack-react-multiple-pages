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