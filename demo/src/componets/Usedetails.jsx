// https://fakestoreapi.com/products

import { useEffect, useState } from "react";

function Fetchdata() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1> Product data</h1>
      <ul className="ul">
        {data.map((el) => (
          <li key={el.id} className="li">
            <strong>{el.title}</strong>
            <p>Price: ${el.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Fetchdata;
