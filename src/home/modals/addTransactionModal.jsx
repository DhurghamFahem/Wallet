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
import storage from "../../../data/storage.jsx";
import uuid from "react-native-uuid";
import * as Yup from "yup";
import { Formik } from "formik";
import moment from "moment";

const AddTransactionModal = ({
  type,
  visible,
  transactions,
  onTransactionSaved,
  onClosePressed,
  transaction,
}) => {
  const validationSchema = Yup.object().shape({
    wallet: Yup.string().required("Wallet Name is required"),
    account: Yup.string().required("Account Name is required"),
    amount: Yup.number()
      .required("Amount is required")
      .positive("Input must be a positive number"),
    note: Yup.string(),
  });

  const [wallets, setWallets] = useState([]);
  const [accounts, setAccounts] = useState([]);

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

  const initialValues = {
    wallet: transaction === undefined ? "" : transaction.wallet,
    account: transaction === undefined ? "" : transaction.account,
    amount: transaction === undefined ? "0.0" : transaction.amount.toString(),
    note: transaction === undefined ? "" : transaction.note,
  };

  const handleSubmit = (values) => {
    if (transaction === undefined) {
      const obj = {
        id: uuid.v4(),
        wallet: values.wallet,
        account: values.account,
        note: values.note,
        type: type,
        amount: parseFloat(values.amount),
        date: moment(),
      };

      transactions.push(obj);

      storage.save({
        key: "transactions",
        data: transactions,
      });
      onTransactionSaved(obj);
    } else {
      const obj = {
        id: transaction.id,
        wallet: values.wallet,
        account: values.account,
        note: values.note,
        type: transaction.type,
        amount: parseFloat(values.amount),
        date: transaction.date,
      };

      const index = transactions.map((c) => c.id).indexOf(transaction.id);
      transactions[index] = obj;
      storage.save({
        key: "transactions",
        data: transactions,
      });
      onTransactionSaved(obj);
    }
  };

  return (
    <Modal transparent={true} visible={visible}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor:
            type === "income" ? "rgba(0,20,0,0.8)" : "rgba(20,0,0,0.8)",
        }}
      >
        <Pressable style={styles.pressable} onPress={onClosePressed}>
          <View style={styles.container}>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
              }) => (
                <View
                  style={{
                    width: "100%",
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{ marginTop: 15, fontSize: 20, fontWeight: "600" }}
                  >
                    {type === "income"
                      ? localization.t("income")
                      : localization.t("outcome")}
                  </Text>
                  <View style={styles.formContainer}>
                    <AutoComplete
                      data={wallets}
                      placeholder={localization.t("walletPlaceholder")}
                      onChangeText={handleChange("wallet")}
                      onBlur={handleBlur("wallet")}
                      value={values.wallet}
                    />
                    {touched.wallet && errors.wallet && (
                      <Text style={styles.errorText}>{errors.wallet}</Text>
                    )}
                    <AutoComplete
                      data={accounts}
                      placeholder={localization.t("accountPlaceholder")}
                      onChangeText={handleChange("account")}
                      onBlur={handleBlur("account")}
                      value={values.account}
                    />
                    {touched.account && errors.account && (
                      <Text style={styles.errorText}>{errors.account}</Text>
                    )}
                    <View style={{ width: "94%", marginTop: 5 }}>
                      <TextInput
                        placeholder={localization.t("amount")}
                        keyboardType="numeric"
                        style={styles.textInput}
                        onChangeText={handleChange("amount")}
                        onBlur={handleBlur("amount")}
                        value={values.amount}
                      />
                    </View>
                    {touched.amount && errors.amount && (
                      <Text style={styles.errorText}>{errors.amount}</Text>
                    )}
                    <View style={{ width: "94%", marginTop: 5 }}>
                      <TextInput
                        placeholder={localization.t("note")}
                        style={styles.textInput}
                        onChangeText={handleChange("note")}
                        onBlur={handleBlur("note")}
                        value={values.note}
                      />
                    </View>
                    {touched.note && errors.note && (
                      <Text style={styles.errorText}>{errors.note}</Text>
                    )}
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
                      onPress={onClosePressed}
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
                      onPress={handleSubmit}
                    >
                      <Done width={30} height={30} fill={"#E6FDFF"} />
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </Formik>
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
    height: "80%",
    width: "90%",
    backgroundColor: "#E6FDFF",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    elevation: 10,
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
  errorText: {
    color: "red",
    marginBottom: 10,
  },
});

export default AddTransactionModal;
