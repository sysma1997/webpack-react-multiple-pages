import * as React from "react"
import * as ReactDOM from "react-dom"
import "./index.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

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
            <p className="is-size-4"><b>Backend</b></p>
            <ul className="is-size-5">
                <li>
                    Apache (Server)
                    <ul><li>php</li></ul>
                </li>
            </ul>
            <p className="is-size-4"><b>Frontend</b></p>
            <ul className="is-size-5">
                <li>Html</li>
                <li>Css</li>
                <li>
                    Javascript:
                    <ul>
                        <li>Webpack</li>
                        <li>babel</li>
                        <li>React</li>
                        <li>CssLoader</li>
                        <li>HtmlWebpackLoader</li>
                    </ul>
                </li>
            </ul>
            <div className="continue">
                <a href="/login">
                    <b>LOGIN</b>
                    {'  '}
                    <FontAwesomeIcon icon={faArrowRight} />
                </a>
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