"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { ChevronDown } from "lucide-react";

interface WeatherData {
  dt: number;
  temp: {
    day: number;
    min: number;
    max: number;
  };
  weather: Array<{
    description: string;
    icon: string;
  }>;
  humidity: number;
  wind_speed: number;
}

interface WeatherForecastProps {
  latitude: number;
  longitude: number;
}

const WeatherForecast: React.FC<WeatherForecastProps> = ({ latitude, longitude }) => {
  const [forecast, setForecast] = useState<WeatherData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchForecast = async () => {
      const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;

      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly,alerts&units=metric&appid=${apiKey}`
        );
        setForecast(response.data.daily);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchForecast();
  }, [latitude, longitude]);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="w-full rounded-lg overflow-hidden shadow-md bg-white">
      {forecast.map((day, index) => {
        const date = new Date(day.dt * 1000);
        const dayName = date.toLocaleDateString("fr-FR", { weekday: "short" });
        const dayNumber = date.getDate();
        const iconUrl = `https://openweathermap.org/img/wn/${day.weather[0].icon}.png`;
        const description = day.weather[0].description;
        const tempMin = Math.round(day.temp.min);
        const tempMax = Math.round(day.temp.max);

        return (
          <div key={index} className="border-b last:border-0">
            {/* Main clickable row */}
            <button
  onClick={() => toggle(index)}
  className="flex items-center justify-between w-full p-4 hover:bg-sky-50 transition"
>
  <div className="flex items-center gap-4 flex-1">
    {/* Day and date */}
    <div className="flex items-center gap-2 w-24 shrink-0">
      <div className="font-semibold">{dayName}</div>
      <div className="text-gray-500 text-sm">{dayNumber}</div>
    </div>

    {/* Weather Icon */}
    <img src={iconUrl} alt={description} className="w-8 h-8 shrink-0" />

    {/* Temperature */}
    <div className="text-lg font-bold w-24 text-center whitespace-nowrap shrink-0">
  {tempMin}°C / {tempMax}°C
</div>

    {/* Description */}
    <div className="text-gray-600 capitalize text-sm text-left flex-1">
      {description}
    </div>
  </div>

  {/* Arrow */}
  <ChevronDown
    className={`h-5 w-5 text-gray-600 transition-transform ${
      openIndex === index ? "rotate-180" : ""
    }`}
  />
</button>

            {/* Expandable details */}
            {openIndex === index && (
              <div className="px-6 pb-4 text-sm text-gray-600 bg-sky-50">
                <p><strong>Humidité:</strong> {day.humidity}%</p>
                <p><strong>Vent:</strong> {Math.round(day.wind_speed)} km/h</p>
                <p><strong>Température Jour:</strong> {Math.round(day.temp.day)}°C</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default WeatherForecast;