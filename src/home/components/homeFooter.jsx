import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ActionButton from "./actionButton";

const HomeFooter = ({ summation }) => {
  return (
    <View style={styles.container}>
      <ActionButton iconType={"income"} />
      <View style={styles.summationContainer}>
        <Text style={styles.summationText}>{summation.toLocaleString()}</Text>
      </View>
      <ActionButton iconType={"outcome"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  summationContainer: {
    width: "40%",
    flex: 1,
    height: 50,
    backgroundColor: "#DACC3E",
    alignItems: "center",
    justifyContent: "center",
  },
  summationText: {
    fontSize: 18,
    fontWeight: "600",
  },
});

export default HomeFooter;
