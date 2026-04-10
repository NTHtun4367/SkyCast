import { useWeatherStore } from "@/store/weather-store";
import { WeatherDetailType } from "@/types";
import { getWeatherInfoByCode } from "@/utils";
import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";

function Today() {
  const current_weather = useWeatherStore((state) => state.current_weather);
  const [weatherDetail, setWeatherDetail] = useState<WeatherDetailType>();

  useEffect(() => {
    setWeatherDetail(getWeatherInfoByCode(current_weather.weathercode));
  }, [current_weather]);

  return (
    <View className="flex-row justify-between my-2">
      <Image source={weatherDetail?.image} className="w-44 h-44" />
      <View>
        <Text className="text-xl font-bold">Today</Text>
        <Text className="text-9xl text-purpleDark font-bold">
          {current_weather.temperature.toFixed()}°
        </Text>
        <Text className="text-xl text-secondaryDark font-bold">
          {weatherDetail?.label}
        </Text>
      </View>
    </View>
  );
}

export default Today;
