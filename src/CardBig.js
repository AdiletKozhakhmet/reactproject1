import React from "react";
import "./CardBig.css";
import {RxTriangleUp, RxTriangleDown} from "react-icons/rx";

const CardBig = ({card:{profile,numOfFollowers,followers,today, icon: Icon}, increment,}) => {
  return (
    <div className="card">
      <div className="card-top">
        {< Icon />}
        <span className="card-top-text">{profile}</span>
      </div>
      <div className="card-middle">
          <span className="card-number">{numOfFollowers}</span>
          <span className="card-text">{followers}</span>
      </div>
      <div className="card-bottom">
          <span className={today + increment > 0 ? "card-text" : "card-text red"}>
            {today + increment > 0 ? <RxTriangleUp /> : <RxTriangleDown/>}{" "} 
            {today + increment} TODAY
          </span>
      </div>
    </div>
  );
};

export default CardBig;
