import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Jog } from "../components/Jog";
import { ReactComponent as SadIcon } from "../img/sad-rounded-square-emoticon.svg";
import { ReactComponent as PlusIcon } from "../img/add.svg";

import "./jogs.css";
import { NavLink } from "react-router-dom";

const Jogs = (props) => {
    const [jogs, setJogs] = useState([]);
    const [filteredJogs, setFilteredJogs] = useState([]);
    const [filterFrom, setFilterFrom] = useState();
    const [filterTo, setFilterTo] = useState();

    useEffect(() => {
        setJogs(props.jogs);
        setFilteredJogs(props.jogs);
    }, []);
    const onFilterChanged = (e) => {
        let filtered = jogs;
        if (e.target.name === "dFrom") {
            filtered = filtered.filter(
                (jog) =>
                    Date.parse(jog.date) > Date.parse(e.target.value) &&
                    Date.parse(jog.date) < Date.parse(filterTo)
                    )
            setFilteredJogs(filtered);
            setFilterTo(e.target.value)
        }
        if (e.target.name === "dTo") {
            filtered = filtered.filter(
                (jog) =>
                    Date.parse(jog.date) < Date.parse(e.target.value) &&
                    Date.parse(jog.date) > Date.parse(filterFrom)
            );
            setFilterFrom(e.target.value);
            setFilteredJogs(filtered);
        }
    };
    return (
        <>
            {jogs.length ? (
                <div className="filters-block">
                    <div className="filter">
                        <div className="filter-label">Date from</div>
                        <input
                            className="filter-input"
                            onChange={onFilterChanged}
                            type="date"
                            name="dFrom"
                        ></input>
                    </div>
                    <div className="filter">
                        <div className="filter-label">Date to</div>
                        <input
                            className="filter-input"
                            onChange={onFilterChanged}
                            name="dTo"
                            type="date"
                        ></input>
                    </div>
                </div>
            ) : null}
            <div className="jogs">
                {filteredJogs.length ? (
                    filteredJogs.map((item) => (
                        <Jog
                            speed={item.speed}
                            distance={item.distance}
                            time={item.time}
                            key={item.id}
                        />
                    ))
                ) : (
                    <>
                        <SadIcon className="sad-icon" />
                        <div className="nothing-text">Nothing is there</div>
                        <NavLink className="create-btn" to="/add">
                            Create your jog first
                        </NavLink>
                    </>
                )}
            </div>
            {filteredJogs.length ? (
                <NavLink className="plus" to="/add">
                    <PlusIcon />
                </NavLink>
            ) : null}
        </>
    );
};

const mapStateToProps = ({ jogs }) => ({ jogs });
export default connect(mapStateToProps)(Jogs);
