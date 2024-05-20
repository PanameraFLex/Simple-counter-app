import { MouseEvent, useState } from "react";
function ListGroup() {
  const cities = ["Jo'burg", "Kinshasa", "Lagos", "Kuala Lumpur"];
  let selectedIndex = -1;
  let setSelectedIndex = 0
useState((selectedIndex, setSelectedIndex) => {
  // event Handler
  function handleClick(event: MouseEvent) {
    console.log(event);
  }
  return (
    <>
      <h1> PAIN is GAIN</h1>
      <ul className="list-group">
        {cities.map((city, index) => (
          <li
            key={city}
            className={
              selectedIndex === index ? "list-group-item active" : "list-group"
            }
            onClick={handleClick}
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
