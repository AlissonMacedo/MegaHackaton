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

export default class Register03 extends React.Component {
  state = {
    salary: "",
  };

  handleChange = (key) => (val) => {
    this.setState({ [key]: val });
  };

  submitForm = async () => {
    if (this.state.salary.length < 3) {
      Alert.alert("Error", "Número muito curto");
      //  else if (this.state.name.length < 3) {
      //   Alert.alert("Error", "Nome muito curto");
    } else {
      User.salary = this.state.salary;

      this.props.navigation.navigate("Register04");
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
        <Text style={{ marginTop: 50 }}>Precisamos saber sua renda:</Text>
        <TextInput
          keyboardType="number-pad"
          placeholder="Digite sua renda..."
          placeholderTextColor="#999"
          value={this.state.salary}
          onChangeText={this.handleChange("salary")}
          style={styles.inputs}
          returnKeyType="send"
        />

        <TouchableOpacity onPress={this.submitForm} style={styles.logOut}>
          <Text style={styles.TextButtonLogout}>Etapa 4 -></Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}
