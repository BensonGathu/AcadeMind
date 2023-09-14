import { View, StyleSheet } from "react-native";

const Card = (props) => {
  return <View style={styles.cardContainer}> 
  {props.children}
  </View>;
};

const styles = StyleSheet.create({
    cardContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 24,
        marginTop: 36,
        padding: 16,
        backgroundColor: "#420329",
        borderRadius: 8,
        elevation: 5,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
      },
})
export default Card;
