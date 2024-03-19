import {Pressable, StyleSheet, Text, View} from "react-native";
import {SafeAreaView} from 'react-native-safe-area-context';
import InputsCadastro from "../components/InputsCadastro";
import SelectCadastro from "../components/SelectCadastro";
import Hub from "../components/Hub";
import TituloCadastro from "../components/TituloCadastro";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import {useState} from "react";
import BtnCadastrar from "../components/BtnCadastrar";

export default function ({navigation}){
    const [exibe, setExibe] = useState(false)
    const [data, setData] = useState('')

    const onChange = (event) => {
        setExibe(false);
        const dia = new Date(event.nativeEvent.timestamp).getDay()
        const mes = new Date(event.nativeEvent.timestamp).getMonth()
        setData(dia + '/' + mes)
    };

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
                    { exibe && <RNDateTimePicker value={new Date()} onChange={onChange}/>}
                    <Pressable onPress={() => setExibe(true)}>
                        <InputsCadastro style={css.inputs}  nome="Data:"></InputsCadastro>
                    </Pressable>
                    <SelectCadastro></SelectCadastro>
                </View>
                <View>
                    <BtnCadastrar navigation={navigation}></BtnCadastrar>
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
        margin: 20,
        gap: 25
    },
    inputs:{
        gap: 15
    }
})