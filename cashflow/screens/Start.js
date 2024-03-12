import {View, StyleSheet, Text, Image, Pressable} from "react-native";

function Start(){
    return(
        <View style={css.container}>
            <View style={css.logo}>
                <Text style={css.titulo}>
                    Bem Vindo
                </Text>
                <Image source={require('../assets/Vector.png')}></Image>
            </View>
            <View style={css.entrar}>
                <Pressable style={css.btnEntrar}>
                    <Text style={css.textEntrar}>
                        Entrar
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}
export default Start