import { StyleSheet, SafeAreaView, View } from "react-native";
import React, { useState } from "react";
import HomeFooter from "./components/homeFooter";
import HomeHeader from "./components/homeHeader";
import HomeContent from "./components/homeContent";
import transactions from "../../data/transactions";
import moment from "moment";

const HomeScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [filter, setFilter] = useState({
    selectedWallet: "",
    selectedAccount: "",
    fromDate: moment("2024-01-01"),
    toDate: moment("2030-01-01"),
  });

  return (
    <SafeAreaView direction="rtl" style={styles.container}>
      <HomeHeader
        transactions={transactions}
        onSearchTextChanged={(text) => setSearchText(text)}
        onFilterApplied={(f) => setFilter(f)}
      />
      <HomeContent
        transactions={transactions}
        searchText={searchText}
        filter={filter}
      />
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
