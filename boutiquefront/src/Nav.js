import React from 'react';
import { useHistory } from 'react-router-dom';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

function Nav() {
    const history = useHistory();
    const logout = () => {
        localStorage.setItem("user-info", "");
        history.push("/")

    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary text-white">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/"> Boutique <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/vendeur/sidebar">Vendeur </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/acheteur/produits">Acheteur</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="http://example.com" id="dropdown08" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">User</a>
                        <div className="dropdown-menu" aria-labelledby="dropdown08">
                        <a className="dropdown-item" href="/login">Login</a>
                        <a className="dropdown-item" onClick={ logout }  href="/login">Logout</a>
                        </div>
                    </li>
                    </ul>
                </div>
                </nav>
             <br/>
        </>
    )
}

export default Nav
