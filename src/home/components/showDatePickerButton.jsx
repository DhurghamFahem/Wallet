import { TouchableOpacity, StyleSheet, Text } from "react-native";
import React from "react";
import Date from "../../../assets/svgs/date.svg";

const ShowDatePickerButton = ({ title, selectedDate, selectDatePressed }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={selectDatePressed}>
      <Date width={30} height={30} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{selectedDate}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "94%",
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#444",
    marginTop: 5,
    alignItems: "center",
    justifyContent: "start",
    flexDirection: "row",
  },
  title: {
    color: "#444",
    textAlign: "left",
    fontSize: 18,
    marginLeft: 5,
    marginRight: 5,
  },
  date: {
    color: "#444",
    fontWeight: "600",
    textAlign: "left",
    fontSize: 19,
    marginLeft: 5,
    marginRight: 5,
  },
});

export default ShowDatePickerButton;
