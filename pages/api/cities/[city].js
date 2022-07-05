import cities from "../../../database/city.list.json";

export default async (req, res) => {
  const city = getCityId(req.query.city);

  if (!city) {
    return {
      notFound: true,
    };
  }

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${city.coord.lat}&lon=${city.coord.lon}&appid=${process.env.API_KEY}&lang=pt_br&exclude=minutely&units=metric`
  );

  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  res.status(200).json({ data });
};
const getCityId = (param) => {
  const cityParam = param.trim();
  // get the id of the city

  if (!cityParam) {
    return null;
  }

  const city = cities.find((city) => city.name.toString() == cityParam);

  if (city) {
    return city;
  } else {
    return null;
  }
};
