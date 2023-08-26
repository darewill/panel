import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ thumbnail, title, price }) => {

  const onClick = () => {
    console.log(<h1>hi</h1>),
    <Link to="product" style={{ textDecoration: 'none', color: 'black' }}/>
  };

  return (
    <div className="productCard" onClick={() => onClick()}>
      
        {/* {<img className="foto" src={thumbnail} />} */}
        <div className="foto" style={{ backgroundImage: `url(${thumbnail})` }}></div>
        <div className="title">{title}</div>
        <div className="price">{price}$</div> 
    </div>
  );
};
