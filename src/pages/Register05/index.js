import React from "react";
import {
  KeyboardAvoidingView,
  Text,
  Alert,
  AsyncStorage,
  TouchableOpacity,
  TextInput,
  View,
  Image,
} from "react-native";

import styles from "../../styles/index";

import logo from "../../assets/logo-app.png";

import firebase from "firebase";
import User from "../../../User";

export default class Register05 extends React.Component {
  state = {
    metaname: "",
    saldo: User.saldo,
  };

  handleChange = (key) => (val) => {
    this.setState({ [key]: val });
  };

  componentDidMount() {
    if (this.state.saldo === 0) {
      this.setState({ saldo: 50 });
      Alert.alert("Parabens", "Você ganhou 50 pontos!");
    }
  }

  submitForm = async (name) => {
    this.setState({ metaname: name });

    User.meta.name = name;
    User.saldo = this.state.saldo;

    this.props.navigation.navigate("Register06");
  };
  render() {
    return (
      <KeyboardAvoidingView style={[styles.container]} behavior="padding">
        <Image
          source={logo}
          style={{ width: 80, height: 80, marginBottom: 50 }}
        />
        <Text>Muito Bem!!!</Text>
        <Text style={{ marginTop: 50, width: "80%" }}>
          Até aqui você ganhou 50 pontos cadastrando todos os seus dados!!
        </Text>

        <Text style={{ marginTop: 30, marginBottom: 30, width: "80%" }}>
          Você agora precisa cadastrar um objetivo como meta!
        </Text>

        <TouchableOpacity
          onPress={() => {
            this.submitForm("carro");
          }}
          style={styles.logOut}
        >
          <Text style={styles.TextButtonLogout}>Carro -></Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.submitForm("moto");
          }}
          style={styles.logOut}
        >
          <Text style={styles.TextButtonLogout}>Moto -></Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.submitForm("dinheiro");
          }}
          style={styles.logOut}
        >
          <Text style={styles.TextButtonLogout}>Valor em dinheiro -></Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.submitForm("outro");
          }}
          style={styles.logOut}
        >
          <Text style={styles.TextButtonLogout}>Outro -></Text>
        </TouchableOpacity>
        <Text>{User.meta.name}</Text>
      </KeyboardAvoidingView>
    );
  }
}
