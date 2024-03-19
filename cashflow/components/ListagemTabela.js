import {Pressable, StyleSheet, Text, View} from "react-native";
import Hr from "./Hr";
import {css} from '../Style/StyleListagemTabela'
import TabelaLinha from "./TabelaLinha";

export default function ({navigation}){
    return(
        <View style={css.container}>
            <View>
                <TabelaLinha data={'Data'} nome={'Nome'} valor={'Valor'}/>
                <Hr/>
                <View style={css.linhaBtn}>
                    <Pressable style={css.btn} onPress={() => navigation.navigate("Cadastro")}><Text style={css.btnTexto}>Adicionar</Text></Pressable>
                </View>
                <Hr/>
            </View>

            <View style={css.linhaBtn}>
                <Text style={css.texto}>Total: R$00,00</Text>
            </View>
        </View>
    )
}

