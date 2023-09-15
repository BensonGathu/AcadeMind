import { Text, StyleSheet } from "react-native";


const Title = (props) =>{
 return <Text style={styles.title}>{props.children}</Text>
}


const styles = StyleSheet.create({
    title:{
        fontSize:24,
     fontFamily:'open-sans-bold',
        color:"white",
        textAlign:"center",
        borderWidth:2,
        borderColor:"white",
        padding:12
    }
    
})
export default Title;
