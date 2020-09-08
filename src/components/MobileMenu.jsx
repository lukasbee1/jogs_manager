import React from "react";
import { ReactComponent as CancelLogo } from "../img/cancel.svg";
import { ReactComponent as BearLogo } from "../img/logo.svg";
import { NavLink } from "react-router-dom";
import "./menu.css";

const MobileMenu = () => {
    return (
        <div className="menu">
            <div className="header">
                <BearLogo className="logo" />
                <NavLink to="/">
                    <CancelLogo className="cancel-logo" />
                </NavLink>
            </div>
            <div className="menu-content">
                <NavLink className="menu-item" to="/">JOGS</NavLink>
                <NavLink className="menu-item" to="/info">INFO</NavLink>
                <NavLink className="menu-item" to="/contact">CONTACT</NavLink>
            </div>
        </div>
    );
};
export default MobileMenu