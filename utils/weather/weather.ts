import axios from "axios";

export default async function getWeatherFromLatitudeAndLongitude(
  latitude: number | null,
  longitude: number | null
) {
  if (typeof latitude !== "number" || typeof longitude !== "number") {
    throw new Error("Invalid latitude or longitude values");
  }
  return axios
    .get(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    )
    .then(({ data }) => {
      return data;
    });
}
