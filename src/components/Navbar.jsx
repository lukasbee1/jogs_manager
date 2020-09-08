import React, { useEffect } from "react";
import { ReactComponent as ReactLogo } from "../img/logo.svg";
import { ReactComponent as FilterIcon } from "../img/filter.svg";
import Toaster from "../img/menu.png";
import { NavLink } from "react-router-dom";

import "./navbar.css";
import { connect } from "react-redux";

const Navbar = (props) => {
    const { isAuth } = props;
    useEffect(() => {
        console.log(isAuth);
    }, []);
    return (
        <div className="navbar">
            <NavLink to="/">
                <ReactLogo className="navbar-logo" />
            </NavLink>
            {isAuth ? (
                <>
                    <ul className="rightMenu">
                        <NavLink
                            className="rightMenu-item"
                            activeClassName="rightMenu-item--active"
                            to="/"
                        >
                            JOGS
                        </NavLink>
                        <NavLink
                            className="rightMenu-item"
                            activeClassName="rightMenu-item--active"
                            to="/info"
                        >
                            INFO
                        </NavLink>
                        <NavLink
                            className="rightMenu-item"
                            activeClassName="rightMenu-item--active"
                            to="/contact"
                        >
                            CONTACT US
                        </NavLink>
                        <NavLink className="rightMenu-item filterIcon" to="/">
                            <FilterIcon />
                        </NavLink>
                    </ul>
                    <NavLink className="toaster" to="/menu">
                        <img className="" src={Toaster} alt="Toaster" />
                    </NavLink>
                </>
            ) : null}
        </div>
    );
};

const mapStateToProps = ({ isAuth }) => ({ isAuth });
export default connect(mapStateToProps)(Navbar);
