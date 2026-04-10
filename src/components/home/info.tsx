import { useWeatherStore } from "@/store/weather-store";
import { getTimeOnly } from "@/utils";
import Feather from "@expo/vector-icons/Feather";
import React from "react";
import { Text, View } from "react-native";

function Info() {
  const sunrise = useWeatherStore((state) => state.daily).sunrise;
  const sunset = useWeatherStore((state) => state.daily).sunset;
  const windspeed = useWeatherStore((state) => state.current_weather).windspeed;

  return (
    <>
      {sunrise && sunset && (
        <View className="flex-row items-center justify-center my-6 gap-2">
          <View className="flex-1 items-center bg-white border border-secondaryDark/20 shadow rounded-3xl p-4">
            <Feather name="sunrise" size={24} color="black" />
            <Text className="text-lg text-purpleDark font-bold">
              {getTimeOnly(sunrise[0])}
            </Text>
            <Text className="text-lg text-secondaryDark font-bold">
              Sunrise
            </Text>
          </View>
          <View className="flex-1 items-center bg-white border border-secondaryDark/20 shadow rounded-3xl p-4">
            <Feather name="wind" size={24} color="black" />
            <Text className="text-lg text-purpleDark font-bold">
              {windspeed.toFixed()} km/h
            </Text>
            <Text className="text-lg text-secondaryDark font-bold">Wind</Text>
          </View>
          <View className="flex-1 items-center bg-white border border-secondaryDark/20 shadow rounded-3xl p-4">
            <Feather name="sunset" size={24} color="black" />
            <Text className="text-lg text-purpleDark font-bold">
              {getTimeOnly(sunset[0])}
            </Text>
            <Text className="text-lg text-secondaryDark font-bold">Sunset</Text>
          </View>
        </View>
      )}
    </>
  );
}

export default Info;
