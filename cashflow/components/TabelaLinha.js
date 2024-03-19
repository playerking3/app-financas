import {css} from "../Style/StyleListagemTabela";
import {Text, View} from "react-native";



export default function ({nome, valor, data}){
    return (
        <View style={css.linha}>
            <Text style={css.texto}>{nome}</Text>
            <Text style={css.texto}>{valor}</Text>
            <Text style={css.texto}>{data}</Text>
        </View>
    )
}
