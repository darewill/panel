import React from "react";
import { Card } from "./Card";
import { Link } from "react-router-dom";

export const File = () => {
  const [list, setList] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(1);
  // set state for loader, default is true

  React.useEffect(async () => {
    const request = await fetch("https://dummyjson.com/products");
    const requestObj = await request.json();
    // update loader state to false because we already fetched the products at this point
    setList(requestObj.products);
  }, []);

  // create a Loader component, show loader when it's true instead of products, otherwise show cards and not Loader component
  return (
    <div className="file-wrapper">
      {list.map((item) => (
        <Card
          thumbnail={item.thumbnail}
          title={item.title}
          price={item.price}
        />
      ))}

        <ul className="pagination">
          <li>1</li>
          <li>2</li>
        </ul>

    </div>
  );
};
