import React from "react";
import { motion } from "framer-motion";
import "../index.css";

const TutorialCard = ({ item }) => {
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
                            <div className="mt-20">

                                <a target="_blank" rel="noreferrer" href={Val.url} className="container-box relative shadow rounded-lg mx-auto block">
                                    <div className="flex justify-center">
                                        <img src={Val.img} alt={Val.title} className="rounded-full mx-auto absolute -top-16 w-28 h-28 shadow-md border-2 border-neutral-100 transition duration-200 transform hover:scale-110" />
                                    </div>

                                    <div className="mt-16">
                                        <h1 className="font-bold text-center text-2xl text-neutral-600 dark:text-neutral-200">{Val.title}</h1>
                                        <p className="text-center mt-1 text-sm text-neutral-400 dark:text-neutral-500 font-bold">{Val.subtitle}</p>

                                        <div className="w-full">

                                            <div className="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
                                                <div className="w-full border-t border-gray-200 dark:border-neutral-600 text-neutral-500 dark:text-dmcontent py-4 pl-6 pr-3 block">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="rounded-full h-6 inline-block mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                                    </svg>
                                                    {Val.badgeone}
                                                </div>

                                                <div className="w-full border-t border-gray-200 dark:border-neutral-600 text-neutral-500 dark:text-dmcontent py-4 pl-6 pr-3 block">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="rounded-full h-6 inline-block mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                                                    </svg>
                                                    {Val.badgetwo}
                                                </div>

                                                <div className="w-full border-t border-gray-200 dark:border-neutral-600 text-neutral-500 dark:text-dmcontent py-4 pl-6 pr-3 block">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="rounded-full h-6 inline-block mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                    {Val.badgethree}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

        </>
    );
};


export default TutorialCard;
