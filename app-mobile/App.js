import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LogBox } from 'react-native';

import ListarProduto from './src/paginas/ListarProduto'
import IncluirProduto from './src/paginas/IncluirProduto'
import AlterarProduto from './src/paginas/AlterarProduto'

const Stack = createStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListarProduto">

        <Stack.Screen
          name="ListarProduto"
          component={ListarProduto}
          options={{
            headerTintColor: "#007bff",
            title: "Listar Produtos"
          }}
        />

        <Stack.Screen
          name="IncluirProduto"
          component={IncluirProduto}
          options={{
            headerTintColor: "#007bff",
            title: "Incluir Produto"
          }}
        />

        {<Stack.Screen
          name="AlterarProduto"
          component={AlterarProduto}
          options={{
            headerTintColor: "#007bff",
            title: "Alterar Produto"
          }}
        />

        }

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

