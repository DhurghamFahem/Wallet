import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Income from "../../../assets/svgs/income.svg";

const ActionButton = ({ iconType, onPress }) => {
  const bgColor = iconType === "income" ? "#7FB7BE" : "#7D1538";
  const currentStyles = styles(bgColor);
  return (
    <TouchableOpacity style={currentStyles.container} onPress={onPress}>
      {iconType === "income" ? (
        <Income width={50} height={50} fill={"#D3F3EE"} />
      ) : (
        <Income
          width={50}
          height={50}
          fill={"#BC2C1A"}
          style={{ transform: [{ rotate: "180deg" }] }}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = (bgColor) =>
  StyleSheet.create({
    container: {
      height: 50,
      width: "50%",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: bgColor,
    },
  });

export default ActionButton;
