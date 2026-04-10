export const WEATHER_COLLECTION = [
  {
    codes: [0],
    label: "Sunny",
    image: require("@/assets/images/sun.png"),
  },
  {
    codes: [1, 2, 3, 45, 48],
    label: "Cloudy",
    image: require("@/assets/images/cloudy.png"),
  },
  {
    codes: [51, 53, 55, 56, 61, 63, 65, 66, 67, 80, 81, 82],
    label: "Rainy",
    image: require("@/assets/images/rain.png"),
  },
  {
    codes: [71, 73, 75, 77, 85],
    label: "Snowy",
    image: require("@/assets/images/snow.png"),
  },
  {
    codes: [96, 99],
    label: "Thunderstorm",
    image: require("@/assets/images/storm.png"),
  },
];

export const getWeatherInfoByCode = (code: number) => {
  return WEATHER_COLLECTION.find((weather) => weather.codes.includes(code));
};

export const getTimeOnly = (date: string) => {
  return date?.split("T")[1];
};

export const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
