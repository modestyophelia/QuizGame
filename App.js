import React from "react";
import QuizList from "./QuizList";
import { useState } from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import { createContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export const UserContext = createContext();
const Stack = createNativeStackNavigator();

function App() {
  const [id, setId] = useState(0);
  const [buttonColor, setButtonColor] = useState("transparent");
  const [questionColor, setQuestionColor] = useState("black");

  //Game options
  const [hellBladeCount, setHellBladeCount] = useState(0);
  const [rakuenCount, setRakuenCount] = useState(0);
  const [franBowCount, setFranBowCount] = useState(0);
  const [bioshockInfiniteCount, setBioshockInfiniteCount] = useState(0);

  function Next() {
    if (id < 4) {
      setId(id + 1);
    } else {
      setButtonColor("black");
      setQuestionColor("transparent");
    }
  }

  function QuizScreen({ navigation }) {
    return (
      <View style={styles.quizContent}>
        <Text
          style={{
            fontSize: "180%",
            fontWeight: "bold",
            marginTop: "10%",
            margin: "5%",
            color: questionColor,
            textShadowColor: "rgba(0, 0, 0, 0.25)",
            textShadowOffset: { width: -1, height: 1 },
            textShadowRadius: 1,
          }}
        >
          {QuizList[id].question}
        </Text>
        <View style={styles.buttons}>
          <Button
            color={questionColor}
            title={QuizList[id].HellBlade}
            onPress={() => {
              setHellBladeCount(hellBladeCount + 1), Next();
            }}
          ></Button>
          <Button
            color={questionColor}
            title={QuizList[id].Rakuen}
            onPress={() => {
              setRakuenCount(rakuenCount + 1), Next();
            }}
          ></Button>
          <Button
            color={questionColor}
            title={QuizList[id].FranBow}
            onPress={() => {
              setFranBowCount(franBowCount + 1), Next();
            }}
          ></Button>
          <Button
            color={questionColor}
            title={QuizList[id].BioshockInfinite}
            onPress={() => {
              setBioshockInfiniteCount(bioshockInfiniteCount + 1), Next();
            }}
          ></Button>
        </View>
        <View style={{ margin: "3%" }}>
          <Button
            color={buttonColor}
            title="Get result"
            onPress={() => navigation.navigate("Result")}
          />
        </View>
      </View>
    );
  }

  return (
    <UserContext.Provider
      value={{
        hellBladeCount,
        setHellBladeCount,
        rakuenCount,
        setRakuenCount,
        franBowCount,
        setFranBowCount,
        bioshockInfiniteCount,
        setBioshockInfiniteCount,
      }}
    >
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Quiz">
          <Stack.Screen
            name="Quiz"
            component={QuizScreen}
            options={{
              headerStyle: {
                backgroundColor: "black",
              },
              headerTintColor: "white",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Stack.Screen
            name="Result"
            getComponent={() => require("./ResultScreen").default}
            options={({ navigation }) => ({
              headerStyle: {
                backgroundColor: "black",
              },
              headerTintColor: "white",
              headerTitleStyle: {
                fontWeight: "bold",
              },
              headerRight: () => (
                <Button
                  color="black"
                  title="Back to Quiz"
                  onPress={() => navigation.popToTop()}
                />
              ),
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  );
}

export default App;

const styles = StyleSheet.create({
  quizContent: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    margin: "10%",
    marginLeft: "15%",
    marginRight: "15%",
    boxShadow: "5px 2px 2px #E9E9E9",
  },
});
