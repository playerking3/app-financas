import {Pressable, StyleSheet, Text, View} from "react-native";

function BtnCadastrar({navigation}){
    return(
        <View>
            <Pressable onPress={() => navigation.navigate("Listagem")}>
                <Text>Cadastrar</Text>
            </Pressable>
        </View>
    )
}


const css = StyleSheet.create({
    container:{
        height: "50%",
        width: "50%",
        backgroundColor: ""
    }
})

export default BtnCadastrar