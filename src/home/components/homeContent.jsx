import { View, StyleSheet, FlatList } from "react-native";
import React from "react";
import HomeCard from "./homeCard";
import transactions from "../../../data/transactions";
import FilterModal from "../modals/filterModal";

const HomeContent = ({ searchText }) => {
  const getFilteredTransactions = () => {
    if (typeof searchText === "string" && searchText.length === 0)
      return transactions;
    return transactions.filter(
      (transaction) =>
        transaction.name.includes(searchText) ||
        transaction.note.includes(searchText)
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={getFilteredTransactions()}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ flexGrow: 1 }}
        renderItem={({ item }) => <HomeCard transaction={item} />}
      />
      <FilterModal transactions={getFilteredTransactions()} />
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
