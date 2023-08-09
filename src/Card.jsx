import React from "react";

export const Card = ({ thumbnail, title, price, stock }) => {
  return (
    <div className="productCard">
      
        {/* {<img className="foto" src={thumbnail} />} */}
        <div className="foto" style={{ backgroundImage: `url(${thumbnail})` }}></div>
        <div className="title">{title}</div>
        <div className="price">{price}$</div> 
    </div>
  );
};
