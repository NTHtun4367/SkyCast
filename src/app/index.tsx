import Content from "@/components/home/content";
import Header from "@/components/home/header";
import Info from "@/components/home/info";
import InputBox from "@/components/home/inputBox";
import React from "react";
import {
  ImageBackground,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/images/bg.jpg")}
        resizeMode="cover"
        style={StyleSheet.absoluteFill}
        blurRadius={5}
      >
        <SafeAreaView style={styles.container}>
          <View className="px-8">
            <Header />
            <InputBox />
            <Content />
            <Info />
            <Text className="text-center text-secondaryDark text-sm my-8">
              Demo Weather App - JK Coder
            </Text>
          </View>
          <StatusBar barStyle={"default"} />
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 30 : 0,
  },
});
