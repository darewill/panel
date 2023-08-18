import React from "react";
import { Card } from "./Card";

export const File = () => {
  const [listInfo, setListInfo] = React.useState({
    total: 0,
    products: [],
  });
  const [loading, setLoading] = React.useState(false);

  // set state for loader, default is true

  const fetchData = async (skip = 0) => {
    const request = await fetch(
      "https://dummyjson.com/products?limit=15&skip=" + skip
    );
    const requestObj = await request.json();
    setListInfo(requestObj);
    setLoading(true);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  // create a Loader component, show loader when it's true instead of products, otherwise show cards and not Loader component

  // Simple way to fill an array with items(ex numbers)
  // const getPageNumbers = () => {
  //   let numbers = [];

  //   for (let i = 1; i <= Math.ceil(listInfo.total / 15); i++) {
  //     numbers.push(i);
  //   }

  //   return numbers;
  // };

  return (
    <div className="file-wrapper">
      { loading ? (fetchData) : (
        <img src="https://static.vecteezy.com/system/resources/thumbnails/008/034/405/small/loading-bar-doodle-element-hand-drawn-vector.jpg"></img>
      )}
      {listInfo.products.map((item) => (
        <Card
          thumbnail={item.thumbnail}
          title={item.title}
          price={item.price}
        />
      ))}

      <ul className="pagination">
        {listInfo.skip !== 0 && (
          <li onClick={() => fetchData(listInfo.skip - 15)}>{"<"}</li>
        )}
        {
          // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
          // skipin e dijme, pjesetoje me 15, krahasoje me item edhe jepja stilin
          [...new Array(7).keys()].map((item) => (
            <li
              className={listInfo.skip / 15 === item ? "active" : ""}
              key={item}
              onClick={() => fetchData(item * 15)}
            >
              {item + 1}
            </li>
          ))
        }
        {Math.ceil(listInfo.total / 15) !== listInfo.skip / 15 + 1 && (
          <li onClick={() => fetchData(listInfo.skip + 15)}>{">"}</li>
        )}
      </ul>
    </div>
  );
};
