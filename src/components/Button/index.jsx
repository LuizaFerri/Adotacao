import React from 'react';
import {TouchableOpacity,Text} from 'react-native'
import {styles} from './style'

export default function Button(props) {
    const {name,onPress} = props
    return(
    <TouchableOpacity
    style={styles.botao}
    title=""
    onPress={onPress}
    
  >
    <Text style={styles.textoBnt}>{name}</Text>
  </TouchableOpacity>
  );
}
