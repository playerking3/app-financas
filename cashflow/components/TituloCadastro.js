import {StyleSheet,Text, View} from "react-native";

export default function (){
    return(
        <View>
            <Text style={css.titulo}>Registre suas economias</Text>
        </View>
    )
}

const css = StyleSheet.create({
    titulo:{
        color: "#FFD60A",
        fontSize: 40
    }
})