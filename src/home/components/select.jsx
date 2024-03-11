import { StyleSheet, View } from "react-native";
import React from "react";
import SelectDropdown from "react-native-select-dropdown";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const Select = ({
  defaultButtonText,
  searchPlaceHolder,
  defaultValue,
  data,
  onSelectChanged,
}) => {
  return (
    <View>
      <SelectDropdown
        data={data}
        onSelect={(selectedItem, index) => {
          onSelectChanged(selectedItem, index);
        }}
        defaultValue={defaultValue}
        defaultButtonText={defaultButtonText}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          return item;
        }}
        buttonStyle={styles.dropdownBtnStyle}
        buttonTextStyle={styles.dropdownBtnTxtStyle}
        renderDropdownIcon={(isOpened) => {
          return (
            <FontAwesome
              name={isOpened ? "chevron-up" : "chevron-down"}
              color={"#444"}
              size={18}
            />
          );
        }}
        dropdownIconPosition={"right"}
        dropdownStyle={styles.dropdownDropdownStyle}
        rowStyle={styles.dropdownRowStyle}
        rowTextStyle={styles.dropdownRowTxtStyle}
        selectedRowStyle={styles.dropdownSelectedRowStyle}
        search
        searchInputStyle={styles.dropdownsearchInputStyleStyle}
        searchPlaceHolder={searchPlaceHolder}
        searchPlaceHolderColor={"darkgrey"}
        renderSearchInputLeftIcon={() => {
          return <FontAwesome name={"search"} color={"#444"} size={18} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownBtnStyle: {
    width: "94%",
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#444",
    marginTop: 5,
  },
  dropdownBtnTxtStyle: {
    color: "#444",
    textAlign: "left",
  },
  dropdownDropdownStyle: {
    backgroundColor: "#EFEFEF",
  },
  dropdownRowStyle: {
    backgroundColor: "#EFEFEF",
    borderBottomColor: "#C5C5C5",
  },
  dropdownRowTxtStyle: {
    color: "#444",
    textAlign: "left",
  },
  dropdownSelectedRowStyle: {
    backgroundColor: "rgba(0,0,0,0.1)",
  },
  dropdownsearchInputStyleStyle: {
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#444",
  },
});

export default Select;
