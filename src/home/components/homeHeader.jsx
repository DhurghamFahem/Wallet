import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import Search from "../../../assets/svgs/search.svg";
import Filter from "../../../assets/svgs/filter.svg";

const HomeHeader = ({ onSearchTextChanged }) => {
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
            width: "79%",
            height: 35,
            backgroundColor: "#DACC3E",
            borderRadius: 20,
            paddingLeft: 10,
            paddingRight: 10,
          }}
        />
        <Filter height={40} width={40} fill={"#DACC3E"} />
      </View>
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
