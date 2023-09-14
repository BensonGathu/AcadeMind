import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

minBoundary = 1;
maxBoundary = 100;
const generateRandomBetween = (minBoundary, maxBoundary, exclude) => {
  const rndNum =
    Math.floor(Math.random() * (maxBoundary - minBoundary)) + minBoundary;
  if (rndNum === exclude) {
    return generateRandomBetween(minBoundary, maxBoundary, exclude);
  } else {
    return rndNum;
  }
};

const GameScreen = (props) => {
  const initialGuess = generateRandomBetween(1, 100, props.userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < props.userNumber) ||
      (direction === "higher" && currentGuess > props.userNumber)
    ) {
      Alert.alert("Don't Lie", "You know that is wrong..", [
        { Text: "Sorry!", style: "cancel" },
      ]);
    }
    if (direction == "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNum = generateRandomBetween(1, 100, currentGuess);

    setCurrentGuess(newRndNum);
  };

  useEffect(() => {
    if (currentGuess === props.userNumber) {
      {
        props.onGameIsOver();
      }
    } else {
      console.log("No");
    }
  }, [currentGuess, props.userNumber, props.onGameIsOver]);
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>

      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <View>
          <InstructionText>Higher or Lower</InstructionText>
          <View>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>
              +
            </PrimaryButton>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              -
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
export default GameScreen;
