import {Pressable, StyleSheet, Text, View} from "react-native";
import Hr from "./Hr";
import {css} from '../Style/StyleListagemTabela'
import {Dados} from "../context/Dados";
import {useContext} from "react";

export default function ({navigation}){
    const {texto, setTexto} = useContext(Dados)
    const {cinza, setCinza} = useContext(Dados)
    const text = StyleSheet.create({
        texto:{
            fontSize: 16,
            color: texto
        },
        container: {
            backgroundColor: cinza,
            margin: 12,
            borderRadius: 12,
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between"
        }
    })
    return(
        <View style={text.container}>
            <View>
                <View style={css.linha}>
                    <Text style={text.texto}>Nome</Text>
                    <Text style={text.texto}>Valor</Text>
                    <Text style={text.texto}>Data</Text>
                </View>
                <Hr/>
                <View style={css.linhaBtn}>
                    <Pressable style={css.btn} onPress={() => navigation.navigate("Cadastro")}><Text style={css.btnTexto}>Adicionar</Text></Pressable>
                </View>
                <Hr/>
            </View>

            <View style={css.linhaBtn}>
                <Text style={text.texto}>Total: R$00,00</Text>
            </View>
        </View>
    )
}

