import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Delete from "../../../assets/svgs/delete.svg";
import Edit from "../../../assets/svgs/edit.svg";

const HomeCard = ({ transaction }) => {
  const bgColor = transaction.type === "income" ? "#7FB7BE" : "#7D1538";
  const currentStyles = styles(bgColor);

  const getAmount = () => {
    return transaction.type === "income"
      ? "+" + transaction.amount.toLocaleString()
      : "-" + transaction.amount.toLocaleString();
  };

  return (
    <View style={currentStyles.container}>
      <View style={currentStyles.bar}></View>
      <View style={currentStyles.content}>
        <View style={currentStyles.infoContainer}>
          <View style={currentStyles.leftContainer}>
            <Text style={currentStyles.walletText}>{transaction.wallet}</Text>
            <Text style={currentStyles.nameText}>{transaction.account}</Text>
            <Text style={currentStyles.noteText}>{transaction.note}</Text>
          </View>
          <View style={currentStyles.rightContainer}>
            <Text style={currentStyles.amountText}>{getAmount()}</Text>
            <Text style={currentStyles.dateText}>
              {transaction.date.format("YYY-MM-DD")}
            </Text>
            <Text style={currentStyles.dateText}>
              {transaction.date.format("h:mm:ss a")}
            </Text>
          </View>
        </View>

        <View style={currentStyles.actionBar}>
          <TouchableOpacity style={currentStyles.deleteButton}>
            <Delete height={20} width={20} fill={"#DACC3E"} />
          </TouchableOpacity>
          <TouchableOpacity style={currentStyles.editButton}>
            <Edit height={20} width={20} fill={"#DACC3E"} />
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
    walletText: {
      fontSize: 22,
      fontWeight: "900",
      marginLeft: 10,
    },
    nameText: {
      fontSize: 18,
      fontWeight: "900",
      marginLeft: 10,
      color: "gray",
    },
    noteText: {
      color: "gray",
      fontWeight: "500",
      marginLeft: 15,
    },
    deleteButton: {
      backgroundColor: "#7D1538",
      width: "50%",
      height: 30,
      borderTopLeftRadius: 20,
      borderBottomLeftRadius: 20,
      alignItems: "center",
      justifyContent: "center",
    },
    editButton: {
      backgroundColor: "#7FB7BE",
      width: "50%",
      height: 30,
      borderTopRightRadius: 20,
      borderBottomRightRadius: 20,
      alignItems: "center",
      justifyContent: "center",
    },
    actionBar: {
      height: 30,
      backgroundColor: "red",
      width: "96%",
      flexDirection: "row",
      borderRadius: 20,
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      justifyContent: "space-around",
      alignItems: "center",
    },
    infoContainer: {
      flexDirection: "row",
      flex: 1,
    },
    leftContainer: {
      width: "60%",
      alignItems: "start",
      justifyContent: "center",
    },
    rightContainer: {
      width: "40%",
      alignItems: "center",
      justifyContent: "center",
    },
  });

export default HomeCard;
