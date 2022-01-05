import React,{ useEffect, useState } from "react";
import { Text, View, Image,FlatList } from 'react-native'
import { styles } from './styles';
import Logo from "../../components/Logo";


export default function CadastroDog({ navigation }) {


  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Escolha o seu novo amigo(a)</Text>

      <Logo />
    </View>
  );
}
