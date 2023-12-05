import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import Badge from "./src/practice/Badge";
import Signup from "./src/auth/Signup";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomePageBackground from "./src/assets/home-page/2.jpg";
import { Button } from "@rneui/base";

import SearchPlace from "./src/practice/search-place/SearchPlace";
import NavigationTab from "./src/components/navigation-tab/NavigationTab";

const image = { uri: HomePageBackground };

// redux store
import { Provider } from "react-redux";
import store from "./store/index";
import { useState } from "react";
// import { useSelector, useDispatch } from 'react-redux'

// const store = configureStore();

function HomeScreen(props) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View style={styles.signupWrapper}>
        <Signup {...props}></Signup>
      </View>
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View>
      <NavigationTab></NavigationTab>
      {/* <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push("Details")}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go back" onPress={() => navigation.goBack()} /> */}
      {/* <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      /> */}
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  // const count = useSelector((state) => state.counter.value)
  const [authDone, setAuthDone] = useState(false);

  function onOtpBoxFilledHandler(receivedOtp) {
    // setAuthDone(true);
    console.log(receivedOtp);
  }

  return (
    <Provider store={store}>
      {authDone ? (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Flodi Bazar"
              component={DetailsScreen}
            ></Stack.Screen>
            {/* <NavigationTab></NavigationTab> */}
          </Stack.Navigator>
        </NavigationContainer>
      ) : (
        <>
          <View style={styles.headingStyle}>
            <ImageBackground
              source={HomePageBackground}
              resizeMode="cover"
              style={styles.image}
            >
              <View style={styles.headingTextStyle}>
                <Text style={styles.headingContent}>Flodi Bazar</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.signUpStyle}>
            <HomeScreen onOtpBoxFilledHandler={onOtpBoxFilledHandler} />
          </View>
        </>
      )}
    </Provider>

    // <Provider store={store}>
    //   <View style={styles.container}>
    //     {/* <Text>hh</Text> */}
    //     <SearchPlace></SearchPlace>

    //   </View>
    // </Provider>

    // Running code for getOtp and singin and signup

    // <NavigationContainer>
    //   <View style={styles.container}>
    //     {/* <ImageBackground
    //       source={HomePageBackground}
    //       resizeMode="cover"
    //       style={styles.image}
    //     > */}
    //       <View style={styles.signupWrapper}>
    //         <Signup></Signup>
    //       </View>
    //     {/* </ImageBackground> */}
    //   </View>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  headingStyle: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#dfdfdf",
  },
  headingTextStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  headingContent: {
    color: "white",
    fontWeight: "800",
    fontSize: 30,
    fontStyle: "italic",
  },
  signUpStyle: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  bigBlue: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 30,
  },
  stretch: {
    width: "100%",
    height: "100%",
    resizeMode: "stretch",
  },
  signupWrapper: {
    flexDirection: "column",
    width: "100%",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});
