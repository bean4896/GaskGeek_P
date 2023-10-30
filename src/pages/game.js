import React, { useState } from "react";
import Navbar from "../components/navbar";
import { motion, AnimatePresence } from "framer-motion";
import '../index.css';
import UiCard from "../components/uicard";
import GameData from "../components/data/gamedata";
import Filtergame from "../components/filtergame";

const Game = () => {
    const [item, setItem] = useState(GameData);
    const menuItems = [...new Set(GameData.map((val) => val.category).flat())];

    const FilterItems = (filcat) => {
        const newItem = GameData.filter((newVal) => {
            return newVal.category.includes(filcat);
        });
        setItem(newItem);
    }

    return (
        <>
            <Navbar />
            <div className='body-container mt-10 min-h-[80vh] relative' id='webcontain'>
                <h1 className="pagetitle pt-5">Game</h1>
                <h2 className="subtitle py-2 ">Find supreme game designs and game technologies.</h2>
                <Filtergame filterItem={FilterItems} setItem={setItem} menuItems={menuItems} />
                <AnimatePresence>
                    <motion.div layout className="mt-2">
                        <UiCard item={item} />
                    </motion.div>
                </AnimatePresence>
            </div>
        </>
    )

};

export default Game;