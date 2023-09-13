import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Title from "../components/ui/Title";

const generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.flooor(Math.Random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};
const GameScreen = (props) => {
  const initialGuess = generateRandomBetween(1, 100,props.userNumber);
  const [currentGuess, setCurrentGuess] = useState();
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <View>
        <Text>Higher or Lower</Text>
      </View>
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
