import React from "react";
import GameData from "./data/gamedata";
import { useState } from "react";

const Filtergame = ({ filterItem, setItem, menuItems }) => {
    const [btnValue, setBtnValue] = useState("");
    const [allActive, setAllValue] = useState(false);
    const clickAllHandler = (e) => {
        setItem(GameData);
        setBtnValue("");
        setAllValue(!allActive);
    }

    return (
        <>
            <div className="flex-row gap-2">
                <button
                    className={allActive ? "filter-btn active" : "filter-btn"}
                    onClick={clickAllHandler}
                >
                    All
                </button>
                {menuItems.map((Val, id) => {
                    const clickFilterHandler = (e) => {
                        filterItem(Val);
                        setBtnValue(Val);
                        setAllValue(false);
                        console.log(e.target);
                        console.log(btnValue);
                    };
                    return (
                        <button
                            className={btnValue === Val ? "filter-btn active" : "filter-btn"}
                            onClick={clickFilterHandler}
                            key={id}
                        >
                            {Val}
                        </button>
                    )
                })}
            </div>
        </>
    )
};

export default Filtergame;