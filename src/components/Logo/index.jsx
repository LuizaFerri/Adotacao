import React from "react";
import { View,Image,Text} from 'react-native'
import fotodog from '../../assets/logo1.png';
import {styles} from './style'

export default function Logo() {
    return (
        
            <View style={styles.containerImagem}>
                <Image style={styles.imagem} source={fotodog} />
                <Text style={styles.logo}>AdotaCão</Text>
            </View>
        
    );
}