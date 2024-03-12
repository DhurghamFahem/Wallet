import { View, StyleSheet, FlatList, Text } from "react-native";
import React, { useState, useEffect } from "react";
import HomeCard from "./homeCard";
import moment from "moment";
import localization from "../../../localization/localization.jsx";

const HomeContent = ({
  transactions,
  searchText,
  filter,
  getSummation,
  onTransactionDeleted,
}) => {
  const [filteredTransactions, setFilteredTransactions] =
    useState(transactions);

  useEffect(() => {
    let filtered = [];
    let summation = 0;
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

      if (moment(transaction.date).isBefore(filter.fromDate) === true)
        addToList = false;

      if (moment(transaction.date).isAfter(filter.toDate) === true)
        addToList = false;

      if (addToList === true) {
        filtered.push(transaction);
        summation +=
          transaction.type === "income"
            ? transaction.amount
            : -transaction.amount;
      }
    }
    setFilteredTransactions(filtered);
    getSummation(summation);
  }, [filter, searchText, transactions]);

  return (
    <View style={styles.container}>
      {filteredTransactions.length > 0 ? (
        <FlatList
          data={filteredTransactions}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ flexGrow: 1 }}
          renderItem={({ item }) => (
            <HomeCard
              transaction={item}
              transactions={transactions}
              onTransactionDeleted={onTransactionDeleted}
            />
          )}
        />
      ) : (
        <Text style={styles.noDataText}>{localization.t("noData")}</Text>
      )}
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
  noDataText: {
    fontSize: 30,
    fontWeight: "600",
  },
});

export default HomeContent;
