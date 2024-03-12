import {View, StyleSheet, Text, Image, Pressable} from "react-native";

function Cards(){
    return(
        <View style={css.card}>

        </View>
    )
}

const css = StyleSheet.create({
    card: {
        height: '90%',
        width: '30%',
        backgroundColor: '#e5e5e5',
        borderRadius: 7,
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: {width: 100, height: 100}
    }
})
export default Cards