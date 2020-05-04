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

import styles from "../../styles";

import logo from "../../assets/logo-app.png";

import firebase from "firebase";
import User from "../../../User";

export default class Login extends React.Component {
  state = {
    email: "",
    password: "",
    name: "",
    phone: "",
    errorMessage: "",
  };

  handleChange = (key) => (val) => {
    this.setState({ [key]: val });
  };

  componentDidMount() {
    AsyncStorage.getItem("user").then;
  }

  handleRegister = async () => {
    this.props.navigation.navigate("Register01");
  };

  handleLogin = () => {
    const { email, password } = this.state;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate("Home"))
      .catch((error) => this.setState({ errorMessage: error.message }));
  };

  render() {
    return (
      <KeyboardAvoidingView style={[styles.container]} behavior="padding">
        <Image
          source={logo}
          style={{ width: 80, height: 80, marginBottom: 50 }}
        />
        <Text>Login</Text>
        <TextInput
          keyboardType="default"
          placeholder="Digite seu email..."
          autoCorrect={false}
          autoCapitalize="sentences"
          placeholderTextColor="#999"
          value={this.state.email}
          onChangeText={this.handleChange("email")}
          style={styles.inputs}
        />

        <TextInput
          keyboardType="number-pad"
          placeholder="Digite sua senha..."
          placeholderTextColor="#999"
          value={this.state.password}
          onChangeText={this.handleChange("password")}
          style={styles.inputs}
          returnKeyType="send"
        />
        <TouchableOpacity onPress={this.handleLogin} style={styles.logOut}>
          <Text style={styles.TextButtonLogout}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.handleRegister} style={styles.logOut}>
          <Text style={styles.TextButtonLogout}>Registrar</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}
