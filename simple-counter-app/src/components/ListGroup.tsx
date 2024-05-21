import { MouseEvent, useState } from "react";
function ListGroup() {
  const cities = ["Jo'burg", "Kinshasa", "Lagos", "Kuala Lumpur"];
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // event Handler

  return (
    <>
      <h1> PAIN is GAIN</h1>
      <ul className="list-group">
        {cities.map((city, index) => (
          <li
            key={city}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
