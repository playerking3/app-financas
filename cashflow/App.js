import {NavigationContainer} from "@react-navigation/native";
import CreateStackNavigator from "@react-navigation/stack/src/navigators/createStackNavigator";
import Listagem from "./screens/Listagem";

Stack = CreateStackNavigator()
export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Listagem" component={Listagem}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

