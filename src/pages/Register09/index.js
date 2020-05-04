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

export default class Register09 extends React.Component {
  state = {
    spent2: "",
  };

  handleChange = (key) => (val) => {
    this.setState({ [key]: val });
  };

  submitForm = async () => {
    User.spent2 = this.state.spent2;

    this.props.navigation.navigate("Register10");
  };
  render() {
    return (
      <KeyboardAvoidingView style={[styles.container]} behavior="padding">
        <Image
          source={logo}
          style={{ width: 80, height: 80, marginBottom: 50 }}
        />
        <Text>Precisamos cadastrar suas despesas.</Text>
        <Text style={{ marginTop: 50 }}>
          Nos diga mais uma despesa mensal, são ao todo 3
        </Text>
        <Text>2/3</Text>
        <TextInput
          keyboardType="number-pad"
          placeholder="Digite o valor..."
          placeholderTextColor="#999"
          value={this.state.spent2}
          onChangeText={this.handleChange("spent2")}
          style={styles.inputs}
          returnKeyType="send"
        />

        <TouchableOpacity onPress={this.submitForm} style={styles.logOut}>
          <Text style={styles.TextButtonLogout}>Etapa 10 -></Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}
