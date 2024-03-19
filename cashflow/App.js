import {NavigationContainer} from "@react-navigation/native";
import CreateStackNavigator from "@react-navigation/stack/src/navigators/createStackNavigator";
import Listagem from "./screens/Listagem";
import {StatusBar } from 'react-native';
import Home from "./screens/Home";
import Start from "./screens/Start";
import Config from "./screens/Config";
import Cadastro from "./screens/Cadastro";
import {Dados, DadosProvider} from "./context/Dados";
import {useContext} from "react";

Stack = CreateStackNavigator()
export default function App() {
  return (
      <DadosProvider>
          <NavigationContainer>
              <StatusBar backgroundColor={'black'}/>
              <Stack.Navigator initialRouteName={'Start'} screenOptions={{ headerShown: false}}>
                  <Stack.Screen name="Start" component={Start}/>
                  <Stack.Screen name="Home" component={Home}/>
                  <Stack.Screen name="Listagem" component={Listagem}/>
                  <Stack.Screen name="Config" component={Config}/>
                  <Stack.Screen name="Cadastro" component={Cadastro}/>
              </Stack.Navigator>
          </NavigationContainer>
      </DadosProvider>
  );
}

