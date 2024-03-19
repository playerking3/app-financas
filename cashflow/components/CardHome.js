import {View, StyleSheet, Text, Image, Pressable} from "react-native";
import Cards from "./Cards";
import {css} from "../Style/StyleCardHome";
import {Dados} from "../context/Dados";
import {useContext} from "react";

function CardHome (){
    const {texto, setTexto} = useContext(Dados)
    const dark = StyleSheet.create({
        text: {
            color:texto
        }
    })
    return(
        <View style={css.container}>
            <View style={css.textoCards}>
                <Text style={dark.text}>
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
export default CardHome