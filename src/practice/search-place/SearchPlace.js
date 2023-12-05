import React, { Component } from "react";
import { StyleSheet, View, TextInput, Button, Text } from "react-native";
import { connect } from "react-redux";
import { Input } from "@rneui/themed";

import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./../counterSlice";

function SearchPlace() {
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  state = {
    placeName: "",
    places: [],
  };

  function placeSubmitHandler() {
    dispatch(increment());
    console.log("increment = " + increment);
    // for (let key of increment) {
    //   // console.log(key);
    // }

    console.log("Submitted");
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text>{count}</Text>
        {/* <Input
          keyboardType="number-pad"
          placeholder="Enter Your Mobile Number"
          containerStyle={{
            backgroundColor: "#222",
            borderRadius: 30,
            paddingLeft: "10%",
          }}
        /> */}

        {/* <Input
          placeholder="Seach Places"
          style={styles.placeInput}
          keyboardType="ascii-capable"
        ></Input> */}
        <Button
          title="Add"
          style={styles.placeButton}
          // onPress}
          onPress={placeSubmitHandler}
        />

        <Button
          title="Decrement"
          style={styles.placeButton}
          onPress={() => dispatch(increment())}
          // onPress={placeSubmitHandler}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    marginLeft: 50,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    // justifyContent: "space-between",
    // alignItems: "center",
    // width: "100%",
  },
  placeInput: {
    width: "70%",
  },
  placeButton: {
    width: "30%",
  },
  listContainer: {
    width: "100%",
  },
});

export default SearchPlace;
