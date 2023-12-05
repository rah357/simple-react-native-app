import React, { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Button, ButtonGroup, withTheme, Text } from "@rneui/themed";

const Buttons = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedIndexes, setSelectedIndexes] = useState([0, 2, 3]);

  return (
    <>
      <ScrollView>
        <View style={styles.contentView}>
          <Text style={styles.subHeader}>Basic Buttons</Text>
          <View style={styles.buttonsContainer}>
            <Button
              title="LOG IN"
              buttonStyle={{
                backgroundColor: "black",
                borderWidth: 2,
                borderColor: "white",
                borderRadius: 30,
              }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
              titleStyle={{ fontWeight: "bold" }}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const CustomTitle = () => {
  return (
    <View style={{ flexDirection: "column" }}>
      <Text style={{ fontWeight: "bold", fontSize: 18 }}>John Doe</Text>
      <Text style={{ fontStyle: "italic", fontSize: 12 }}>
        Minister of Magic
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contentView: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginVertical: 20,
  },
  subHeader: {
    backgroundColor: "#2089dc",
    color: "white",
    textAlign: "center",
    paddingVertical: 5,
    marginBottom: 10,
  },
});

export default withTheme(Buttons, "");
