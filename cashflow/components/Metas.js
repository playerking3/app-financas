import {View, StyleSheet, Text} from "react-native";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons/faXmark";
import {faCoins, faPlus} from "@fortawesome/free-solid-svg-icons";
import {css} from '../Style/StyleMetas'
import {text} from "@fortawesome/fontawesome-svg-core";
import {Dados} from "../context/Dados";
import {useContext} from "react";
export default function (){
    const {texto, setTexto} = useContext(Dados)
    const {meta, setMeta} = useContext(Dados)
    const {total} = useContext(Dados)
    var porcentagem = (geral / meta) *100
    var geral = total.totalReceitas - total.totalDespesa
    const dark = StyleSheet.create({
        text: {
            color:texto
        }
    })
    const bar = StyleSheet.create({
        barraColor: {
            width: (geral/meta)*100+'%',
            height: 10,
            backgroundColor: '#FFD60A',
            borderRadius: 100
        }
    })
    return(
        <View style={css.metas}>
            <View>
                <Text style={[css.tituloMetas, dark.text]}>Metas Financeiras</Text>
            </View>
            <View style={css.valorMetas}>
                <Text style={[css.preco, dark.text]}>R${meta}</Text>
                <FontAwesomeIcon size={35} icon={faCoins} />
            </View>
            <View style={css.Bar}>
                <Text  style={[css.preco2]}>{(geral / meta) *100}%</Text>
                <View style={css.barra}>
                    <View style={bar.barraColor}>

                    </View>
                </View>
            </View>
        </View>
    )
}
