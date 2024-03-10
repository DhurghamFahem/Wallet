import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Delete from "../../../assets/svgs/delete.svg";
import Edit from "../../../assets/svgs/edit.svg";

const HomeCard = ({ type, onPress }) => {
  const bgColor = type === "income" ? "#7FB7BE" : "#7D1538";
  const currentStyles = styles(bgColor);

  const getAmount = () => {
    return type === "income" ? "+" + "5,000" : "-" + "5,000";
  };

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
            <Text style={currentStyles.amountText}>{getAmount()}</Text>
            <Text style={currentStyles.dateText}>01/02/2023</Text>
            <Text style={currentStyles.dateText}>06:30 AM</Text>
          </View>
        </View>

        <View
          style={{
            height: 50,
            backgroundColor: "red",
            width: "96%",
            flexDirection: "row",
            borderRadius: 20,
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#7D1538",
              width: "50%",
              height: 50,
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Delete height={30} width={30} fill={"#DACC3E"} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#7FB7BE",
              width: "50%",
              height: 50,
              borderTopRightRadius: 20,
              borderBottomRightRadius: 20,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Edit height={30} width={30} fill={"#DACC3E"} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = (bgColor) =>
  StyleSheet.create({
    container: {
      height: 150,
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
      height: 150,
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
