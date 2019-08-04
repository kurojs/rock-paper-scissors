import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, StatusBar } from "react-native";

import { PlayerCard, Button } from "./components";
import { getRoundOutcome, actions } from "./util/util";

export default function App() {
  const [playerAction, setPlayerAction] = useState(actions[0]);
  const [compAction, setCompAction] = useState(actions[0]);

  const [totalGame, setTotalGame] = useState(0);
  const [winGame, setWinGame] = useState(0);
  const [losseGame, setLosseGame] = useState(0);

  const [gamePrompt, setGamePrompt] = useState("Choose your weapon");

  const onChooseAction = action => {
    const [result, compAction] = getRoundOutcome(action);

    const newUserAction = actions.find(item => item.name === action);
    const newCompAction = actions.find(item => item.name === compAction);

    setGamePrompt(result);
    setPlayerAction(newUserAction);
    setCompAction(newCompAction);

    setTotalGame(totalGame + 1);
    if (result === "Victory!") {
      setWinGame(winGame + 1);
    }
    if (gamePrompt === "Defeat!") {
      setLosseGame(losseGame + 1);
    }
  };

  const getResultColor = () => {
    if (gamePrompt === "Victory!") return "green";
    if (gamePrompt === "Defeat!") return "red";
    return "blue";
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.gameStatic}>
        <Text
          style={{ fontSize: 22, fontWeight: "600", color: getResultColor() }}>
          {gamePrompt}
        </Text>
        <Text style={styles.staticText}>Total game: {totalGame}</Text>
        <Text style={styles.staticText}>
          Wins: {winGame} Looses: {losseGame} Ties:{" "}
          {totalGame - winGame - losseGame}
        </Text>
        <Text style={styles.staticText}>
          %Win: {Math.round((winGame / totalGame) * 100)} %Loose:{" "}
          {Math.round((losseGame / totalGame) * 100)} %Tie:{" "}
          {Math.round(((totalGame - winGame - losseGame) / totalGame) * 100)}
        </Text>
      </View>
      <View style={styles.actionsWrapper}>
        <PlayerCard player="Player" action={playerAction} />
        <Text style={styles.text}>vs</Text>
        <PlayerCard player="Computer" action={compAction} />
      </View>
      <View style={styles.buttonsWrapper}>
        {actions.map(item => (
          <Button
            key={item.name}
            name={item.name}
            onChooseAction={onChooseAction}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 8,
  },
  gameStatic: {
    flex: 0.2,
    alignItems: "center",
    justifyContent: "center",
  },
  actionsWrapper: {
    flex: 0.4,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "stretch",
    borderColor: "black",
    borderWidth: 1,
  },
  buttonsWrapper: {
    flex: 0.4,
    justifyContent: "center",
  },
  text: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  staticText: {
    fontSize: 18,
    fontWeight: "600",
  },
});
