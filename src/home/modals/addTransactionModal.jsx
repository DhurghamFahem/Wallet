import {
  Modal,
  Pressable,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import React from "react";
import Done from "../../../assets/svgs/done.svg";
import Cancel from "../../../assets/svgs/cancel.svg";

const AddTransactionModal = ({ type }) => {
  return (
    <Modal transparent={true} visible={true}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor:
            type === "income" ? "rgba(0,20,0,0.8)" : "rgba(20,0,0,0.8)",
        }}
      >
        <Pressable style={styles.pressable}>
          <View style={styles.container}>
            <View style={styles.formContainer}>
              <View style={{ width: "70%", flex: 1 }}></View>
            </View>
            <View
              style={{
                height: 40,
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <TouchableOpacity
                style={{
                  width: "50%",
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#7D1538",
                  borderBottomLeftRadius: 20,
                }}
              >
                <Cancel width={30} height={30} fill={"#E6FDFF"} />
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  width: "50%",
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#7FB7BE",
                  borderBottomRightRadius: 20,
                }}
                onPress={() =>
                  onSavePressed({
                    selectedWallet: selectedWallet,
                    selectedAccount: selectedAccount,
                    fromDate: fromDate,
                    toDate: toDate,
                  })
                }
              >
                <Done width={30} height={30} fill={"#E6FDFF"} />
              </TouchableOpacity>
            </View>
          </View>
        </Pressable>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  pressable: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    height: "40%",
    width: "90%",
    backgroundColor: "#E6FDFF",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    elevation: 10,
    borderTopWidth: 2,
    borderBlockColor: "red",
  },
  formContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AddTransactionModal;
