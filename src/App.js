import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import Jogs from "./pages/Jogs";
import Info from "./pages/Info";
import Add from "./pages/Add";
import MobileMenu from "./components/MobileMenu";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";

import "./App.css"

function App(props) {
    const { isAuth } = props
    return (
        <>
            <Router>
                {/* <Navbar /> */}
                <Route component={Navbar} />
                <Switch>
                    {isAuth ? (
                        <>
                            <Route path="/" component={Jogs} exact />
                            <Route path="/info" component={Info} />
                            <Route path="/contact" component={Contact} />
                            <Route path="/add" component={Add} />
                            <Route path="/menu" component={MobileMenu} />
                        </>
                    ) : (
                        <Route path="/" component={Login} />
                    )}
                </Switch>
            </Router>
        </>
    );
}

const mapStateToProps = ({ isAuth }) => ({ isAuth });

export default connect(mapStateToProps)(App);
