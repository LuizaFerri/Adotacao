import React, { useState } from "react";
import { Text, View, ScrollView } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { styles } from "./styles";
import Button from "../../components/Button";
import Logo from "../../components/Logo";
import { FontAwesome } from "@expo/vector-icons";

export default function CadastroDog({ navigation }) {
  const [nome, setNome] = useState(null);
  const [sexo, setSexo] = useState(null);
  const [castrado, setCastrado] = useState(null);
  const [descricao, setDescricao] = useState(null);
  const [foto, setFoto] = useState(null);

  async function registerDog() {
    let reqs = await fetch("http://192.168.0.108:3000/createdog", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // 'Access-Control-Allow-Origin': '*',
        //'Access- Control - Allow - Methods': 'POST',
        // 'Access- Control - Allow - Headers': '*',
        // 'Access - Control - Max - Age': '86400'
      },
      body: JSON.stringify({
        nome: nome,
        sexo: sexo,
        descricao: descricao,
        castrado: castrado,
        foto: foto,
      }),
    });
    let ress = await reqs.json();
    setmenssagem(ress);
    console.log(ress);
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.titulo}>
          Cadastre um novo cachorro{" "}
          <FontAwesome name="paw" size={24} color="#fff" />{" "}
        </Text>

        <Text style={styles.descricao}>Nome :</Text>
        <View style={styles.campos}>
          <TextInput
            style={styles.input}
            onChangeText={(nome) => setNome(nome)}
          />
        </View>
        <Text style={styles.descricao}>Sexo:</Text>
        <View style={styles.campos}>
          <TextInput
            style={styles.input}
            onChangeText={(sexo) => setSexo(sexo)}
          />
        </View>

        <Text style={styles.descricao}>Castrado?</Text>
        <View style={styles.campos}>
          <TextInput
            style={styles.input}
            onChangeText={(castrado) => setCastrado(castrado)}
          />
        </View>

        <Text style={styles.descricao}>Descrição:</Text>
        <View style={styles.campos}>
          <TextInput
            style={styles.input}
            onChangeText={(descricao) => setDescricao(descricao)}
          />
        </View>
        <Text style={styles.descricao}>Digite a URl da imagem </Text>
        <View style={styles.campos}>
          <TextInput
            style={styles.input}
            onChangeText={(foto) => setFoto(foto)}
          />
        </View>
        <View style={styles.containerBnt}>
          <Button name="Cadastrar" onPress={registerDog} />
        </View>
        <Logo />
      </ScrollView>
    </View>
  );
}
