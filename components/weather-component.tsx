import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
}

interface WeatherForecastProps {
  latitude: number;
  longitude: number;
}

const WeatherForecast: React.FC<WeatherForecastProps> = ({ latitude, longitude }) => {
  const [forecast, setForecast] = useState<WeatherData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly,alerts&units=metric&appid=79b7eda28392dccaf6c9b4b7d44a2f9b`
        );
        setForecast(response.data.daily);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchForecast();
  }, [latitude, longitude]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="weather-forecast flex flex-wrap justify-between gap-4">
      {forecast.map((day, index) => {
        const date = new Date(day.dt * 1000);
        const dayName = date.toLocaleDateString('fr-FR', { weekday: 'short' });
        const iconUrl = `https://openweathermap.org/img/wn/${day.weather[0].icon}.png`;
        const description = day.weather[0].description;
        const tempMin = Math.round(day.temp.min);
        const tempMax = Math.round(day.temp.max);

        return (
          <div key={index} className="forecast-day flex flex-col items-center bg-sky-100 p-4 rounded-lg shadow-md w-28">
            <div className="day-name font-semibold">{dayName}</div>
            <img src={iconUrl} alt={description} className="w-12 h-12" />
            <div className="temperature text-lg">
              {tempMin}°C / {tempMax}°C
            </div>
            <div className="description text-sm text-gray-600">{description}</div>
          </div>
        );
      })}
    </div>
  );
};

export default WeatherForecast;