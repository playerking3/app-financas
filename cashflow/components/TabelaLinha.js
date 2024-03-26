import {css} from "../Style/StyleListagemTabela";
import {StyleSheet, Text, View} from "react-native";


export default function ({nome, valor, data, cor}){
    const cores = StyleSheet.create({
        texto:{
            color: cor
        }
    })
    return (
        <View style={css.linha}>
            <Text style={cores.texto}>{nome}</Text>
            <Text style={cores.texto}>{valor}</Text>
            <Text style={cores.texto}>{data}</Text>
        </View>
    )
}


