import { View, Text, Pressable, StyleSheet } from "react-native";

const PrimaryButton = (props) => {
  const pressHandler = () => {
    console.log("PRessed");
  };
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={pressHandler}
        android_ripple={{ color: "#640233" }}
      >
        <Text style={styles.buttonText}>{props.children}</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 30,
    margin: 4,
    overflow: "hidden",
 
  },
  buttonInnerContainer: {
    backgroundColor: "#72063c",

    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 2,
    margin: 4,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});

export default PrimaryButton;
