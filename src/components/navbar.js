import React from 'react';
import Toggle from './toggle';
import logo from '../images/logo_flat.svg';
import Dropdown from '../components/dropdown';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="/" className="flex items-center hover:scale-105 ease-in-out duration-300">
          <img src={logo} className="mr-3 h-6 sm:h-9" alt="Logo" />
          <span className="hover:text-toxic self-center text-xl text-green-deep font-semibold whitespace-nowrap dark:text-toxic dark:hover:text-toxic">Kiwi Note</span>
        </a>
  
        <div className="flex: order-last items-center inline-flex">
          <div className='pr-1.5'>  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
          </svg></div>
          <div>  <Toggle /></div>
        </div>
        
        <div className="lg:flex md:flex hidden">  
          <div className="mr-6">
            <div className='group inline-block relative'>
              <Dropdown />
            </div>
          </div>

          <div className="mr-6">
            <div className='group inline-block relative'>
              <Link to='/tutorials'>
                <button type="button" className="nav-primary" id="menu-button" aria-expanded="true" aria-haspopup="true">
                  <span className="mr-1">Learn</span>
                </button>
              </Link>
            </div>
          </div>

          <div className="mr-6">
            <div className='group inline-block relative'>
              <Link to='/info'>
                <button type="button" className="nav-primary" id="menu-button" aria-expanded="true" aria-haspopup="true">
                  <span className="mr-1">Info</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;