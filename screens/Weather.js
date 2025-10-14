import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, ImageBackground, Animated } from "react-native";
import { db } from "../firebaseConfig";
import { ref, onValue } from "firebase/database";
import { Ionicons } from "@expo/vector-icons";
import background from "../assets/building1.jpg";

const Weather = () => {
  const [temp, setTemp] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [pressure, setPressure] = useState(0);

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Fade animation on load
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();

    // Firebase Realtime Database references
    const tempRef = ref(db, "Weather/temperature");
    const humRef = ref(db, "Weather/humidity");
    const presRef = ref(db, "Weather/pressure");

    // Live data listeners
    onValue(tempRef, (snapshot) => {
      if (snapshot.exists()) setTemp(snapshot.val());
    });

    onValue(humRef, (snapshot) => {
      if (snapshot.exists()) setHumidity(snapshot.val());
    });

    onValue(presRef, (snapshot) => {
      if (snapshot.exists()) setPressure(snapshot.val());
    });
  }, []);

  return (
    <ImageBackground source={background} style={styles.container}>
      <Animated.View style={[styles.wrapper, { opacity: fadeAnim }]}>
        <View style={styles.tempWrapper}>
          <Ionicons name="thermometer-outline" size={70} color="white" />
          <Text style={styles.tempText}>{temp}°</Text>
          <Text style={styles.label}>Current Temperature</Text>
        </View>

        <View style={styles.dataWrapper}>
          <View style={styles.dataBox}>
            <Ionicons name="water-outline" size={40} color="white" />
            <Text style={styles.dataText}>{humidity}%</Text>
            <Text style={styles.dataLabel}>Humidity</Text>
          </View>

          <View style={styles.dataBox}>
            <Ionicons name="speedometer-outline" size={40} color="white" />
            <Text style={styles.dataText}>{pressure}</Text>
            <Text style={styles.dataLabel}>Pressure</Text>
          </View>
        </View>
      </Animated.View>
    </ImageBackground>
  );
};

export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  tempWrapper: {
    alignItems: "center",
    marginBottom: 50,
  },
  tempText: {
    fontSize: 130,
    fontWeight: "100",
    color: "white",
  },
  label: {
    color: "white",
    fontSize: 16,
    fontWeight: "300",
    marginTop: -10,
  },
  dataWrapper: {
    flexDirection: "row",
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "white",
    width: "80%",
    justifyContent: "space-around",
    paddingVertical: 20,
  },
  dataBox: {
    alignItems: "center",
  },
  dataText: {
    color: "white",
    fontSize: 22,
    fontWeight: "400",
    marginVertical: 5,
  },
  dataLabel: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
  },
});
