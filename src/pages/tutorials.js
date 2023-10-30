import Navbar from "../components/navbar";
import TutorialData from "../components/data/tutorialdata";
import TutorialCard from "../components/tutorialcard";
// import Filtertutorial from "../components/filtertutorial";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

const Tutorial = () => {
  const [item, setItem] = useState(TutorialData);
//   const filterItem = (filcat) => {
//       const newItem = TutorialData.filter((newVal) => {
//           return newVal.category === filcat;
//           // comparing category for displaying data
//       });
//       setItem(newItem);
//   };
  return (
      <>
          <Navbar />
          <div className='body-container mt-10 min-h-[80vh]'>
              <h1 className="pagetitle pt-5">Learn</h1>
              <h2 className="subtitle py-2 ">
              Always learning,       
              always growing.
              </h2>
 
              <AnimatePresence>
                  <motion.div layout className="mt-2">
                      <TutorialCard item={item} />
                  </motion.div>
              </AnimatePresence>
          </div>
      </>
  );

};

export default Tutorial;
