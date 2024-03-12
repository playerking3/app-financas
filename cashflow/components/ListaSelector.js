import {Text, View} from "react-native";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {faMinus} from "@fortawesome/free-solid-svg-icons/faMinus";
import {css} from '../Style/StyleListaSelector'

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