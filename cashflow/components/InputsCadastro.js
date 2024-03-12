import {StyleSheet, Text, TextInput, View} from "react-native";
import {useState} from "react";

export default function (props){

    const [nome, setNome] = useState("");
    const [tipo, setTipo] = useState("")

    return (
        <View>
            <Text>{props.nome}</Text>
            <TextInput
                style={css.input}
                placeholder="Digite aqui!"
                keyboardType={props.tipo}
            />
        </View>
    )
}

const css = StyleSheet.create({
    inputs: {
        height: 40,
        borderColor: "black",
        borderBottomWidth: 2,
        paddingHorizontal: "40%" ,
        borderRadius: 20
    }
})