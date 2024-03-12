import {Pressable, StyleSheet, Text, View} from "react-native";

export default function (){
    return(
        <View style={css.container}>
            <View style={css.linha}>
                <Text>Nome</Text>
                <Text>Valor</Text>
                <Text>Data</Text>
            </View>
            <View>
                <Pressable>
                    
                </Pressable>
            </View>
        </View>
    )
}

const css = StyleSheet.create({
    container: {
        backgroundColor: '#D2D2D2',
        margin: 12,
        borderRadius: 12
    },
    linha: {
        padding: 8,
        flexDirection: "row",
        justifyContent: "space-between",

    }
})