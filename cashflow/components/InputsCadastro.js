import {Text, TextInput, View} from "react-native";
import {useState} from "react";

export default function (props){

    const [nome, setNome] = useState("");
    const [tipo, setTipo] = useState("")

    return (
        <View>
            <Text>{props.nome}</Text>
            <TextInput
                style={{height: 40, borderColor: "black", borderWidth: 2, paddingHorizontal: "40%" , borderRadius: 20}}
                placeholder="Digite aqui!"
                keyboardType={props.tipo}
            />
        </View>
    )
}