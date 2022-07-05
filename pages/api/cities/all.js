export default fetchCities = async () => {
  const response = await fetch("/api/cities");
  const data = await response.json();
  console.log(data);
  setState(data);
};
