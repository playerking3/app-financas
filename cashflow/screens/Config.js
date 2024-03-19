import {View, StyleSheet, Text, Pressable} from "react-native";
import {SafeAreaView} from 'react-native-safe-area-context';
import Hub from "../components/Hub";
import Navigator from "../components/Navigator";
import {css} from '../Style/StyleConfig'
import {Dados} from "../context/Dados";
import {useContext} from "react";

export default function ({navigation}){
    const {corHub, setCorHub} = useContext(Dados)
    const {branco,setBranco} = useContext(Dados)
    const {cinza, setCinza} = useContext(Dados)
    const {texto, setTexto} = useContext(Dados)
    const cont = StyleSheet.create({
        container: {
            width: '100%',
            height:'100%',
            alignItems: 'center',
            backgroundColor: branco
        },
    })
    return(
        <SafeAreaView style={cont.container}>
            <Hub></Hub>
            <View style={css.divgrande}>
                <Pressable onPress={() =>{
                    if(corHub == '#FFD60A'){
                        setCorHub('#262626')
                        setBranco('#000')
                        setCinza('#3C3C3E')
                        setTexto('#fff')
                    }
                    else{
                        setCorHub('#FFD60A')
                        setBranco('#fff')
                        setCinza('#E6E6E6')
                        setTexto('#000')
                    }
                }} style={css.btnDark}>
                    <Text style={css.btnText}>
                        Modo Escuro
                    </Text>
                </Pressable>
            </View>
            <Navigator navigation={navigation}></Navigator>
        </SafeAreaView>
    )
}