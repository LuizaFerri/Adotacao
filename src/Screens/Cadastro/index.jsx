import React, { useState } from "react";
import { Text, View, ScrollView } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { styles } from "./style";
import Button from "../../components/Button";
import Logo from "../../components/Logo";
import { FontAwesome } from "@expo/vector-icons";

export default function Cadastro({ navigation }) {
  const [email, setemail] = useState(null);
  const [senha, setsenha] = useState(null);
  const [nome, setnome] = useState(null);
  const [cpf, setcpf] = useState(null);
  const [telefone, settelefone] = useState(null);
  const [endereco, setendereco] = useState(null);
  const [cidade, setcidade] = useState(null);
  const [cep, setcep] = useState(null);
 // const [menssagem, setmenssagem] = useState(null);
 const [display, setDisplay] = useState("none");

function verificaCampos () {
   if(nome && email && senha && cpf && cep && cidade && endereco && telefone !== null){
     return true
   }
   else{
     return false
   }
} 

  async function registerUser() {
    if (verificaCampos() == true) {
        let reqs = await fetch("http://192.168.0.108:3000/create", {
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
        senha: senha,
        email: email,
        cpf: cpf,
        cep: cep,
        endereco: endereco,
        telefone: telefone,
        cidade: cidade,
      }),
    });
    let json = await reqs.json();
    console.log(json);
    navigation.navigate("CadastroSucesso");
    }
  else{
    setDisplay('flex');
    setTimeout(()=>{
        setDisplay('none');
    },5000);
  }
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.titulo}>
          Faça seu cadastro <FontAwesome name="paw" size={24} color="#fff" />{" "}
        </Text>

        <Text style={styles.descricao}>Nome Completo:</Text>
        <View style={styles.campos}>
          <TextInput
            style={styles.input}
            onChangeText={(nome) => setnome(nome)}
          />
        </View>
        <Text style={styles.descricao}>CPF:</Text>
        <View style={styles.campos}>
          <TextInput
            keyboardType="numeric"
            style={styles.input}
            onChangeText={(cpf) => setcpf(cpf)}
          />
        </View>

        <Text style={styles.descricao}>Telefone:</Text>
        <View style={styles.campos}>
          <TextInput
            keyboardType="numeric"
            style={styles.input}
            onChangeText={(telefone) => settelefone(telefone)}
          />
        </View>

        <Text style={styles.descricao}>Endereço:</Text>
        <View style={styles.campos}>
          <TextInput
            style={styles.input}
            onChangeText={(endereco) => setendereco(endereco)}
          />
        </View>

        <Text style={styles.descricao}>Cidade:</Text>
        <View style={styles.campos}>
          <TextInput
            style={styles.input}
            onChangeText={(cidade) => setcidade(cidade)}
          />
        </View>

        <Text style={styles.descricao}>CEP:</Text>
        <View style={styles.campos}>
          <TextInput
            keyboardType="numeric"
            style={styles.input}
            onChangeText={(cep) => setcep(cep)}
          />
        </View>

        <Text style={styles.descricao}>Email:</Text>
        <View style={styles.campos}>
          <TextInput
            keyboardType="email-address"
            onChangeText={(email) => setemail(email)}
            style={styles.input}
          />
        </View>

        <Text style={styles.descricao}>Senha:</Text>
        <View style={styles.campos}>
          <TextInput
            style={styles.input}
            secureTextEntry
            onChangeText={(senha) => setsenha(senha)}
          />
        </View>
        <Text style={styles.descricao}> Confirmar senha:</Text>
        <View style={styles.campos}>
          <TextInput style={styles.input} secureTextEntry />
        </View>

        <View style={styles.containerBnt}>
          <Button name="Cadastrar" onPress={registerUser} />

          <View style={styles.msg}>
            <Text style={styles.login__msg(display)}>
              Verifique os campos  e tente novamente
            </Text>
          </View> 

          <Text style={styles.cadastro}> Já possui um cadastro? </Text>
          <Text
            style={styles.cadastro1}
            onPress={() => navigation.navigate("Login")}
          >
            Faça o seu login
          </Text>
        </View>
        <Logo />
      </ScrollView>
    </View>
  );
}
