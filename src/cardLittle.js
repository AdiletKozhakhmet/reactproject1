import React from 'react';
import "./cardLittle.css";
import {RxTriangleUp, RxTriangleDown} from "react-icons/rx";
const CardLittle = ({part:{pageView,icons: Icons, numOfViews, procent}}) => {
  return (
    <div className='cards'>
      <div className='cards-top'>
        <p className='page-views'>{pageView}</p>
        {<Icons/>}
      </div>
      <div className='cards-bottom'>
        <p className='views-num'>{numOfViews}</p>
        <p className={procent > 0 ? "cards-text" : "cards-text red"}>
            {procent > 0 ? <RxTriangleUp /> : <RxTriangleDown/>}{" "} 
            {procent} %
        </p>
      </div>
    </div>
  )
}

export default CardLittle