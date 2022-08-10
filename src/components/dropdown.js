import React, { useState } from 'react';
import { dropItems } from './dropItems';

function Dropdown() {
  const [show, setShow] = useState(false)
  return (
    <div className={show? 'dropdown-menu-open group inline-block relative' : 'group inline-block relative'}>
      <button onClick={() => setShow(!show)} onMouseLeave={() => setShow(false)} className='nav-primary' >Explore</button>
      {
        show ? <div className="absolute text-red-500 rounded p-2 -ml-4 bg-white border-[1px] border-stone-200">
          <div className="">
            <a className=" hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">UI/UX</a>
          </div>
          <div className="">
            <a className="hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">We</a>
          </div>
          <div className="">
            <a className="hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">3D</a>
          </div>
          <div className="">
            <a className="hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Tutorials</a>
          </div>
        </div>
          : null
      }
      {/* <button onClick={()=>setShow(true)} >Show</button>
     <button onClick={()=>setShow(false)} >Hide</button> */}
    </div>
  );
}

export default Dropdown;
