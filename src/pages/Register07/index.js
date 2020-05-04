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

export default class Register07 extends React.Component {
  state = {
    saldo: User.saldo,
  };

  handleChange = (key) => (val) => {
    this.setState({ [key]: val });
  };

  componentDidMount() {
    if (this.state.saldo === 50) {
      this.setState({ saldo: 70 });
      Alert.alert("Parabens", "Você ganhou mais 15 pontos!");
    }
  }

  submitForm = async () => {
    this.props.navigation.navigate("Register08");
  };
  render() {
    return (
      <KeyboardAvoidingView style={[styles.container]} behavior="padding">
        <Image
          source={logo}
          style={{ width: 80, height: 80, marginBottom: 50 }}
        />
        <Text>Informações de Perfil</Text>
        <Text style={{ marginTop: 50 }}>
          Muito bem!! Foram adicionados mais 15 pontos ao seu saldo!
        </Text>

        <Text style={{ marginTop: 50 }}>
          Para finalizar precisamos que cadastre 3 gastos significativos que
          você tenha mensalmente.
        </Text>

        <Text style={{ marginTop: 50 }}>
          Isso é necessário para que nossos mentores possam analisar seus
          objetivos e rotinas e calcular a melhor maneira de atingir seus
          objetivos.
        </Text>

        <TouchableOpacity onPress={this.submitForm} style={styles.logOut}>
          <Text style={styles.TextButtonLogout}>Cadastrar Gastos -></Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}
