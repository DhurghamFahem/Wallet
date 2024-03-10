import { View, Text, StyleSheet } from "react-native";
import React from "react";

const HomeCard = ({ type, onPress }) => {
  const bgColor = type === "income" ? "#7FB7BE" : "#7D1538";
  const currentStyles = styles(bgColor);
  return (
    <View style={currentStyles.container}>
      <View style={currentStyles.bar}></View>
      <View style={currentStyles.content}>
        <View style={{ flexDirection: "row", flex: 1 }}>
          <View
            style={{
              width: "70%",
              alignItems: "start",
              justifyContent: "start",
            }}
          >
            <Text style={currentStyles.nameText}>Ali</Text>
            <Text style={currentStyles.noteText}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
              iusto
            </Text>
          </View>
          <View
            style={{
              width: "30%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={currentStyles.amountText}>5000</Text>
            <Text style={currentStyles.dateText}>01/02/2023</Text>
            <Text style={currentStyles.dateText}>06:30 AM</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = (bgColor) =>
  StyleSheet.create({
    container: {
      height: 100,
      width: "96%",
      backgroundColor: "#DACC3E",
      borderTopRightRadius: 20,
      borderBottomRightRadius: 20,
      marginRight: 10,
      marginLeft: 10,
      elevation: 10,
      marginTop: 5,
      flexDirection: "row",
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
    },
    bar: {
      backgroundColor: bgColor,
      width: 10,
      height: 100,
      borderTopLeftRadius: 20,
      borderBottomLeftRadius: 20,
    },
    content: {
      width: "97%",
      backgroundColor: "rgba(255, 255, 255, 0.6)",
      borderTopRightRadius: 20,
      borderBottomRightRadius: 20,
      padding: 2,
    },
    amountText: {
      fontSize: 25,
      color: bgColor,
      fontWeight: "800",
    },
    dateText: {
      color: "gray",
    },
    nameText: {
      fontSize: 18,
      fontWeight: "600",
      marginLeft: 10,
    },
    noteText: {
      color: "gray",
      fontWeight: "500",
      marginLeft: 15,
    },
  });

export default HomeCard;
