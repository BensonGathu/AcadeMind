import { View, Text, Image, StyleSheet } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";
const GameOverScreen = (props) => {
  return (
    <View style={styles.rotContainer}>
      <Title>Game Over!!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.jpg")}
        />
      </View>

      <Text style={styles.summaryText}>
        Your phone needed
        <Text style={styles.highlight}> {props.roundsNumber}</Text> rounds to
        guess the number
        <Text style={styles.highlight}> {props.userNumber}</Text>
      </Text>

      <PrimaryButton onPress={props.onRestartGame}>
        <Text>Start a new Game</Text>
      </PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  rotContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    backgroundColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans-regular",
    fontSize: 24,
    textAlign: "center",
    marginVertical: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});

export default GameOverScreen;
