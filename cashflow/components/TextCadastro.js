import {StyleSheet, Text, TextInput, View} from "react-native";
import {useState} from "react";

export default function (props){
    const [nome, setNome] = useState("");
    const [tipo, setTipo] = useState("")


    return (
        <View>
            <Text>{props.nome}</Text>
            <Text

                onChangeText={props.setar}
                style={{height: 40, borderBottomWidth: 3,borderColor: "black",paddingHorizontal: "40%" ,
                    borderRadius: 5, width: '100%'}}>

                {props.value}
            </Text>


        </View>
    )
}

const css = StyleSheet.create({
    inputs: {
        height: 40,
        borderWidth: 5,
        borderColor: "black",
        paddingHorizontal: "40%" ,
        borderRadius: 20,
        width: "100%"
    }
})