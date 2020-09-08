import React from "react";
import { ReactComponent as JogLogo } from "../img/icon.svg";
import "./jog.css";

export const Jog = (props) => {
    const { speed, distance, time } = props;
    return (
        <div className="jog">
            <JogLogo className="jog-logo" />
            <div className="jog-info">
                <div className="jog-date">10.09.2019</div>
                <div className="jog-speed">
                    <b>Speed:</b> {speed}
                </div>
                <div className="jog-distance">
                    <b>Distance:</b> {distance} km
                </div>
                <div className="jog-Time">
                    <b>Time:</b> {time} min
                </div>
            </div>
        </div>
    );
};
