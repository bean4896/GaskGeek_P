import React, { useState } from "react";
import uiData from "./uidata";
import '../App.css';

const Filterui = ({ filterItem, setItem, filterBtnList }) => {
  const [isActive, setActive] = useState(false);
  const [AllActive, setAllActive] = useState(false);
  const [btnValue, setBtnValue] = useState('');
  const clickAllHandler = () => {
    setItem(uiData);
    setBtnValue('');
    setAllActive(!AllActive);
  }


  return (
    <>
      <div className="flex-row gap-2">
        <button className={AllActive ? 'filter-btn active' : 'filter-btn'} onClick={clickAllHandler}>
          All
        </button>

        {filterBtnList.map((Val, id) => {
          const clickFilterHandler = (e) => {
            filterItem(Val);
            setAllActive('');
            setActive(!isActive);
            setBtnValue(Val)
            console.log(e.target);
            console.log(btnValue);
          }
          return (
            <button className={btnValue === Val ? 'filter-btn active' : 'filter-btn'} onClick={clickFilterHandler}
              key={id}>
              {Val}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Filterui;
