import {View, StyleSheet, Text, Image, Pressable} from "react-native";
import {css} from '../Style/StyleStart'
import * as LocalAuthentication from 'expo-local-authentication';
import {Dados} from "../context/Dados";
import {useContext} from "react";
function Start({navigation}){
    async function autenticar(){
         const resposta = await LocalAuthentication.authenticateAsync()
        if (resposta.success){
            navigation.navigate("Home")
        }
    }
    const {branco,setBranco} = useContext(Dados)
    const {cinza, setCinza} = useContext(Dados)
    const dark = StyleSheet.create({
        entrar: {
            width:'100%',
            height:'30%',
            backgroundColor:cinza,
            borderTopLeftRadius:40,
            borderTopRightRadius:40,
            justifyContent:'center',
            alignItems:'center'
        },
        container: {
            height: '100%',
            width: '100%',
            backgroundColor: branco
        }
    })
    return(
        <View style={dark.container}>
            <View style={css.logo}>
                <Text style={css.titulo}>
                    Bem Vindo
                </Text>
                <Image source={require('../assets/Vector.png')}></Image>
            </View>
            <View style={dark.entrar}>
                <Pressable onPress={autenticar} style={css.btnEntrar}>
                    <Text style={css.textEntrar}>
                        Entrar
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}
export default Start