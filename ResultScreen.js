import React from "react";
import { Text, View, StyleSheet, Image, Platform } from "react-native";
import { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { UserContext } from "./App";

const Stack = createNativeStackNavigator();

export default function ResultScreen() {
  const { hellBladeCount } = useContext(UserContext);
  const { rakuenCount } = useContext(UserContext);
  const { franBowCount } = useContext(UserContext);
  const { bioshockInfiniteCount } = useContext(UserContext);

  return (
    <View>
      <View style={styles.conditionalRendering}>
        {Platform.OS === "android" ? (
          <View>
            <Image
              style={{ width: 50, height: 50 }}
              source={require("./assets/androidPic.png")}
            />
          </View>
        ) : null}
        {Platform.OS === "ios" ? (
          <View>
            <Image
              style={{ width: 50, height: 50 }}
              source={require("./assets/iphonePic.png")}
            />
          </View>
        ) : null}
        {Platform.OS === "web" ? (
          <View>
            <Image
              style={{ width: 50, height: 50 }}
              source={require("./assets/pcPic.png")}
            />
          </View>
        ) : null}
      </View>
      <Text style={styles.resultTitle}>
        What game should you try next? {"\n"} Find out below{"\n\n"}
        A: {hellBladeCount} {"\n"}
        B: {rakuenCount} {"\n"}
        C: {franBowCount} {"\n"}
        D: {bioshockInfiniteCount} {"\n\n"}
        <View>
          <Text>
            <View>
              If you scored mostly A:{"\n\n"}
              <Image
                style={{ width: 400, height: 250 }}
                source={require("./assets/hellbladePic.jpeg")}
              />
            </View>
            {"\n\n"}
            If you scored mostly B:{"\n\n"}
            <Image
              style={{ width: 400, height: 250 }}
              source={require("./assets/rakuenPic.jpeg")}
            />
            {"\n\n"}
            If you scored mostly C:{"\n\n"}
            <Image
              style={{ width: 400, height: 250 }}
              source={require("./assets/franbowPic.jpeg")}
            />
            {"\n\n"}
            If you scored mostly D:{"\n\n"}
            <Image
              style={{ width: 400, height: 250 }}
              source={require("./assets/bioshockinfinitePic.jpeg")}
            />
            {"\n\n"}
          </Text>
        </View>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  resultTitle: {
    fontSize: "180%",
    fontWeight: "bold",
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1,
    backgroundColor: "#f2f2f1",
  },
  conditionalRendering: {
    marginTop: "1%",
    margin: "5%",
  },
});
