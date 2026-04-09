import React from "react";
import { Image, Text, View } from "react-native";

function Today() {
  return (
    <View className="flex-row justify-between my-2">
      <Image
        source={require("@/assets/images/storm.png")}
        className="w-44 h-44"
      />
      <View>
        <Text className="text-xl font-bold">Today</Text>
        <Text className="text-9xl text-purpleDark font-bold">26°</Text>
        <Text className="text-xl text-secondaryDark font-bold">
          Thunderstorm
        </Text>
      </View>
    </View>
  );
}

export default Today;
