import { View, StyleSheet } from "react-native";

const ButtonsContainer = (props) => {
  return <View style={styles.buttonsContainer}>{props.children}</View>;
};

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
  },
});

export default ButtonsContainer;
