import React from "react";
import { Text, View, ScrollView } from 'react-native';
import { styles } from './style';
import Button from "../../components/Button";
import Logo from '../../components/Logo';
import { FontAwesome } from '@expo/vector-icons';

export default function Login({ navigation }) {
  return (
    <View style={styles.container} >
      <ScrollView>

        <Text style={styles.titulo}> O que deseja fazer?  <FontAwesome name="paw" size={24} color="#fff" /> </Text>
        <View style={styles.containerBnt}>

          <Button name="Cadastrar um cachorro"
            onPress={() => navigation.navigate('cadastroDog')} />
            <Text style={styles.ou}> ou </Text>
          <Button name="Adotar"
            onPress={() => navigation.navigate('Catalogo')} />
        </View>


        <Logo />
      </ScrollView>
    </View>
  );
}