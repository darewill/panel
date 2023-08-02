import React from "react";
import { Card } from "./Card";

export const File = () => {
  const [list, setList] = React.useState([]);

  React.useEffect(async () => {
    const request = await fetch("https://dummyjson.com/products");
    const requestObj = await request.json();
    setList(requestObj.products);
  }, []);

  return (
    <div className="file-wrapper">
      {list.map((item) => (
        <Card
          thumbnail={item.thumbnail}
          title={item.title}
          price={item.price}
        />
      ))}
    </div>
  );
};
