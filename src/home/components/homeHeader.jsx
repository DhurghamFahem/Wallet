import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Search from "../../../assets/svgs/search.svg";
import Filter from "../../../assets/svgs/filter.svg";
import Clear from "../../../assets/svgs/clear.svg";
import FilterModal from "../modals/filterModal";
import moment from "moment";
import YesNoModal from "../modals/yesNoModal";
import localization from "../../../localization/localization";
import storage from "../../../data/storage.jsx";

const HomeHeader = ({
  transactions,
  onSearchTextChanged,
  onFilterApplied,
  onDataCleared,
}) => {
  const [filterVisible, setFilterVisible] = useState(false);
  const [deleteAllDataVisible, setDeleteAllDataVisible] = useState(false);

  const [filter, setFilter] = useState({
    selectedWallet: "",
    selectedAccount: "",
    fromDate: moment("2024-01-01"),
    toDate: moment("2030-01-01"),
  });

  const filterList = (filter) => {
    onFilterApplied(filter);
    setFilter(filter);
  };

  const clearFilter = (filter) => {
    onFilterApplied(filter);
    setFilter(filter);
  };

  const onNoPressed = () => {
    setDeleteAllDataVisible(false);
  };

  const onYesPressed = () => {
    storage.save({
      key: "transactions",
      data: [],
    });
    setDeleteAllDataVisible(false);
    onDataCleared();
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Search height={40} width={40} fill={"#DACC3E"} />
        <TextInput
          onChangeText={(searchText) => onSearchTextChanged(searchText)}
          style={{
            width: "70%",
            height: 35,
            backgroundColor: "#DACC3E",
            borderRadius: 20,
            paddingLeft: 10,
            paddingRight: 10,
          }}
        />
        <TouchableOpacity
          onPress={() => {
            setFilterVisible(!filterVisible);
          }}
        >
          <Filter height={40} width={40} fill={"#DACC3E"} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setDeleteAllDataVisible(true)}>
          <Clear height={40} width={40} fill={"#DACC3E"} stroke={"#DACC3E"} />
        </TouchableOpacity>
      </View>

      <FilterModal
        filter={filter}
        transactions={transactions}
        visible={filterVisible}
        onClosePressed={() => {
          setFilterVisible(false);
        }}
        onClearPressed={() => {
          setFilterVisible(false);
          clearFilter({
            selectedWallet: "",
            selectedAccount: "",
            fromDate: moment("2024-01-01"),
            toDate: moment("2030-01-01"),
          });
        }}
        onSavePressed={(filter) => {
          setFilterVisible(false);
          filterList(filter);
        }}
      />
      <YesNoModal
        message={localization.t("deleteAllData")}
        visible={deleteAllDataVisible}
        onNoPressed={onNoPressed}
        onYesPressed={onYesPressed}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 34,
    backgroundColor: "#AAA95A",
    height: 50,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    elevation: 5,
  },
});

export default HomeHeader;
