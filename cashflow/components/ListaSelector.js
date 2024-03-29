import {Pressable, StyleSheet, Text, View} from "react-native";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {faMinus} from "@fortawesome/free-solid-svg-icons/faMinus";
import {css} from '../Style/StyleListaSelector'
import {Dados} from "../context/Dados";
import {useContext} from "react";

export default function (){
    const {texto,filtro, setFiltro, setTexto} = useContext(Dados)
    const text = StyleSheet.create({
        texto:{
            fontSize: 18,
            color:texto
        }
    })

    function mudaFiltro(nome){
        if (nome == filtro){
            setFiltro('tudo')
        } else {
            setFiltro(nome)
        }
    }

    return(
        <View style={css.container}>
                <Pressable onPress={()=> mudaFiltro('receita')} style={css.selectorDisplay}>
                    <Text style={text.texto}>Minhas economias</Text>
                    <FontAwesomeIcon icon={faPlus} style={css.iconBg} size={22}/>
                </Pressable>
                <Pressable onPress={()=> mudaFiltro('despesa')} style={css.selectorDisplay}>
                    <Text style={text.texto}>Minhas despesas</Text>
                    <FontAwesomeIcon icon={faMinus} style={css.iconBg} size={22}/>
                </Pressable>
        </View>
    )
}