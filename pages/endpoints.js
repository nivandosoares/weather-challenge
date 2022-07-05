import { useState } from "react";

function EndpointsPage() {
  const [cities, setCities] = useState([]);

  const fetchCities = async () => {
    const response = await fetch("/api/cities");
    const data = await response.json();
    console.log(data);
    setCities(data);
  };

  return (
    <>
      <div align="center">
        <p align="center">
          Just use <code>https://localhost:3000/api/cities/your_city_name</code>{" "}
          to get instant weather data from anywhere in the world!
        </p>
        <p>
          Example: <code>https:localhost:300/api/cities/Lagtag</code>
        </p>
        <button onClick={fetchCities}>Get the latest cities endpoints</button>
      </div>{" "}
      {cities.map((city) => {
        return (
          <div align="center" key={city.id}>
            {"Id: "}
            {city.id}.<br />
            {"Name: "}
            {city.name}.<br />
            <hr />
          </div>
        );
      })}{" "}
    </>
  );
}

export default EndpointsPage;
