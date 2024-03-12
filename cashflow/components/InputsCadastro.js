import {StyleSheet, Text, TextInput, View} from "react-native";
import {useState} from "react";

export default function (props){

    const [nome, setNome] = useState("");
    const [tipo, setTipo] = useState("")

    return (
        <View>
            <Text>{props.nome}</Text>
            <TextInput

                style={ css.shadow}
                placeholder="Digite aqui!"
                keyboardType={props.tipo}
            />
        </View>
    )
}

const css = StyleSheet.create({
    shadow: {
        height: 40,
        borderWidth: 2,
        paddingHorizontal: "40%" ,
        borderRadius: 20,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    }

})