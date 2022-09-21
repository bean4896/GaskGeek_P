import React, { useState} from "react";
import Navbar from "../components/navbar";
import { motion, AnimatePresence } from "framer-motion";
import '../index.css';
import UiCard from "../components/uicard";
import WebData from "../components/data/webdata";
import Filterweb from "../components/filterweb";

const Web = () => {  
    const [item, setItem] = useState(WebData);
    const menuItems = [...new Set(WebData.map((Val) => Val.category).flat())];

    const filterItem = (filcat) => {

        const newItem = WebData.filter((newVal) => {
            return newVal.category.includes(filcat);
            // comparing category for displaying data
        });
        setItem(newItem);
    };
    return (
        <>
            <Navbar />
            <div className='body-container mt-10 min-h-[80vh] relative' id='webcontain'>
                <h1 className="pagetitle pt-5">Web</h1>
                <h2 className="subtitle py-2 ">Find supreme web designs and web technologies.</h2>
                <Filterweb filterItem={filterItem} setItem={setItem}
                    menuItems={menuItems} />
                <AnimatePresence>
                    <motion.div layout className="mt-2">
                        <UiCard item={item} />
                    </motion.div>
                </AnimatePresence>

            </div>
        </>
    );

};

export default Web;