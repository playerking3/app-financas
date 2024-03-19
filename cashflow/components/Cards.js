import {View, StyleSheet, Text, Image, Pressable} from "react-native";
import {css} from '../Style/StyleCards'
import {Dados} from "../context/Dados";
import {useContext} from "react";
function Cards(){
    const {cinza, setCinza} = useContext(Dados)
    const card = StyleSheet.create({
        card: {
            backgroundColor: cinza,
        }
    })
    return(
        <View style={[css.card, card.card]}>

        </View>
    )
}
export default Cards