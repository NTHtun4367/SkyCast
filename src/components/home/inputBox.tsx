import { Theme } from "@/constants/theme";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

interface InputBoxProps {
  searchLocationByCity: (city: string) => void;
}

function InputBox({ searchLocationByCity }: InputBoxProps) {
  const [text, setText] = useState("");

  const handleSearch = () => {
    if (text.trim().length > 0) {
      searchLocationByCity(text.trim());
      setText("");
    }
  };

  return (
    <View className="relative">
      <TextInput
        placeholder="City name"
        value={text}
        onChangeText={setText}
        className="bg-white/90 shadow rounded-xl p-4 mb-6 ps-14 placeholder:font-bold placeholder:text-secondaryDark border-2 border-secondaryDark"
        onSubmitEditing={handleSearch}
        returnKeyType="search"
      />
      <MaterialCommunityIcons
        name="cloud-search-outline"
        size={26}
        color={Theme.secondaryDark}
        style={styles.icon}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    position: "absolute",
    top: 12,
    left: 16,
  },
});

export default InputBox;
