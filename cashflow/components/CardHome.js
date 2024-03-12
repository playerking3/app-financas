import {View, StyleSheet, Text, Image, Pressable} from "react-native";
import Cards from "./Cards";

function CardHome (){
    return(
        <View style={css.container}>
            <View style={css.textoCards}>
                <Text>
                    Despesas Fixas
                </Text>
                <Pressable style={css.btnHub}>
                    <Text style={css.textadd}>Add+</Text>
                </Pressable>
            </View>
            <View style={css.containerCards}>
                <Cards></Cards>
                <Cards></Cards>
                <Cards></Cards>
            </View>
        </View>
    )
}

const css = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-around',
        height: '25%',
        width: '100%',
    },
    containerCards: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: '90%',
        width: '100%'
    },
    textoCards: {
        width:'100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10
    },
    textadd:{
        color: '#ffdc03'
    }
})
export default CardHome