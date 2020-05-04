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

export default class Register11 extends React.Component {
  state = {
    saldo: User.saldo,
  };

  handleChange = (key) => (val) => {
    this.setState({ [key]: val });
  };

  componentDidMount() {
    if (this.state.saldo === 70) {
      this.setState({ saldo: 85 });
      User.saldo = this.state.saldo;
      Alert.alert("Parabens", "Você ganhou mais 15 pontos!");
    }
  }

  mentor01 = async () => {
    User.mentor = this.state.mentor;
    this.props.navigation.navigate("Mentor01");
  };

  mentor02 = async () => {
    User.mentor = this.state.mentor;
    this.props.navigation.navigate("Mentor02");
  };

  mentor03 = async () => {
    User.mentor = this.state.mentor;
    this.props.navigation.navigate("Mentor03");
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
          Agora é hora de escolher o seu mentor!!
        </Text>

        <Text style={{ marginTop: 50 }}>
          Isso ele irá analisar suas finanças e lhe guiar para o melhor caminho
          para atingir seu sonho!
        </Text>

        <TouchableOpacity onPress={this.mentor01} style={styles.logOut}>
          <Text style={styles.TextButtonLogout}>Mentor A</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.mentor02} style={styles.logOut}>
          <Text style={styles.TextButtonLogout}>Mentor B</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.mentor03} style={styles.logOut}>
          <Text style={styles.TextButtonLogout}>Mentor C</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}
