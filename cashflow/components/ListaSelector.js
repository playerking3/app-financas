import {Text, View, StyleSheet} from "react-native";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {faXmark} from "@fortawesome/free-solid-svg-icons/faXmark";
import {faMinus} from "@fortawesome/free-solid-svg-icons/faMinus";

export default function (){
    return(
        <View style={css.container}>
            <View style={css.selectorDisplay}>
                <Text style={css.texto}>Minhas economias</Text>
                <FontAwesomeIcon icon={faPlus} style={css.iconBg} size={22}/>
            </View>
            <View style={css.selectorDisplay}>
                <Text style={css.texto}>Minhas despesas</Text>
                <FontAwesomeIcon icon={faMinus} style={css.iconBg} size={22}/>
            </View>
        </View>
    )
}

const css = StyleSheet.create({
    container: {
      margin: 12,
        gap: 6
    },
    selectorDisplay: {
        justifyContent: "space-between",
        flexDirection: "row"
    },
    iconBg: {
        color: 'white',
        backgroundColor: '#FFD60A',
        borderRadius: 42
    },
    texto:{
        fontSize: 18
    }
})