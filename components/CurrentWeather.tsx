"use client";
import React, { useState, useEffect } from "react";
import getWeatherFromLatitudeAndLongitude from "@/pages/api/weather/weather";

interface WeatherData {
  current_weather: {
    is_day: number;
    temperature: number;
    time: string;
    weathercode: number;
    winddirection: number;
    windspeed: number;
  };
  elevation: number;
  generationtime_ms: number;
  latitude: number;
  longitude: number;
  timezone: string;
  timezone_abbreviation: string;
  utc_offset_seconds: number;
}

const weatherData: WeatherData = {
  current_weather: {
    is_day: 1,
    temperature: 10,
    time: "2021-03-21 12:00:00",
    weathercode: 113,
    winddirection: 180,
    windspeed: 10,
  },
  elevation: 0,
  generationtime_ms: 0,
  latitude: 0,
  longitude: 0,
  timezone: "Europe/London",
  timezone_abbreviation: "GMT",
  utc_offset_seconds: 0,
};

function CurrentWeather() {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [data, setData] = useState<WeatherData>(weatherData);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(
        function (position: GeolocationPosition) {
          const currentLatitude: number = position.coords.latitude;
          const currentLongitude: number = position.coords.longitude;
          setLatitude(currentLatitude);
          setLongitude(currentLongitude);
        },
        (error) => {
          console.error(error);
        }
      );
    };

    fetchData(); // Fetch location data

    // Inside a separate useEffect with dependencies on latitude and longitude
  }, []); // Empty dependency array to run this effect only once for geolocation

  useEffect(() => {
    // Call getWeatherFromLatitudeAndLongitude with the updated latitude and longitude
    if (latitude !== null && longitude !== null) {
      const fetchWeatherData = async () => {
        const weatherData = await getWeatherFromLatitudeAndLongitude(
          latitude,
          longitude
        );
        setData(weatherData);
      };
      fetchWeatherData();
    }
  }, [latitude, longitude]);

  console.log(data, "data");

  if (data) {
    return (
      <div className="box border bg-white">
        {data && <p>{data.current_weather.temperature}</p>}
      </div>
    );
  }
}

export default CurrentWeather;
