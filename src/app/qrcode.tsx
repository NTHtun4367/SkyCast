import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Image,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function Qrcode() {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/images/bg.jpg")}
        resizeMode="cover"
        style={StyleSheet.absoluteFill}
        blurRadius={5}
      >
        <SafeAreaView style={styles.container}>
          <View className="flex-1 items-center justify-center px-8">
            <Image source={require("@/assets/images/scan-me.png")} />
            <Text className="text-center text-secondaryDark text-sm my-8">
              Demo Weather App - JK Coder
            </Text>
          </View>
          <StatusBar style="light" />
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

export default Qrcode;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 30 : 0,
  },
});
