import { WeatherType } from "@/types";

export const getWeatherInfo = async (latitude: number, longitude: number) => {
  const weather_api = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max&timezone=auto&current_weather=true`;
  const response = await fetch(weather_api);
  const data: WeatherType = await response.json();
  return data;
};

export const getLocationByCity = async (
  city: string,
): Promise<{
  latitude: number;
  longitude: number;
}> => {
  try {
    const API = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`;
    const response = await fetch(API);
    const data = await response.json();
    const result = data.results[0];
    return { latitude: result.latitude, longitude: result.longitude };
  } catch (error) {
    throw new Error("Location not provided!");
  }
};
