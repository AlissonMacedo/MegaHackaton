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

export default class Register02 extends React.Component {
  state = {
    phone: "",
  };

  handleChange = (key) => (val) => {
    this.setState({ [key]: val });
  };

  submitForm = async () => {
    if (this.state.phone.length < 3) {
      Alert.alert("Error", "Número muito curto");
      //  else if (this.state.name.length < 3) {
      //   Alert.alert("Error", "Nome muito curto");
    } else {
      User.phone = this.state.phone;

      this.props.navigation.navigate("Register03");
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
          {this.state.currentUser} Precisamos saber seu número de telefone:
        </Text>
        <TextInput
          keyboardType="number-pad"
          placeholder="Digite seu numero de telefone..."
          placeholderTextColor="#999"
          value={this.state.phone}
          onChangeText={this.handleChange("phone")}
          style={styles.inputs}
          returnKeyType="send"
        />

        <TouchableOpacity onPress={this.submitForm} style={styles.logOut}>
          <Text style={styles.TextButtonLogout}>Etapa 3 -></Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}
