import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import ActionButton from "./actionButton";
import AddTransactionModal from "../modals/addTransactionModal";

const HomeFooter = ({ summation, transactions, onTransactionSaved }) => {
  const [isAddTransactionVisible, setIsAddTransactionVisible] = useState(false);
  const [type, setType] = useState("");

  const onClosePressed = () => {
    setIsAddTransactionVisible(false);
  };

  const onSavePressed = () => {
    setIsAddTransactionVisible(false);
    onTransactionSaved();
  };

  return (
    <View style={styles.container}>
      <ActionButton
        iconType={"income"}
        onPress={() => {
          setType("income");
          setIsAddTransactionVisible(true);
        }}
      />
      <View style={styles.summationContainer}>
        <Text
          style={[
            styles.summationText,
            {
              color:
                summation > 0 ? "#7FB7BE" : summation < 0 ? "#7D1538" : "black",
            },
          ]}
        >
          {summation.toLocaleString()}
        </Text>
      </View>
      <ActionButton
        iconType={"outcome"}
        onPress={() => {
          setType("outcome");
          setIsAddTransactionVisible(true);
        }}
      />
      <AddTransactionModal
        type={type}
        transactions={transactions}
        onTransactionSaved={onSavePressed}
        visible={isAddTransactionVisible}
        onClosePressed={onClosePressed}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
  },
  summationContainer: {
    width: "40%",
    flex: 1,
    height: 50,
    backgroundColor: "#DACC3E",
    alignItems: "center",
    justifyContent: "center",
  },
  summationText: {
    fontSize: 30,
    fontWeight: "800",
  },
});

export default HomeFooter;
