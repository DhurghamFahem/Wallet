import { StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import HomeFooter from "./components/homeFooter";
import HomeHeader from "./components/homeHeader";
import HomeContent from "./components/homeContent";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader />
      <HomeContent />
      <HomeFooter />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
