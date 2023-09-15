import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";
const GuessLogItem = (props) => {
  return (
    <View style={styles.listItem}>
      <Text>#{props.roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's Guess: {props.guess}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    shadowColor: "black",
    elevation: 4,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  itemText: {
    fontFamily: "open-sans-regular",
  },
});
export default GuessLogItem;
