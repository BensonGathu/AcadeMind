import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const InstructionText = (props) => {
  return (
    <Text style={[styles.instructionText, props.style]}>{props.children}</Text>
  );
};

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
    fontFamily: 'open-sans-regular',
  },
});

export default InstructionText;
