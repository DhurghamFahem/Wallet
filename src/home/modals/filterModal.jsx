import {
  View,
  Modal,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import Done from "../../../assets/svgs/done.svg";
import Cancel from "../../../assets/svgs/cancel.svg";
import Select from "../components/select";
import localization from "../../../localization/localization.jsx";
import DateTimePicker from "@react-native-community/datetimepicker";
import ShowDatePickerButton from "../components/showDatePickerButton.jsx";
import moment from "moment";

const FilterModal = ({
  filter,
  transactions,
  visible,
  onClosePressed,
  onClearPressed,
  onSavePressed,
}) => {
  const [wallets, setWallets] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [selectedWallet, setSelectedWallet] = useState("");
  const [selectedAccount, setSelectedAccount] = useState("");
  const [fromDate, setFromDate] = useState(moment("2024-01-01"));
  const [toDate, setToDate] = useState(moment("2030-01-01"));
  const [selectedDate, setSelectedDate] = useState(moment("2024-01-01"));
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showFromDatePickerPressed, setShowFromDatePickerPressed] =
    useState(false);

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

    setSelectedAccount(filter.selectedAccount);
    setSelectedWallet(filter.selectedWallet);
    setFromDate(filter.fromDate);
    setToDate(filter.toDate);
  }, [visible]);

  const onDateChanged = ({ type }, selectedDate) => {
    if (type === "set") {
      if (showFromDatePickerPressed) setFromDate(moment(selectedDate));
      else setToDate(moment(selectedDate));
      setShowDatePicker(false);
    } else setShowDatePicker(!showDatePicker);
  };

  const selectedWalletChanged = (wallet, index) => {
    setSelectedWallet(wallet);
  };

  const selectedAccountChanged = (account, index) => {
    setSelectedAccount(account);
  };

  return (
    <Modal transparent={true} visible={visible}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(0,0,0,0.8)",
        }}
      >
        <Pressable style={styles.pressable} onPress={onClosePressed}>
          <View style={styles.container}>
            <View style={styles.filtersContainer}>
              <Select
                defaultValue={selectedWallet}
                defaultButtonText={localization.t(
                  "defaultSelectWalletButtonText"
                )}
                searchPlaceHolder={localization.t("searchWallets")}
                data={wallets}
                onSelectChanged={(wallet, index) =>
                  selectedWalletChanged(wallet, index)
                }
              />
              <Select
                defaultValue={selectedAccount}
                defaultButtonText={localization.t(
                  "defaultSelectAccountButtonText"
                )}
                searchPlaceHolder={localization.t("searchAccounts")}
                data={accounts}
                onSelectChanged={(account, index) =>
                  selectedAccountChanged(account, index)
                }
              />
              <ShowDatePickerButton
                title={localization.t("from")}
                selectedDate={fromDate.format("YYYY-MM-DD")}
                selectDatePressed={() => {
                  setSelectedDate(fromDate);
                  setShowFromDatePickerPressed(true);
                  setShowDatePicker(true);
                }}
              />
              <ShowDatePickerButton
                title={localization.t("to")}
                selectedDate={toDate.format("YYYY-MM-DD")}
                selectDatePressed={() => {
                  setSelectedDate(toDate);
                  setShowFromDatePickerPressed(false);
                  setShowDatePicker(true);
                }}
              />
              {showDatePicker && (
                <DateTimePicker
                  value={selectedDate.toDate()}
                  onChange={(e, date) => onDateChanged(e, date)}
                />
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
                onPress={onClearPressed}
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
  },
  filtersContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FilterModal;
