import {Pressable, StyleSheet, Text, View} from "react-native";
import Hr from "./Hr";

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

const css = StyleSheet.create({
    container: {
        backgroundColor: '#D2D2D2',
        margin: 12,
        borderRadius: 12,
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between"
    },
    linha: {
        padding: 8,
        flexDirection: "row",
        justifyContent: "space-between",

    },
    texto:{
        fontSize: 16
    },

    linhaBtn: {
        padding: 8,
        flexDirection: "row",
        justifyContent: "center"
    },
    btn:{
        backgroundColor: '#FFD60A',
        paddingHorizontal: 10,
        borderRadius: 20
    },
    btnTexto: {
        color: 'white',
        fontSize: 20
    }
})