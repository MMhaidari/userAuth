import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthProvider";
import './Navbar.css'


const Navbar = () => {
    const { setAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    const logout = async () => {
        setAuth({});
        navigate('/login');
    }

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">
                    <FontAwesomeIcon icon={faHome} className="icon" />
                    Personalized Dashboard
                </Link>
            </div>
            <div className="navbar-items">
                <Link to="/profile">
                    <FontAwesomeIcon icon={faUser} className="icon" />
                    Profile
                </Link>
                <Link to="/settings">
                    <FontAwesomeIcon icon={faCog} className="icon" />
                    Settings
                </Link>
                <button className="logout-button" onClick={logout}>
                    <FontAwesomeIcon icon={faSignOutAlt} className="icon" />
                    Sign Out
                </button>
            </div>
        </nav>
    );
};

export default Navbar;