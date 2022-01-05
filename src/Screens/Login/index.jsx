import React, { useState } from "react";
import { Text, View, TextInput, ScrollView } from "react-native";
import { styles } from "./style";
import Button from "../../components/Button";
import Logo from "../../components/Logo";
import { FontAwesome } from "@expo/vector-icons";

export default function Login({ navigation }) {
  const [senha, setSenha] = useState(null);
  const [email, setEmail] = useState(null);
  const [display, setDisplay] = useState("none");

  async function sendForm() {
    let response = await fetch("http://192.168.0.108:3000/login", {
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
        email: email,
        senha: senha,
      }),
    });
    let json = await response.json();
    console.log(json);
    if (json === "error") {
      if(json === 'error'){
        setDisplay('flex');
        setTimeout(()=>{
            setDisplay('none');
        },5000);
    }
    } else {
      navigation.navigate("TelaOpcao");
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.titulo}>
          Faça seu login <FontAwesome name="paw" size={24} color="#fff" />
        </Text>
        <Text style={styles.email}> E-mail: </Text>
        <View style={styles.campos}>
          <TextInput
            style={styles.input}
            autoComplete="email"
            onChangeText={(nome) => setEmail(nome)}
          />
        </View>
        <Text style={styles.senha}> Senha: </Text>
        <View style={styles.campos}>
          <TextInput
            secureTextEntry
            style={styles.input}
            onChangeText={(nome) => setSenha(nome)}
          />
        </View>
        <View style={styles.containerBnt}>
          <Button name="Entrar" onPress={() => sendForm()} />
        </View>
        <View style={styles.msg}>
          <Text style={styles.login__msg(display)}>
            Usuário ou senha inválidos!
          </Text>
        </View>
        <Text style={styles.cadastro}> Não se cadastrou? </Text>
        <Text
          style={styles.cadastro1}
          onPress={() => navigation.navigate("Cadastro")}
        >
          Clique aqui
        </Text>
      </ScrollView>
      <Logo />
    </View>
  );
}
