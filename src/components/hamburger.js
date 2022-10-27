import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";



export default function Hamburger() {
  const ref = useRef()
  const [isMenuOpen, setIsMenuOpen] = useState(false)


  useEffect(() => {
    const checkIfClickedOutside = e => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", checkIfClickedOutside)
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [isMenuOpen])

  const toggleBtnHandler = () => {
    setIsMenuOpen(oldState => !oldState);
  }

  return (
    <div className="container md:hidden" ref={ref}>
{/* toggle btn */}
    <div>
      <button className="toggleIcon group w-fit" onClick={toggleBtnHandler}>
        <div className="relative flex overflow-hidden items-center justify-center rounded-full w-10 h-10 transform transition-all bg-toxic duration-200">
          <div className="flex flex-col justify-between w-[18px] h-[18px] transform transition-all duration-300 origin-center overflow-hidden">
            <div style={{transform: !isMenuOpen ? '' : 'rotate(45deg)'}} className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left"></div>
            <div style={{transform: !isMenuOpen ? '' : 'translateX(-10px)'}}  className="bg-white h-[2px] w-1/2 rounded transform transition-all duration-300"></div>
            <div style={{transform: !isMenuOpen ? '' : 'rotate(-45deg)'}} className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left"></div>
          </div>
        </div>
      </button>
    </div>

      {isMenuOpen &&  (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="md:hidden fixed left-4 bottom-3"
        >
          <div className=" bg-white border-gray-200 border-[1px] dark:bg-dmbgblackie dark:border-neutral-500 dark:border-[1px] rounded-lg shadow-xl">
            <ul className="list-none p-[18px] flex flex-col space-y-3">

              <div className="text-base font-bold text-neutral-600 dark:text-neutral-100 mt-0">
                Explore
              </div>
    
        {/* {mobileNav.map(item => (
          <li key={item.id} onClick={navHandler}>
           <div className="flex space-x-2 threed-content align-middle">
            <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
                {item.title}
                </div>
              
          </li>     
        ))} */}


              <Link onClick={toggleBtnHandler}
                to="/web"
                className="flex space-x-2 threed-content align-middle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
                <li>Web</li>
              </Link>

              <Link onClick={toggleBtnHandler}
                to="/uiux"
                className="flex space-x-2 threed-content align-middle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <li>UI/UX</li>
              </Link>

              <Link onClick={toggleBtnHandler}
                to="/threed"
                className="flex space-x-2 threed-content align-middle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z"
                    clipRule="evenodd"
                  />
                </svg>
                <li>3D</li>
              </Link>

              <Link onClick={toggleBtnHandler}
                to="/tutorials"
                className="flex space-x-2 threed-content align-middle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                <li>Learn</li>
              </Link>
            </ul>
          </div>
        </motion.div>
      )}
    </div>
  );
}
