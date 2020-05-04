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

export default class Register04 extends React.Component {
  state = {
    extrasalary: "",
  };

  handleChange = (key) => (val) => {
    this.setState({ [key]: val });
  };

  submitForm = async () => {
    if (this.state.extrasalary.length < 3) {
      Alert.alert("Error", "Número muito curto");
      //  else if (this.state.name.length < 3) {
      //   Alert.alert("Error", "Nome muito curto");
    } else {
      User.extrasalary = this.state.extrasalary;

      this.props.navigation.navigate("Register05");
    }
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
          Precisamos saber se tem alguma renda extra:
        </Text>
        <TextInput
          keyboardType="number-pad"
          placeholder="Digite sua renda..."
          placeholderTextColor="#999"
          value={this.state.extrasalary}
          onChangeText={this.handleChange("extrasalary")}
          style={styles.inputs}
          returnKeyType="send"
        />

        <TouchableOpacity onPress={this.submitForm} style={styles.logOut}>
          <Text style={styles.TextButtonLogout}>Etapa 5 -></Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}
