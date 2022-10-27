import React from 'react'
import Navbar from "../components/navbar";
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
   
    let navigate = useNavigate();
    const routeChange = () => {
        let path = '/';
        navigate(path);
    }

    return (
        <>
        <Navbar />
        <div className='body-container mt-10'>
        <h1 className="pagetitle text-center">404</h1>
       <div className='flex flex-col items-center'>
        <div className='content-short'>
            Sorry, the page you were looking for could not be found.
        </div>
        <div className='block'>
        <button onClick={routeChange} className='filter-btn m-0' >Back To Home</button>
        </div>
        </div> 
            </div>
        </>
    )
}

export default PageNotFound;