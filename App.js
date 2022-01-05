import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import {  useFonts } from '@expo-google-fonts/princess-sofia'
import {EmilysCandy_400Regular} from '@expo-google-fonts/emilys-candy'
import {Cinzel_700Bold} from '@expo-google-fonts/cinzel';


import Rotas from './src/routes/rotas';


export default function App() {
  const [fontsLoaded] = useFonts({

    EmilysCandy_400Regular,
    Cinzel_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (

    <NavigationContainer >
        <StatusBar barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
     <Rotas />
    
      
    </NavigationContainer>

  );
}

