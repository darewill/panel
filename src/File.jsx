import React from "react";
import { Card } from "./Card";
import { Link } from "react-router-dom";

export const File = () => {
  const [listInfo, setListInfo] = React.useState({
    total: 0,
    products: []
  });
  const [loading, setLoading] = React.useState(true);

  // set state for loader, default is true

  React.useEffect(async () => {
    const request = await fetch("https://dummyjson.com/products?limit=15");
    const requestObj = await request.json();
    // update loader state to false because we already fetched the products at this point
    setListInfo(requestObj);
  }, []);

  // create a Loader component, show loader when it's true instead of products, otherwise show cards and not Loader component

  // Simple way to fill an array with items(ex numbers)
  const getPageNumbers = () => {
    let numbers = [];

    for (let i = 1; i <= Math.ceil(listInfo.total / 15); i++) {
      numbers.push(i);
    }

    return numbers;
  };

  return (
    <div className="file-wrapper">
      {listInfo.products.map((item) => (
        <Card
          thumbnail={item.thumbnail}
          title={item.title}
          price={item.price}
        />
      ))}

      <ul className="pagination">
      {
          // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
          // skipin e dijme, pjesetoje me 15, krahasoje me item edhe jepja stilin
          [...new Array(7).keys()].map((item) => <li onClick={async () => {
            const request = await fetch("https://dummyjson.com/products?limit=15&skip=" + item * 15);
            const requestObj = await request.json();
            setListInfo(requestObj);
          }}>{item + 1}</li>)}
      </ul>

    </div>
  );
};
