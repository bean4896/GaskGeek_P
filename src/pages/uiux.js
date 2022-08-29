import React, { useState } from "react";
import Navbar from '../components/navbar';
import UiData from '../components/data/uidata';
import UiCard from "../components/uicard";
import Filterui from "../components/filterui";
import { motion, AnimatePresence } from "framer-motion";
import '../index.css';

const Uiux = () => {
    const [item, setItem] = useState(UiData);
    const filterItems = [...new Set(UiData.map((Val) => Val.category).flat())];

    const filterItem = (filcat) => {
        const newItem = UiData.filter((newVal) => {
            return newVal.category.includes(filcat);
            // return newVal.category === filcat;
            // comparing category for displaying data
        });
        setItem(newItem);
    };
  
    return (
        <>
            <Navbar />
            <div className='body-container mt-10 min-h-[80vh]'>
            <h1 className="pagetitle pt-5">UI/UX</h1>
            <h2 className="subtitle py-2">Innovative UI/UX Resources</h2>
                        <Filterui filterItem={filterItem} setItem={setItem}
                            filterBtnList={filterItems}/> 
                            <AnimatePresence>                                              
                              <motion.div layout className="mt-2">                               
                                <UiCard item={item} />                            
                                </motion.div> 
                                </AnimatePresence>                                                                           
            </div>
        </>
    );
};

export default Uiux;