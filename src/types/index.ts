import { ImageSourcePropType } from "react-native";

export type WeatherDetailType = {
  codes: number[];
  label: string;
  image: ImageSourcePropType;
};

export type WeatherType = {
  current_weather: {
    temperature: number;
    weathercode: number;
    windspeed: number;
  };
  daily: {
    sunrise: string[];
    sunset: string[];
    temperature_2m_max: number[];
    time: string[];
    weathercode: number[];
  };
  latitude: number;
  longitude: number;
};
