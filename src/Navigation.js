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
                <a className="navbar-brand" href="#">App</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" basename={process.env.PUBLIC_URL}>Home</Link>
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


        </div>
    )
}

export default Navigation;

