import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addJog } from "../actions";
import { ReactComponent as CloseIcon } from "../img/cancel.svg";
import { NavLink } from "react-router-dom";

import "./add.css";

export const Add = (props) => {
    const [jogInfo, setJogInfo] = useState({});
    const handleSubmit = () => {
        props.addJog(jogInfo);
    };
    useEffect(() => {
        console.log(jogInfo);
    }, [jogInfo]);
    const handleInputChange = (event) => {
        const target = event.target;
        const value = event.target.value;
        const name = target.name;
        setJogInfo({ ...jogInfo, [name]: value });
    };
    return (
        <div className="content">
            <div className="box">
                <NavLink to="/">
                    <CloseIcon className="closeIcon" />
                </NavLink>
                <form className="input" onSubmit={handleSubmit}>
                    <div className="input-row">
                        <div className="input-label">Distance</div>
                        <input
                            className="input-field"
                            value={jogInfo.distance}
                            type="number"
                            name="distance"
                            onChange={handleInputChange}
                        ></input>
                    </div>
                    <div className="input-row">
                        <div className="input-label">Time</div>
                        <input
                            className="input-field"
                            value={jogInfo.time}
                            type="number"
                            name="time"
                            onChange={handleInputChange}
                        ></input>
                    </div>
                    <div className="input-row">
                        <div className="input-label">Date</div>
                        <input
                            className="input-field"
                            value={jogInfo.date}
                            type="date"
                            name="date"
                            onChange={handleInputChange}
                        ></input>
                    </div>
                </form>
                <NavLink className="save-btn" to="/" onClick={handleSubmit}>
                    Save
                </NavLink>
            </div>
        </div>
    );
};

export default connect(null, { addJog })(Add);
