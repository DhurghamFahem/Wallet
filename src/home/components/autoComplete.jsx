import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";

const AutoComplete = ({ data, placeholder, onChangeText, onBlur, value }) => {
  const [suggestions, setSuggestions] = useState(data);
  const [isOpen, setIsOpen] = useState(false);

  const onTextChanged = (text) => {
    let lst = [];
    for (let i = 0; i < data.length; i++) {
      if (
        text !== "" &&
        data[i].toLowerCase().includes(text.toLowerCase()) === true
      )
        lst.push(data[i]);
    }
    setIsOpen(lst.length > 0);
    setSuggestions(lst);
    onChangeText(text);
  };

  const onItemSelected = (item) => {
    setIsOpen(false);
    onChangeText(item);
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        style={styles.textInput}
        value={value}
        onBlur={onBlur}
        onChangeText={(text) => onTextChanged(text)}
      />
      {isOpen && (
        <View style={styles.suggestionsContainer}>
          <FlatList
            data={suggestions}
            keyExtractor={(item) => item.toString()}
            contentContainerStyle={{ flexGrow: 1 }}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.suggestionElementContainer}
                onPress={() => onItemSelected(item)}
              >
                <Text style={styles.suggestionElementText}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "94%",
    height: 50,
    marginTop: 5,
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
  suggestionsContainer: {
    zIndex: 10,
    flex: 1,
    width: "94%",
    backgroundColor: "gray",
    position: "absolute",
    marginTop: 51,
    borderRadius: 8,
  },
  suggestionElementContainer: {
    height: 40,
    borderBottomWidth: 1,
    borderRadius: 8,
    alignItems: "start",
    justifyContent: "center",
    padding: 5,
  },
  suggestionElementText: {
    fontSize: 18,
    color: "white",
  },
});

export default AutoComplete;
