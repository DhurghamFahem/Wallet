import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ActionButton from "./actionButton";

const HomeFooter = () => {
  return (
    <View style={styles.container}>
      <ActionButton iconType={"income"} />
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
    justifyContent: "space-around",
  },
});

export default HomeFooter;
