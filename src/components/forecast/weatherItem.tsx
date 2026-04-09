import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Text, View } from "react-native";
import { Weather } from "./weatherList";

interface WeatherItemProps {
  item: Weather;
}

function WeatherItem({ item }: WeatherItemProps) {
  const { day, weather, temp } = item;

  return (
    <View className="flex-row items-center justify-between border-b border-secondaryDark/20 pb-4 my-2">
      <Text className="text-xl text-purpleDark font-bold">{day}</Text>
      <View className="flex-row items-center justify-items-start gap-2">
        <Ionicons name="sunny-outline" size={30} color="black" />
        <Text className="text-left text-lg font-semibold text-purpleDark">
          {weather}
        </Text>
      </View>
      <Text className="text-right text-2xl font-bold text-purpleDark">
        {temp}
      </Text>
    </View>
  );
}

export default WeatherItem;
