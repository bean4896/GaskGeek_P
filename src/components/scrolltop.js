import React, { useEffect, useState } from 'react'

const GoTopButton = () => {
    const [ showGoTop, setShowGoTop ] = useState( false )

const handleVisibleButton = () => {
    setShowGoTop( window.pageYOffset > 50 )
}

const handleScrollUp = () => {
    window.scrollTo( { left: 0, top: 0, behavior: 'smooth' } )
}

useEffect( () => {
    window.addEventListener( 'scroll', handleVisibleButton )
}, [] )

return (
    <div className={ showGoTop ? '' : 'goTopHidden' } onClick={ handleScrollUp }>
        <button type={'button'} className='goTop p-1.5 bg-transparent rounded-3xl drop-shadow-md border-[1px] border-neutral-600 dakr:border-white backdrop-blur-md'>
<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-neutral-600 dark:fill-neutral-100" viewBox="0 0 20 20" fill="current">
  <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
</svg>
        </button>
    </div>
)
}
export default GoTopButton;