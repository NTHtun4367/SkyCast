import Header from "@/components/forecast/header";
import Today from "@/components/forecast/today";
import WeatherList from "@/components/forecast/weatherList";
import Info from "@/components/home/info";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function Forecast() {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/images/bg.jpg")}
        resizeMode="cover"
        style={StyleSheet.absoluteFill}
        blurRadius={5}
      >
        <SafeAreaView style={styles.container}>
          <View className="flex-1 px-8">
            <Header />
            <Today />
            <Info />
            <WeatherList />
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

export default Forecast;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 30 : 0,
  },
});
