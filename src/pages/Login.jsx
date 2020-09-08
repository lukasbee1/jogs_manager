import React from "react";
import { connect } from "react-redux";
import { ReactComponent as BearFaceSvg } from "../img/bear-face.svg";
import { tryAuth } from "../actions";

import "./login.css";

const Login = (props) => {
    const onLogin = () => {
        const requestOptions = {
            method: "POST",
            body:
                "uuid=Bearer%20eb8cdf9e61521369da24ab55f0095f5da870881990d9b75daefef50333178daf",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/x-www-form-urlencoded",
            },
        };
        fetch(
            "https://jogtracker.herokuapp.com/api/v1/auth/uuidLogin",
            requestOptions
        )
            .then((response) => response.json())
            .then((data) => {
                localStorage.setItem("userToken", data.timestamp);
                props.tryAuth(true);
                console.log("token was saved");
            })
            .then(() => {
                props.history.push("/");
            });
    };

    return (
        <>
            <div className="login">
                <div className="login-card">
                    <BearFaceSvg className="login-bear" />
                    <div className="login-btn" onClick={onLogin}>
                        Let me in
                    </div>
                </div>
            </div>
        </>
    );
};

export default connect(null, { tryAuth })(Login);
