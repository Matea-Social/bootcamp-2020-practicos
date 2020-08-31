import React from "react";

function List() {
  const numbers = ["uno", "dos", "tres", "cuatro"];

  const listItems = numbers.map((number) => <li>{number}</li>);

  return (
    <ul>{listItems}</ul>
  );
}
export default List;
