import { Theme } from "@/constants/theme";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import { TextInput, View } from "react-native";

function InputBox() {
  return (
    <View className="relative">
      <TextInput
        placeholder="City name"
        className="bg-gray-100 shadow rounded-xl p-4 mb-6 ps-14 placeholder:font-bold placeholder:text-secondaryDark"
      />
      <MaterialCommunityIcons
        name="cloud-search-outline"
        size={24}
        color={Theme.secondaryDark}
        className="absolute top-3 left-4"
      />
    </View>
  );
}

export default InputBox;
