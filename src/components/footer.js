import React from 'react';

export default function footer() {
    return (
        <div className='body-container mt-10'>
            <div className='text-neutral-900 dark:text-neutral-100 text-4xl 2xl:text-5xl 2xl:pt-6 md:text-7xl'>Spread the word</div>
            <div className="flex flex-nowrap gap-4 dark:text-neutral-500 mt-5 ml-1">
                <div>Share To:</div>
                <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=kiwinote.app" rel="noreferrer" className='textlink'>Facebook</a>
                <a target="_blank" href="https://twitter.com/intent/tweet?url=https://kiwinote.app/&text=A%20curated%20resource%20to%20help%20you%20find%20trending%20design,%20inspiration%20and%20latest%20web%20technologies." rel="noreferrer" className='textlink'>Twitter</a>
            </div>
            <div className='md:justify-between md:flex my-10 ml-1 text-neutral-400'>
                <div className='dark:text-neutral-500'>Built by <a href="https://www.keyi48.com" target="_blank" rel="noreferrer" className='textlink'>KeYi</a> | <a href="mailto:keyiwebproject@gmail.com" className='textlink' >keyiwebproject@gmail.com</a></div>
                <div className='dark:text-neutral-500'>© 2022 | Last updated 2023/02/25</div>
            </div>
        </div>



    )
}