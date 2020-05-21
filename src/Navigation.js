/**
 * ====================================================
 *
 * Created by anele on 2020/05/19.
 *
 * @anele_ace
 *
 * ====================================================
 */
import React from "react";
import {Link} from "react-router-dom";

function Navigation () {

    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
                <a className="navbar-brand" href="/">App</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/numbers">Numbers</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>

                    </ul>
                </div>
            </nav>

            <div className="jumbotron">
                <div className="container">
                    <h1 className="display-6">Hello, world!</h1>
                    <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
                    <p><a className="btn btn-primary btn-sm" href="#" role="button">Learn more &raquo;</a></p>
                </div>
            </div>
        </div>
    )
}

export default Navigation;

