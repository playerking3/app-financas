import {View, StyleSheet, Text, Image, Pressable} from "react-native";
import {css} from '../Style/StyleStart'
import * as LocalAuthentication from 'expo-local-authentication';
function Start({navigation}){
    async function autenticar(){
         const resposta = await LocalAuthentication.authenticateAsync()
        if (resposta.success){
            navigation.navigate("Home")
        }
    }

    return(
        <View style={css.container}>
            <View style={css.logo}>
                <Text style={css.titulo}>
                    Bem Vindo
                </Text>
                <Image source={require('../assets/Vector.png')}></Image>
            </View>
            <View style={css.entrar}>
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