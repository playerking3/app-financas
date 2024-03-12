import {Pressable, StyleSheet, Text, View} from "react-native";
import Hr from "./Hr";
import {css} from '../Style/StyleListagemTabela'

export default function (){
    return(
        <View style={css.container}>
            <View>
                <View style={css.linha}>
                    <Text style={css.texto}>Nome</Text>
                    <Text style={css.texto}>Valor</Text>
                    <Text style={css.texto}>Data</Text>
                </View>
                <Hr/>
                <View style={css.linhaBtn}>
                    <Pressable style={css.btn}><Text style={css.btnTexto}>Adicionar</Text></Pressable>
                </View>
                <Hr/>
            </View>

            <View style={css.linhaBtn}>
                <Text style={css.texto}>Total: R$00,00</Text>
            </View>
        </View>
    )
}

