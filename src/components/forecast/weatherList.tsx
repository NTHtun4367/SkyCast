import React, { useState } from "react";
import { FlatList, View } from "react-native";
import WeatherItem from "./weatherItem";

export type Weather = {
  day: string;
  weather: string;
  temp: string;
};

const dummyWeatherData: Weather[] = [
  {
    day: "Mon",
    weather: "Cloudy",
    temp: "26°",
  },
  {
    day: "Tue",
    weather: "Cloudy",
    temp: "26°",
  },
  {
    day: "Wed",
    weather: "Cloudy",
    temp: "26°",
  },
  {
    day: "Thu",
    weather: "Cloudy",
    temp: "26°",
  },
  {
    day: "Fri",
    weather: "Cloudy",
    temp: "26°",
  },
  {
    day: "Sat",
    weather: "Cloudy",
    temp: "26°",
  },
  {
    day: "Sun",
    weather: "Cloudy",
    temp: "26°",
  },
];

function WeatherList() {
  const [forecastData, setForecastData] = useState<Weather[]>(dummyWeatherData);

  return (
    <View className="flex-1">
      <FlatList
        data={forecastData}
        renderItem={({ item }) => <WeatherItem item={item} />}
        keyExtractor={(item) => item.day}
      />
    </View>
  );
}

export default WeatherList;
