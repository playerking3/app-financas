import RNPickerSelect from 'react-native-picker-select';
import {StyleSheet, Text, View} from "react-native";

export default function (props){



    return(
        <View>
            <Text>Categoria:</Text>
            <RNPickerSelect
                style={css.borda}
                onValueChange={(value) => props.setar(value)}
                items={[
                    { label: 'Economia', value: 'economia' },
                    { label: 'Despesas', value: 'despesas' }
                ]}
            />
        </View>
    )
}

const css = StyleSheet.create({
    borda: {
        borderWidth: 4,
        borderRadius: 20,
        borderColor: "black"
    }
})