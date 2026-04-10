import { useWeatherStore } from "@/store/weather-store";
import { DAYS, getWeatherInfoByCode } from "@/utils";
import React from "react";
import { ScrollView, View } from "react-native";
import WeatherItem from "./weatherItem";

function WeatherList() {
  const dailyForecast = useWeatherStore((state) => state.daily);

  return (
    <ScrollView>
      <View className="flex-1">
        {dailyForecast.weathercode.map((code, index) => {
          const temperature = dailyForecast.temperature_2m_max[index];
          const date = new Date(dailyForecast.time[index]);
          const dayOfWeek = DAYS[date.getDay()];
          const condition = getWeatherInfoByCode(code)?.label;
          const image = getWeatherInfoByCode(code)?.image;
          return (
            <WeatherItem
              key={index}
              temp={temperature}
              day={dayOfWeek}
              weatherCondition={condition!}
              wImage={image}
            />
          );
        })}
      </View>
    </ScrollView>
  );
}

export default WeatherList;
