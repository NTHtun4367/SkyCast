import Content from "@/components/home/content";
import Header from "@/components/home/header";
import Info from "@/components/home/info";
import InputBox from "@/components/home/inputBox";
import { Theme } from "@/constants/theme";
import { useWeatherStore } from "@/store/weather-store";
import { getLocationByCity, getWeatherInfo } from "@/utils/weather-api";
import * as Location from "expo-location";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type LocationType = {
  latitude: number;
  longitude: number;
};

export default function Index() {
  const setCurrentWeather = useWeatherStore((state) => state.setCurrentWeather);
  const setDailyForecast = useWeatherStore((state) => state.setDailyForecast);

  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState<string>("Yangon");
  const [location, setLocation] = useState<LocationType>({
    latitude: 16.8409,
    longitude: 96.1735,
  });

  const getPermission = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Permission Denied",
          "Location access is needed for weather updates.",
        );
        return;
      }

      const currentLocation = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Balanced,
      });

      setLocation({
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
      });
    } catch (error) {
      console.error("Location Permission Error: ", error);
    }
  };

  const getWeather = async (lat: number, lon: number) => {
    const weather = await getWeatherInfo(lat, lon);
    setCurrentWeather({
      temperature: weather.current_weather.temperature,
      weatherCode: weather.current_weather.weathercode,
      windspeed: weather.current_weather.windspeed,
    });
    setDailyForecast({
      sunrise: weather.daily.sunrise,
      sunset: weather.daily.sunset,
      temperature_2m_max: weather.daily.temperature_2m_max,
      time: weather.daily.time,
      weathercode: weather.daily.weathercode,
    });
  };

  const getReverseGeocode = async (lat: number, lon: number) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`,
        {
          headers: {
            "User-Agent": "DemoWeatherApp/1.0",
          },
        },
      );

      const contentType = response.headers.get("content-type");
      if (
        !response.ok ||
        !contentType ||
        !contentType.includes("application/json")
      ) {
        throw new Error("Server did not return JSON");
      }

      const data = await response.json();

      if (data.address) {
        const cityName =
          data.address.city ||
          data.address.town ||
          data.address.village ||
          data.address.suburb ||
          "Unknown";
        setCity(cityName);
      }
    } catch (error) {
      console.error("Geocoding failed, trying fallback:", error);

      try {
        const nativeResponse = await Location.reverseGeocodeAsync({
          latitude: lat,
          longitude: lon,
        });
        if (nativeResponse.length > 0) {
          setCity(
            nativeResponse[0].city || nativeResponse[0].region || "Yangon",
          );
        }
      } catch (nativeErr) {
        setCity("Yangon");
      }
    }
  };

  const searchLocationByCity = async (cityName: string) => {
    try {
      setLoading(true);
      const coords = await getLocationByCity(cityName);
      if (coords) {
        setLocation({ latitude: coords.latitude, longitude: coords.longitude });
      }
    } catch (error: any) {
      Alert.alert(error?.message, "Please enter a valid city name.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPermission();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        await Promise.all([
          getWeather(location.latitude, location.longitude),
          getReverseGeocode(location.latitude, location.longitude),
        ]);
      } catch (error) {
        console.error("Fetch Data Error: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [location.latitude, location.longitude]);

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/images/bg.jpg")}
        resizeMode="cover"
        style={StyleSheet.absoluteFill}
        blurRadius={5}
      >
        <SafeAreaView style={styles.container}>
          <ScrollView>
            <View className="px-8 flex-1">
              <Header city={city} />
              <InputBox searchLocationByCity={searchLocationByCity} />

              {loading ? (
                <View className="flex-1 items-center justify-center">
                  <ActivityIndicator size="large" color={Theme.purpleDark} />
                </View>
              ) : (
                <>
                  <Content />
                  <View className="flex-1 justify-end">
                    <Info />
                    <Text className="text-center text-secondaryDark text-sm my-8">
                      Demo Weather App - JK Coder
                    </Text>
                  </View>
                </>
              )}
            </View>
          </ScrollView>
          <StatusBar style="light" />
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
