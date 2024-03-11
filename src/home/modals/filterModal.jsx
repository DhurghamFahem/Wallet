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

const FilterModal = ({ transactions }) => {
  const [wallets, setWallets] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [selectedWallet, setSelectedWallet] = useState("");
  const [selectedAccount, setSelectedAccount] = useState("");

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
  }, []);

  const selectedWalletChanged = (wallet, index) => {
    console.log(wallet);
  };

  const selectedAccountChanged = (account, index) => {
    console.log(account);
  };

  return (
    <Modal transparent={true} visible={true}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(0,0,0,0.8)",
        }}
      >
        <Pressable style={styles.pressable}>
          <View style={styles.container}>
            <View style={styles.filtersContainer}>
              <Select
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
                defaultButtonText={localization.t(
                  "defaultSelectAccountButtonText"
                )}
                searchPlaceHolder={localization.t("searchAccounts")}
                data={accounts}
                onSelectChanged={(account, index) =>
                  selectedAccountChanged(account, index)
                }
              />
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
    height: "25%",
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
