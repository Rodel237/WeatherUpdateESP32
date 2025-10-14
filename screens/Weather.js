import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { useState } from 'react';
import backgroung from "../assets/building1.jpg";

const Weather = () => {
  // Static values for now
  const [temp, setTemp] = useState(28);
  const [humidity, setHumidity] = useState(55);
  const [pressure, setPressure] = useState(1012);

  return (
    <ImageBackground 
      source={backgroung}
      style={styles.container}
    >
      {/* Temperature Display */}
      <View style={styles.tempWrappper}>
        <Text style={styles.text}>{temp}°</Text>
        <Text style={styles.tempLabel}>Current Temperature</Text>
      </View>

      {/* ✅ Humidity and Pressure Section */}
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
    backgroundColor: "rgba(255,255,255,0.25)",
    flexDirection: "row",
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
    width: "85%",
    borderRadius: 25,
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
    fontSize: 22,
    fontWeight: "300",
    color: "white",
    textAlign: "center",
    fontFamily: "Helvetica",
  },

  title: {
    fontSize: 13,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    fontFamily: "Helvetica",
    marginTop: 5,
  },
});
