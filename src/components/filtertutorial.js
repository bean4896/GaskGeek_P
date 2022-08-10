import React from "react";
import TutorialData from "./tutorialdata";

const Filtertutorial = ({ filterItem, setItem, menuItems }) => {
    return (
        <>
            <div className="flex-row gap-2">
            <button
                    className="filter-btn mr-5"
                    onClick={() => setItem(TutorialData)}
                >
                    All
                </button>
                {menuItems.map((Val, id) => {
                    return (
                        <button
                            className="filter-btn mr-5 lg:my-5 my-2"
                            onClick={() => filterItem(Val)}
                            key={id}
                        > {Val}
                        </button>
                    );
                })}
            </div>
        </>
    );
};

export default Filtertutorial;