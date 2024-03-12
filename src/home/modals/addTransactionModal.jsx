import {
  Modal,
  Pressable,
  TouchableOpacity,
  View,
  StyleSheet,
  TextInput,
  Text,
} from "react-native";
import React, { useState, useEffect } from "react";
import Done from "../../../assets/svgs/done.svg";
import Cancel from "../../../assets/svgs/cancel.svg";
import AutoComplete from "../components/autoComplete";
import localization from "../../../localization/localization.jsx";

const AddTransactionModal = ({ type, visible, transactions }) => {
  const [walletName, setWalletName] = useState("");
  const [accountName, setAccountName] = useState("");
  const [amount, setAmount] = useState(0.0);
  const [note, setNote] = useState("");

  const [wallets, setWallets] = useState([]);
  const [accounts, setAccounts] = useState([]);

  const onWalletChangeText = (text) => {
    setWalletName(text);
  };
  const onAccountChangeText = (text) => {
    setAccountName(text);
  };

  useEffect(() => {
    var walletSet = new Set();
    var accountSet = new Set();
    for (let i = 0; i < transactions.length; i++) {
      let wallet = transactions[i].wallet;
      let account = transactions[i].account;
      if (walletSet.has(wallet) === false) walletSet.add(wallet);
      if (accountSet.has(account) === false) accountSet.add(account);
    }
    setWallets(Array.from(walletSet));
    setAccounts(Array.from(accountSet));
  }, [visible]);

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
            <Text style={{ marginTop: 15, fontSize: 20, fontWeight: "600" }}>
              {type === "income"
                ? localization.t("income")
                : localization.t("outcome")}
            </Text>
            <View style={styles.formContainer}>
              <AutoComplete
                data={wallets}
                placeholder={localization.t("walletPlaceholder")}
                onChangeText={(text) => onWalletChangeText(text)}
              />
              <AutoComplete
                data={accounts}
                placeholder={localization.t("accountPlaceholder")}
                onChangeText={(text) => onAccountChangeText(text)}
              />
              <View style={{ width: "94%", marginTop: 5 }}>
                <TextInput
                  placeholder={localization.t("amount")}
                  keyboardType="numeric"
                  style={styles.textInput}
                  onChangeText={(text) => setAmount(parseFloat(text))}
                />
              </View>
              <View style={{ width: "94%", marginTop: 5 }}>
                <TextInput
                  placeholder={localization.t("note")}
                  style={styles.textInput}
                  onChangeText={(text) => setNote(text)}
                />
              </View>
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
    height: "60%",
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
  textInput: {
    width: "94%",
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#444",
    padding: 5,
  },
});

export default AddTransactionModal;
