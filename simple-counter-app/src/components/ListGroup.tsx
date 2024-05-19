import { MouseEvent } from "react";
function ListGroup() {
  const cities = ["Jo'burg", "Kinshasa", "Lagos", "Kuala Lumpur"];
  // event Handler
  function handleClick(event: MouseEvent) {
    console.log(event);
  }
  return (
    <>
      <h1> PAIN is GAIN</h1>
      <ul className="list-group">
        {cities.map((city, index) => (
          <li key={city} className="list-group-item" onClick={handleClick}>
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
