import { Theme } from "@/constants/theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

interface HeaderProps {
  city: string;
}

function Header({ city }: HeaderProps) {
  return (
    <View className="flex-row justify-between items-center mt-6 mb-6">
      <Pressable hitSlop={20}>
        <Link href={"/qrcode"} asChild>
          <Ionicons name="qr-code-sharp" size={28} color="black" />
        </Link>
      </Pressable>
      <View className="flex-row items-center">
        <Ionicons name="location" size={28} color={Theme.orange} />
        <Text className="text-2xl font-bold">{city || "Loading..."}</Text>
      </View>
      <Pressable hitSlop={20}>
        <Link href={"/forecast"}>
          <Ionicons name="ellipsis-vertical" size={24} color="black" />
        </Link>
      </Pressable>
    </View>
  );
}

export default Header;
