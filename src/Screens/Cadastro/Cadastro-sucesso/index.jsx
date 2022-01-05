import React from 'react'
import {View,Text,Image} from 'react-native'
import {styles} from './styles'
import logo from '../../../assets/logo1.png'

export default function CadastroSucesso({ navigation }) {
    return(
        <>
        <View style={styles.container}>
            <Text style={styles.texto}> Cadastrado com sucesso! </Text>
            <Image style={styles.imagem} source={logo} />
            <Text  style={styles.texto}> Clique aqui e faça seu  </Text>
            <Text style={styles.login} onPress={() => navigation.navigate('Login')}> Login</Text>
        </View>
        </>
    );
}