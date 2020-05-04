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
import { ifIphoneX } from "react-native-iphone-x-helper";

import logo from "../../assets/logo-app.png";

import firebase from "firebase";
import User from "../../../User";

export default class Register01 extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
    error: "",
  };

  handleChange = (key) => (val) => {
    this.setState({ [key]: val });
  };

  submitForm = async () => {
    if (this.state.name.length < 3) {
      Alert.alert("Error", "Nome muito curto");
      //  else if (this.state.name.length < 3) {
      //   Alert.alert("Error", "Nome muito curto");
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => this.props.navigation.navigate("Home"))
        .catch((error) => this.setState({ error: error.message }));
      User.name = this.state.name;
    }
  };
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Image
          source={logo}
          style={{ width: 80, height: 80, marginBottom: 50 }}
        />
        <Text>Informações de Perfil</Text>
        <Text>Precisamos saber seu nome:</Text>
        <TextInput
          keyboardType="default"
          placeholder="Digite seu nome..."
          placeholderTextColor="#999"
          value={this.state.name}
          onChangeText={this.handleChange("name")}
          style={styles.inputs}
          returnKeyType="send"
        />

        <TextInput
          keyboardType="email-address"
          placeholder="Digite seu email..."
          placeholderTextColor="#999"
          value={this.state.email}
          onChangeText={this.handleChange("email")}
          style={styles.inputs}
        />

        <TextInput
          keyboardType="numeric"
          placeholder="Digite sua senha..."
          placeholderTextColor="#999"
          value={this.state.password}
          onChangeText={this.handleChange("password")}
          style={styles.inputs}
        />

        <TouchableOpacity onPress={this.submitForm} style={styles.logOut}>
          <Text style={styles.TextButtonLogout}>Etapa 2 -></Text>
        </TouchableOpacity>
        <Text>{this.error}</Text>
      </KeyboardAvoidingView>
    );
  }
}
