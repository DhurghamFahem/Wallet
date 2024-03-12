import {
  View,
  Text,
  Modal,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import localization from "../../../localization/localization.jsx";

const YesNoModal = ({ message, visible, onYesPressed, onNoPressed }) => {
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
        <Pressable>
          <View style={styles.container}>
            <View style={styles.formContainer}>
              <Text style={styles.message}>
                {localization.t("areYouSure") + message + "?"}
              </Text>
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
                onPress={onNoPressed}
              >
                <Text style={styles.text}>{localization.t("no")}</Text>
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
                onPress={onYesPressed}
              >
                <Text style={styles.text}>{localization.t("yes")}</Text>
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
  formContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  message: {
    fontSize: 20,
    fontWeight: "600",
  },
  text: {
    fontSize: 20,
    fontWeight: "600",
    color: "#E6FDFF",
  },
});

export default YesNoModal;
