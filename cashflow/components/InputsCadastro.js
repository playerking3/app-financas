import {StyleSheet, Text, TextInput, View} from "react-native";
import {useContext, useState} from "react";
import {Dados} from "../context/Dados";
import {brands} from "@fortawesome/fontawesome-svg-core/import.macro";

export default function (props){

    const [nome, setNome] = useState("");
    const [tipo, setTipo] = useState("")
    const {texto, setTexto} = useContext(Dados)
    return (
        <View>
            <Text>{props.nome}</Text>
            <TextInput
                style={{height: 40,
                    borderBottomWidth: 3,
                    color: texto,
                    borderColor: "black",
                    paddingHorizontal: "40%" ,
                    borderRadius: 5}}
                placeholder="Digite aqui!"
                keyboardType={props.tipo}
            />
        </View>
    )
}

const css = StyleSheet.create({
    inputs: {
        height: 40,
        borderWidth: 5,
        borderColor: "black",
        paddingHorizontal: "40%" ,
        borderRadius: 20
    }
})