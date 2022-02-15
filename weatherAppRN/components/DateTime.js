import React from "react";
import { View, Text, StyleSheet } from "react-native";

const WeatherItem = ({ title, value, unit }) => {
  return (
    <View style={styles.weatherItem}>
      <Text style={styles.weatherItemTitle}>{title}</Text>
      <Text style={styles.weatherItemTitle}>
        {value}
        {unit}
      </Text>
    </View>
  );
};

const DateTime = () => {
  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text style={styles.heading}>12:30am</Text>
        </View>
        <View>
          <Text style={styles.subheading}>Monday, July 29</Text>
        </View>
        <View style={styles.weatherItemContainer}>
          <WeatherItem title="Humidity" value="79" unit="%" />
          <WeatherItem title="Pressure" value="1000" unit="hPA" />
          <WeatherItem title="Sunrise" value="06:00" unit="am" />
          <WeatherItem title="Sunset" value="08:30" unit="pm" />
        </View>
      </View>
      <View style={styles.rightAling}>
        <Text style={styles.timezone}>CABA, Arg</Text>
        <Text style={styles.latlong}>4.22N 50E</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  heading: {
    fontSize: 45,
    color: "white",
    fontWeight: "100",
  },
  subheading: {
    fontSize: 25,
    color: "white",
    fontWeight: "300",
  },
  rightAling: {
    textAlign: "right",
    marginTop: 15,
  },
  timezone: {
    fontSize: 20,
    color: "white",
  },
  latlong: {
    fontSize: 16,
    color: "white",
    fontWeight: "700",
  },
  weatherItemContainer: {
    backgroundColor: "#18181b99",
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  weatherItem: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  weatherItemTitle: {
    color: "white",
    fontSize: 14,
    fontWeight: "100",
  },
});

export default DateTime;
