import React from "react";
import { Card } from "./Card";
import { Pagination } from "./Pagination";
import { Link } from 'react-router-dom';

export const Products = () => {
  const [listInfo, setListInfo] = React.useState({
    total: 0,
    products: [],
  });
  const [loading, setLoading] = React.useState(false);

  //<
  const fetchData = async (skip = 0) => {
    setLoading(true);
    const request = await fetch(
      "https://dummyjson.com/products?limit=15&skip=" + skip
    );
    const requestObj = await request.json();
    setListInfo(requestObj);
    setLoading(false);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  //>

  // Simple way to fill an array with items(ex numbers)
  // const getPageNumbers = () => {
  //   let numbers = [];

  //   for (let i = 1; i <= Math.ceil(listInfo.total / 15); i++) {
  //     numbers.push(i);
  //   }

  //   return numbers;
  // };

  const renderList = () => {
    return listInfo.products.map((item) => (
      <Card thumbnail={item.thumbnail} title={item.title} price={item.price} />
    ));
  };

  return (
    <div className="file-wrapper">
      {loading ? (
        <img src="https://i.gifer.com/ZKZg.gif" style={{ width: 100 }}></img>
      ) : (
        renderList()
      )}

      {!loading && <Pagination listInfo={listInfo} fetchData={fetchData} />}
    </div>
  );
};
