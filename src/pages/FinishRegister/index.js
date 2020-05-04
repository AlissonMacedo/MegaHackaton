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
import john from "../../assets/john.jpg";

import firebase from "firebase";
import User from "../../../User";

export default class Register04 extends React.Component {
  state = {
    mentor: "",
  };

  handleChange = (key) => (val) => {
    this.setState({ [key]: val });
  };

  componentDidMount() {}

  submitForm = async () => {
    firebase
      .database()
      .ref("users/" + User.phone)
      .set(User);
    this.props.navigation.navigate("Home");
  };

  componentDidMount() {
    if (this.state.saldo === 85) {
      this.setState({ saldo: 15 });
      User.saldo = this.state.saldo;
      Alert.alert("Parabens", "Você ganhou mais 15 pontos!");
    }
  }

  render() {
    return (
      <KeyboardAvoidingView style={[styles.container]} behavior="padding">
        <Image
          source={logo}
          style={{ width: 80, height: 80, marginBottom: 50 }}
        />
        <Text>Parabens, você finalizou o processo de cadastro!!!</Text>

        <Text style={{ marginTop: 50 }}>
          Logo o seu consultor entrará em contato para criar um plano para seu
          projeto tão especial.
        </Text>

        <Text style={{ marginTop: 50 }}>
          Enquanto isso aproveite a nossa seção de estudos, para se informar
          como ter uma vida financeira saúdavel e própera.
        </Text>

        <TouchableOpacity onPress={this.submitForm} style={styles.logOut}>
          <Text style={styles.TextButtonLogout}>Ir para Home</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}
