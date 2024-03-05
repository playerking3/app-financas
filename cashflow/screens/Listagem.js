import {SafeAreaView, StyleSheet, Text, View} from "react-native";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons/faXmark";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

export default function (){
    return(
        <SafeAreaView>
            <View style={css.selectorDisplay}>
                <Text>Minhas economias</Text>
                <FontAwesomeIcon icon={faPlus} />
            </View>
            <View style={css.selectorDisplay}>
                <Text>Minhas despesas</Text>
                <FontAwesomeIcon icon={faXmark} style={css.iconBg} />
            </View>
        </SafeAreaView>
    )
}

const css = StyleSheet.create({
    selectorDisplay: {
        justifyContent: "space-between",
        flexDirection: "row"
    },
    iconBg: {
        color: 'white',
        backgroundColor: '#FFD60A',
        borderRadius: 12
    }
})
