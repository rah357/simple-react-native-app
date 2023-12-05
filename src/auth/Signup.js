import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Input, Icon, Button } from "@rneui/themed";
// import OTPTextView from "react-native-otp-textinput";

import { OtpInput } from "react-native-otp-entry";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./../../store/dataSlice";
import * as Progress from "react-native-progress";

export default ({ onOtpBoxFilledHandler }) => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.data);

  const [mobileNumber, setMobileNumber] = useState("9465456677");
  const [isSignUp, setIsSignUp] = useState(true);
  const [otpSendStatus, setOtpSendStatus] = useState();

  function getOtpHandler() {
    dispatch(fetchData());
    console.log("get Otp is clicked");
    setIsSignUp(false);
  }

  function reEnterMobileNumberHandler() {
    setIsSignUp(true);
  }

  if (status === "loading") {
    console.log("Loading...");
  } else if (status === "failed") {
    console.log("failed...");
  } else if (status === "succeeded") {
    setOtpSendStatus(status);
  }

  return (
    <View style={styles.container}>
      {isSignUp ? (
        <View>{/* <Progress.Circle size={30} indeterminate={true} /> */}</View>
      ) : (
        <Text>
          Otp is send to <Text style={styles.titleText}> 91{mobileNumber}</Text>
        </Text>
      )}

      {isSignUp ? (
        <View style={styles.phoneNumberWrapper}>
          <Text style={styles.countryCodeContent}> +91 </Text>
          <Input
            keyboardType="number-pad"
            placeholder="Enter Your Mobile Number"
            containerStyle={{
              paddingRight: "10%",
              flex: 1,
              // paddingBottom: "0"
            }}
          />
        </View>
      ) : (
        <View>
          <OtpInput
            numberOfDigits={6}
            onFilled={onOtpBoxFilledHandler}
            autoComplete="sms-otp" // android
          />

          {/* <Button title="Submit" onPress={otpSubmitHandler} /> */}
        </View>
      )}

      {isSignUp ? (
        <>
          <Button
            title="Get Otp"
            buttonStyle={{
              backgroundColor: "#000",
              borderWidth: 2,
              borderColor: "white",
              borderRadius: 30,
            }}
            containerStyle={{
              width: "30%",
              // marginHorizontal: 50,
              // marginVertical: 10,
              alignSelf: "center",
            }}
            titleStyle={{ fontWeight: "bold" }}
            onPress={getOtpHandler}
          />
        </>
      ) : (
        <View style={styles.footerSection}>
          <Text>Re-send Otp</Text>
          <Text onPress={reEnterMobileNumberHandler}>
            Re-Enter Mobile Number
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    // backgroundColor: "red",
    height: "40%",
  },
  headingStyle: {
    color: "red",
    fontSize: "100",
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
    alignContent: "center",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#111",
  },
  phoneNumberWrapper: {
    flexDirection: "row",
    backgroundColor: "red",
    // alignItems: "flex-start",
    justifyContent: "center",
  },
  countryCodeContent: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
  titleText: {
    fontWeight: "bold",
  },
  footerSection: {
    flexDirection: "row",
    width: "100%",
  },
});
