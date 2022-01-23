import React from 'react';
import {Link} from 'react-router-dom';

const Nav = ( props:{name:string}) => {
    const logout = async () => {
        await fetch("http://localhost:5000/api/logout", {
            method: 'POST',
            credentials: 'include',
            headers: {'Content-Type': 'application/json'},
        });
    }
    let menu;
    if(props.name === ''){
        menu = (
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                    <Link to="/login" className="nav-link active" >Login</Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link active" >Register</Link>
                </li>
            </ul>
        )

    }else{
        menu = (
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                    <Link to="/login" className="nav-link active" onClick={logout}>Logout</Link>
                </li>

            </ul>
        )
    }
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            <div className="container-fluid">
                <Link to="/" className="nav-link active" >Home</Link>
                <div>{menu}</div>
            </div>
        </nav>
    )
}
export default Nav;
