async function fetchCars(manufacturer, year, model, limit, fuel) {
  const headers = {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY || "",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?year=2020&limit=100`,
    {
      headers: headers,
    }
  );
  const result = await response.json();

  return result;
}

module.exports = { fetchCars };
