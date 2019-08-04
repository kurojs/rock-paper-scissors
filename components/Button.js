import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

export const Button = ({ name, onChooseAction }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => onChooseAction(name)}>
      <Text style={styles.buttonText}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 0.3,
    backgroundColor: "#bdeefc",
    marginHorizontal: 64,
    marginVertical: 5,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});
