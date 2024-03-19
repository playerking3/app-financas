import {Pressable, StyleSheet, Text, View} from "react-native";
import {SafeAreaView} from 'react-native-safe-area-context';
import InputsCadastro from "../components/InputsCadastro";
import SelectCadastro from "../components/SelectCadastro";
import Hub from "../components/Hub";
import TituloCadastro from "../components/TituloCadastro";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import {useContext, useState} from "react";
import {Dados} from "../context/Dados";

export default function ({navigation}){
    const [exibe, setExibe] = useState(false)
    const {texto, setTexto} = useContext(Dados)
    const {branco, setBranco} = useContext(Dados)

    const css = StyleSheet.create({
        container: {
            width: '100%',
            height:'100%',
            alignItems: 'center',

        },
        container2: {
            height: "50%",
            justifyContent: "center",
            margin: 20,
            gap: 25
        },
        inputs:{
            gap: 15,
            color: texto
        }
    })

    const onChange = (event) => {
        setExibe(false);
        const dia = new Date(event.nativeEvent.timestamp).getDate()
        const mes = new Date(event.nativeEvent.timestamp).getMonth() + 1
        const ano = new Date(event.nativeEvent.timestamp).getFullYear()
        setData(dia+"/"+ mes+"/"+ano)
    };

    return(
        <SafeAreaView style={css.container}>
            <Hub></Hub>
            <View style={css.container2}>
                <View>
                    <TituloCadastro></TituloCadastro>
                </View>
                <View style={css.inputs}>
                    <InputsCadastro style={css.inputs}  nome="Valor:" tipo="numeric"></InputsCadastro>
                    <InputsCadastro style={css.inputs}  nome="Nome:"></InputsCadastro>
                    { exibe && <RNDateTimePicker value={new Date()} onChange={onChange}/>}
                    <Pressable onPress={() => setExibe(true)}>
                         <TextCadastro style={css.inputs} value={data} nome="Data:"></TextCadastro>
                    </Pressable>


                    <SelectCadastro setar={setCategoria}></SelectCadastro>
                </View>
                <View style={css.btn}>
                    <BtnCadastrar valor={valor} nome={nome} data={data} categoria={categoria} style={css.btn} navigation={navigation}></BtnCadastrar>
                </View>
            </View>
            <Navigator></Navigator>
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
    },
    btn:{
        padding: 20,
        backgroundColor: "#FFD60A",
        alignItems: "center",
        borderRadius: 20
    }
})
