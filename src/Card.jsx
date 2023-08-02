import React from "react";

export const Card = ({ thumbnail, title, price, stock }) => {
  return (
    <div className="productCard">
      
        {<img className="foto" src={thumbnail} />}
        <div className="title">{title.substring(0, 15)}</div>
        <div className="price">{price}$</div> 
      
    </div>
  );
};
