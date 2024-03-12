import {NavigationContainer} from "@react-navigation/native";
import CreateStackNavigator from "@react-navigation/stack/src/navigators/createStackNavigator";
import Listagem from "./screens/Listagem";
import {StatusBar } from 'react-native';
import Home from "./screens/Home";
import Start from "./screens/Start";
import Cadastro from "./screens/Cadastro";

Stack = CreateStackNavigator()
export default function App() {
  return (
      <NavigationContainer>
          <StatusBar backgroundColor={'#FFD60A'}/>
        <Stack.Navigator initialRouteName={'Listagem'} screenOptions={{ headerShown: false}}>
            <Stack.Screen name="Start" component={Start}/>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Listagem" component={Listagem}/>
            <Stack.Screen name="Cadastro" component={Cadastro}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

