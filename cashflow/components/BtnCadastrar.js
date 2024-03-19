import {Pressable, StyleSheet, Text, View} from "react-native";
import {useContext} from "react";
import {Dados} from "../context/Dados";

function BtnCadastrar(props){
    const {cadastroFinanceiro} = useContext(Dados)

    function cadastrar(){
        cadastroFinanceiro(
            {
                valor: props.valor,
                nome: props.nome,
                data: props.data,
                categoria: props.categoria
            }
        )
        props.navigation.navigate("Listagem")
    }

    return(
        <View >
            <Pressable onPress={cadastrar}>
                <Text>Cadastrar</Text>
            </Pressable>
        </View>
    )
}


const css = StyleSheet.create({
    container:{
        height: "150px",
        width: "150px",
        backgroundColor: "#FFD60A",
        textAlign: "center",
        justifyContent: "center"
    }
})

export default BtnCadastrar