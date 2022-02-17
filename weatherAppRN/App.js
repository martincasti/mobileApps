import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import DateTime from "./components/DateTime.js";
import WeatherScroll from "./components/WeatherScroll";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";

const API_Key = "5f8fe4e70623acb0063d61259b43d6b9";
const img = require("./assets/image2.png");

export default function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        fetchDataFromApi("40.730610", "-73.935242");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      fetchDataFromApi(location.coords.latitude, location.coords.longitude);
    })();
  }, []);

  const fetchDataFromApi = (latitude, longitude) => {
    if (latitude && longitude) {
      fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_Key}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setData(data);
        });
    }

    return (
      <View style={styles.container}>
        <ImageBackground source={img} style={styles.image}>
          <DateTime
            current={data.current}
            timezone={data.timezone}
            lat={data.lat}
            lon={data.lon}
          />
          <WeatherScroll wweatherData={data.daily} />
        </ImageBackground>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
