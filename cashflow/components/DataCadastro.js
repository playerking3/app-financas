import RNDateTimePicker from "@react-native-community/datetimepicker";
import {Pressable, StyleSheet, View} from "react-native";
import TextCadastro from "./TextCadastro";
import {useState} from "react";


function DataCadastro({data, setData}){
    const [exibe, setExibe] = useState(false)

    const onChange = (event) => {
        setExibe(false);
        const dia = new Date(event.nativeEvent.timestamp).getDate()
        const mes = new Date(event.nativeEvent.timestamp).getMonth() + 1
        const ano = new Date(event.nativeEvent.timestamp).getFullYear()
        setData(dia+"/"+ mes+"/"+ano)
    };



    return(
        <View>
            { exibe && <RNDateTimePicker value={new Date()} onChange={onChange} display={'spinner'}/>}
            <Pressable onPress={() => setExibe(true)}>
                <TextCadastro style={css.inputs} value={data} nome="Data:"></TextCadastro>
            </Pressable>

        </View>

    )
}

const css = StyleSheet.create({
    inputs:{
        gap: 15
    }
})

export default DataCadastro