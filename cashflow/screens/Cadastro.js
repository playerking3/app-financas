import {StyleSheet, View} from "react-native";
import {SafeAreaView} from 'react-native-safe-area-context';
import InputsCadastro from "../components/InputsCadastro";
import SelectCadastro from "../components/SelectCadastro";
import Hub from "../components/Hub";
import TituloCadastro from "../components/TituloCadastro";

export default function (){
    return(
        <SafeAreaView style={css.container}>
            <Hub></Hub>
            <View style={css.container2}>
                <View>
                    <TituloCadastro></TituloCadastro>
                </View>
                <View style={css.inputs}>
                    <InputsCadastro  nome="Valor:" tipo="numeric"></InputsCadastro>
                    <InputsCadastro style={css.inputs}  nome="Nome:"></InputsCadastro>
                    <InputsCadastro style={css.inputs}  nome="Data:"></InputsCadastro>
                    <SelectCadastro></SelectCadastro>
                </View>
            </View>
        </SafeAreaView>
    )
}

const css = StyleSheet.create({
    container: {
        width: '100%',
        height:'100%',
        alignItems: 'center'
    },
    container2: {
        height: "50%",
        justifyContent: "center",
        margin: 20
    },
    inputs:{
        gap: 15
    }
})