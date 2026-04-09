import { Theme } from "@/constants/theme";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import React from "react";
import { Text, View } from "react-native";

function Info() {
  return (
    <View className="flex-row items-center justify-center my-2 gap-2">
      <View className="flex-1 items-center bg-white shadow rounded-3xl p-4">
        <Feather name="sunrise" size={24} color="black" />
        <Text className="text-lg text-purpleDark font-bold">6:00</Text>
        <Text className="text-lg text-secondaryDark font-bold">Sunrise</Text>
      </View>
      <View className="flex-1 items-center bg-white shadow rounded-3xl p-4">
        <FontAwesome6 name="droplet" size={24} color={Theme.skyBlue} />
        <Text className="text-lg text-purpleDark font-bold">85%</Text>
        <Text className="text-lg text-secondaryDark font-bold">Rain</Text>
      </View>
      <View className="flex-1 items-center bg-white shadow rounded-3xl p-4">
        <Feather name="sunset" size={24} color="black" />
        <Text className="text-lg text-purpleDark font-bold">5:00</Text>
        <Text className="text-lg text-secondaryDark font-bold">Sunset</Text>
      </View>
    </View>
  );
}

export default Info;
