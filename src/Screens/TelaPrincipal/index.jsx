import React from "react";
import { Text, View } from 'react-native'
import { styles } from './style';
import Button from "../../components/Button";
import { FontAwesome } from '@expo/vector-icons';
import Logo from "../../components/Logo";

export default function TelaPrincipal({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}> Adote, porque o amor não tem preço nem raça  <FontAwesome name="paw" size={24} color="#fff" /> </Text> 
     
      <Button name="Login"
        onPress={() => navigation.navigate('Login')}
      />

      <Button name="Cadastro"
        onPress={() => navigation.navigate('Cadastro')}
      />
      <Logo />
    </View>
  );
}

