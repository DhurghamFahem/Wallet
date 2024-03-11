import { StyleSheet, SafeAreaView, View } from "react-native";
import React, { useState } from "react";
import HomeFooter from "./components/homeFooter";
import HomeHeader from "./components/homeHeader";
import HomeContent from "./components/homeContent";

const HomeScreen = () => {
  const [searchText, setSearchText] = useState("");
  const searchTextChanged = (searchText) => {
    setSearchText(searchText);
  };
  return (
    <SafeAreaView direction="rtl" style={styles.container}>
      <HomeHeader onSearchTextChanged={searchTextChanged} />
      <HomeContent searchText={searchText} />
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
