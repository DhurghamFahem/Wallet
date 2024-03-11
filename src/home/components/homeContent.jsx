import { View, StyleSheet, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import HomeCard from "./homeCard";

const HomeContent = ({ transactions, searchText, filter }) => {
  const [filteredTransactions, setFilteredTransactions] =
    useState(transactions);

  useEffect(() => {
    let filtered = [];
    for (let i = 0; i < transactions.length; i++) {
      let transaction = transactions[i];
      let addToList = true;
      if (
        typeof searchText === "string" &&
        searchText.length > 0 &&
        transaction.account.includes(searchText) == false &&
        transaction.note.includes(searchText) == false
      )
        addToList = false;

      if (
        typeof filter.selectedWallet === "string" &&
        filter.selectedWallet.length > 0 &&
        transaction.wallet.includes(filter.selectedWallet) == false
      )
        addToList = false;

      if (
        typeof filter.selectedAccount === "string" &&
        filter.selectedAccount.length > 0 &&
        transaction.account.includes(filter.selectedAccount) == false
      )
        addToList = false;

      if (transaction.date.isBefore(filter.fromDate) === true)
        addToList = false;

      if (transaction.date.isAfter(filter.toDate) === true) addToList = false;

      if (addToList === true) filtered.push(transaction);
    }
    setFilteredTransactions(filtered);
  }, [filter, searchText]);

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredTransactions}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ flexGrow: 1 }}
        renderItem={({ item }) => <HomeCard transaction={item} />}
      />
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
