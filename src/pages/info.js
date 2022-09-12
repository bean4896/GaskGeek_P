import React from 'react';
import Navbar from '../components/navbar';


export default function info() {
  return (
    <div>
      <Navbar />
      <div className='body-container mt-10'>
        <h1 className="pagetitle pt-5">Info A</h1>
        <h2 className="text-stone-800 font-bold text-2xl 2xl:text-2xl mb-5 2xl:pb-8 dark:text-dmcontent ">About GasGeek</h2>
        <div className='info-short max-w-[700px]'><strong className='text-neutral-600 dark:text-neutral-200'>"Where and how to find good learning resources?"</strong>
         — is probably one of the most asked questions by creatives in their careers.<br /> 
         <strong className='text-neutral-600 dark:text-neutral-200'> Technologies come and go, the software and the technology we learned in school are no longer the best solutions in today's digital world. </strong>
        School won't teach you to use Figma for web designs, won't teach you to use a 3rd-party renderer like Octane to do some high-end commercial renders.
          <br /><br />
          Thus, I built this website to share my learning journey and help you to book mark up-to-date resources, the best tool for your next project.</div>
      </div>
    </div>
  );
}
