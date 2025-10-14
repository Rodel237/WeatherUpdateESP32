import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { useState } from 'react';
import backgroung from "../assets/building1.jpg";

const Weather = () => {
  // Temperature is now state-based (to be connected later)
  const [temp, setTemp] = useState(28);

  // Still using static values for now
  const humidity = 0;
  const pressure = 0;

  return (
    <ImageBackground 
      source={backgroung}
      style={styles.container}
    >
      {/* ✅ Dynamic Temperature Display */}
      <View style={styles.tempWrappper}>
        <Text style={styles.text}>{temp}°</Text>
        <Text style={styles.tempLabel}>Current Temperature</Text>
      </View>

      {/* Placeholder for humidity and pressure */}
      <View style={styles.data}>
        <View style={styles.spacer}></View>
        <View style={styles.dataWrapper}>
          <View style={styles.humid}>
            <Text style={styles.dataText}>{humidity}%</Text>
            <Text style={styles.title}>Humidity</Text>
          </View>
          <View style={styles.pressure}>
            <Text style={styles.dataText}>{pressure}</Text>
            <Text style={styles.title}>Pressure</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Weather;

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  }, 

  tempWrappper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 35,
  },

  text: {
    fontSize: 150,
    fontWeight: "100",
    textAlign: "right",
    color: "white",
  },

  tempLabel: {
    color: "white",
    fontSize: 16,
    fontWeight: "300",
    marginTop: -10,
  },

  data: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },

  spacer: {
    height: 30,
  },

  dataWrapper: {
    backgroundColor: "rgba(255,255,255,0.3)",
    flexDirection: "row",
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "white",
  },

  humid: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  pressure: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  dataText: {
    fontSize: 20,
    fontWeight: "200",
    color: "white",
    textAlign: "center",
    fontFamily: "Helvetica",
  },

  title: {
    fontSize: 12,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    fontFamily: "Helvetica",
  },
});
