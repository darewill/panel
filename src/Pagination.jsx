import React from "react";

export const Pagination = ({ listInfo, fetchData }) => {
  return (
    <ul className="pagination">
      {listInfo.skip !== 0 && (
        <li onClick={() => fetchData(listInfo.skip - 15)}>{"<"}</li>
      )}
      {
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
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
  );
};
