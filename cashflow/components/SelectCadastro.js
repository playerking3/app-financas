import RNPickerSelect from 'react-native-picker-select';
import {StyleSheet} from "react-native";

export default function (){
    return(
            <RNPickerSelect
                style={css.borda}
                onValueChange={(value) => console.log(value)}
                items={[
                    { label: 'Economia', value: 'economia' },
                    { label: 'Despesas', value: 'despesas' }
                ]}
            />
    )
}

const css = StyleSheet.create({
    borda: {
        borderWidth: 4,
        borderRadius: 20,
        borderColor: "black"
    }
})