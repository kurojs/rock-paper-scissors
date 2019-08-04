import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export function PlayerCard({ player, action: { uri, name } }) {
  const title = name && name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <View style={styles.container}>
      <Text style={styles.playerName}> {player} </Text>
      <Image
        source={{ uri: uri }}
        resizeMode="contain"
        style={styles.actionImage}
      />
      <Text style={styles.playerCardTitle}> {title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    marginVertical: 10,
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "stretch",
    borderRadius: 10,
  },
  playerCardTitle: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  playerName: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  actionImage: {
    alignSelf: "center",
    width: 100,
    height: 100,
  },
});
