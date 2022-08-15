import React from "react";
import { motion } from "framer-motion";
import "../index.css";

const UiCard = ({ item }) => {
  // destructuring props 
 
  return (
    <>

      <div className="flex-col grid lg:grid-cols-4 gap-4 md:grid-cols-2">

        {item.map((Val) => { 
          return ( 
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.4 }}
              layout key={Val.id}>
              <a href={Val.url} target="_blank" rel="noreferrer">
                <div className="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-dmbgblackie dark:border-neutral-500 overflow-hidden hover:-translate-y-2 ease-in-out duration-200">
                  <img src={Val.img} alt={Val.title} className='mb-4 featureimg' />
                  {/* 这里渲染  */}
                  {Val?.category?.map(item=><span className="card-tag" key={item}>{item}</span>)}
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white p-4">{Val.title}</h5>
                  <p className="content-short pl-4">{Val.desc}</p>
                </div>
              </a>
            </motion.div>

          );
        })}
      </div>

    </>
  );
};



export default UiCard;