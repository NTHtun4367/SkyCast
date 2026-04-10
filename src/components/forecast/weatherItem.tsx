import React from "react";
import { Image, ImageSourcePropType, Text, View } from "react-native";

interface WeatherItemProps {
  day: string;
  temp: number;
  weatherCondition: string;
  wImage: ImageSourcePropType;
}

function WeatherItem({
  day,
  temp,
  weatherCondition,
  wImage,
}: WeatherItemProps) {
  return (
    <View className="flex-row items-center justify-between border-b border-secondaryDark/20 pb-4 my-2">
      <Text className="text-xl text-purpleDark font-bold">{day}</Text>
      <View className="flex-row items-center justify-items-start gap-2">
        <Image source={wImage} className="w-9 h-9" />
        <Text className="text-left text-lg font-semibold text-purpleDark">
          {weatherCondition}
        </Text>
      </View>
      <Text className="text-right text-2xl font-bold text-purpleDark">
        {temp.toFixed()}°
      </Text>
    </View>
  );
}

export default WeatherItem;
