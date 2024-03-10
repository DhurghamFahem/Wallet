import { View, StyleSheet, Text } from "react-native";
import React from "react";
import HomeCard from "./homeCard";

const HomeContent = () => {
  return (
    <View style={styles.container}>
      <HomeCard type={"income"} />
      <HomeCard type={"outcome"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DACC3E",
  },
});

export default HomeContent;
