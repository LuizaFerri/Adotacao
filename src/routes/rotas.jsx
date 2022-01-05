import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import TelaPrincipal from '../Screens/TelaPrincipal';
import Login from '../Screens/Login'
import Cadastro from '../Screens/Cadastro'
import TelaOpcao from '../Screens/TelaOpcao'
import Catalogo from '../Screens/Catalogo-dog'
import CadastroDog from '../Screens/Cadastro-dog';
import CadastroSucesso from '../Screens/Cadastro/Cadastro-sucesso'

export default function Rotas () {
    const Stack = createStackNavigator();
    return(
        <>
      
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="TelaPrincipal"
            component={TelaPrincipal}
            options={{
              title: '',
              headerStyle: {
                backgroundColor: '#e08d77',
              },
              headerShown:false
            }}
          />
          <Stack.Screen name="Login" component={Login}
            options={{
              title: '',
              headerShown:false
  
            }}
          />
          <Stack.Screen name="Cadastro" component={Cadastro}
            options={{
              title: '',
              headerShown:false
            }}
          />
          <Stack.Screen name="TelaOpcao" component={TelaOpcao}
            options={{
              title: '',
              headerShown:false
            }}
          />
          <Stack.Screen
            name="Catalogo"
            component={Catalogo}
            options={{
              title: '',
              headerStyle: {
                backgroundColor: '#e08d77',
              },
             
            }}
          />
           <Stack.Screen
            name="cadastroDog"
            component={CadastroDog}
            options={{
              title: '',
              headerStyle: {
                backgroundColor: '#e08d77',
              },
             
            }}
            
          />
            <Stack.Screen name="CadastroSucesso" component={CadastroSucesso}
            options={{
              title: '',
              headerShown:false
            }}
          />
        </Stack.Navigator>
        
      </>
    );
}