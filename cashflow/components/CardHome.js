import {View, StyleSheet, Text, Image, Pressable} from "react-native";
import Cards from "./Cards";
import {css} from "../Style/StyleCardHome";

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
export default CardHome