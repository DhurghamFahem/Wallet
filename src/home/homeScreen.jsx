import { StyleSheet, SafeAreaView, ActivityIndicator } from "react-native";
import React, { useState, useCallback, useEffect } from "react";
import HomeFooter from "./components/homeFooter";
import HomeHeader from "./components/homeHeader";
import HomeContent from "./components/homeContent";
import moment from "moment";
import storage from "../../data/storage.jsx";

const HomeScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [summation, setSummation] = useState(0);
  const [loading, setLoading] = useState(true);
  const [transactions, setTransactions] = useState([]);
  const [filter, setFilter] = useState({
    selectedWallet: "",
    selectedAccount: "",
    fromDate: moment("2024-01-01"),
    toDate: moment("2030-01-01"),
  });

  const getSummation = (sum) => {
    setSummation(sum);
  };

  const handleRefresh = useCallback(() => {
    storage
      .load({
        key: "transactions",
        autoSync: true,
        syncInBackground: true,
      })
      .then((ret) => {
        setLoading(false);
        setTransactions(ret);
      })
      .catch((err) => {
        console.warn(err.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    handleRefresh();
  }, [handleRefresh]);

  const onTransactionSaved = () => {
    handleRefresh();
  };

  const onDataCleared = () => {
    handleRefresh();
  };

  return (
    <SafeAreaView direction="rtl" style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <>
          <HomeHeader
            transactions={transactions}
            onSearchTextChanged={(text) => setSearchText(text)}
            onFilterApplied={(f) => setFilter(f)}
            onDataCleared={onDataCleared}
          />
          <HomeContent
            transactions={transactions}
            searchText={searchText}
            filter={filter}
            getSummation={(sum) => getSummation(sum)}
          />
          <HomeFooter
            summation={summation}
            transactions={transactions}
            onTransactionSaved={onTransactionSaved}
          />
        </>
      )}
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
