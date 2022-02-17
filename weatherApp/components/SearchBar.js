import React, { useState, useEffect } from "react";
import {
  Keyboard,
  View,
  TextInput,
  StyleSheet,
  Dimensions,
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";

export default function SearchBar({ fetchWeatherData }) {
  const [cityName, setCityName] = useState("");

  const keyboardTest = () => {
    const [keyboardStatus, setKeyboardStatus] = useState(undefined);

    useEffect(() => {
      const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
        setKeyboardStatus("Keyboard Shown");
      });
      const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
        setKeyboardStatus("Keyboard Hidden");
      });

      return () => {
        showSubscription.remove();
        hideSubscription.remove();
      };
    }, []);
  };
  return (
    <View style={styles.searchBar}>
      <TextInput
        placeholder="Enter de City Name"
        value={cityName}
        onSubmitEditing={Keyboard.dismiss}
        onChangeText={(text) => setCityName(text)}
      />
      <EvilIcons
        name="search"
        size={28}
        color="black"
        onPress={() => fetchWeatherData(cityName)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: Dimensions.get("screen").width - 20,
    borderWidth: 1.5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 25,
    marginHorizontal: 10,
    backgroundColor: "#EEEEEE",
    borderColor: "#EEEEEE",
  },
});
