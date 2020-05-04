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

export default class Register06 extends React.Component {
  state = {
    metaName: User.meta.name,
    value: "",
    time: "",
  };

  handleChange = (key) => (val) => {
    if (val === "number" ? parseInt(val) : val) {
      this.setState({ [key]: val });
    }
    this.setState({ [key]: val });
  };

  submitForm = async () => {
    if (this.state.value.length < 3) {
      Alert.alert("Error", "Número muito curto");
      //  else if (this.state.name.length < 3) {
      //   Alert.alert("Error", "Nome muito curto");
    } else {
      User.meta.value = this.state.value;
      User.meta.time = this.state.time;

      this.props.navigation.navigate("Register07");
    }
  };
  render() {
    const teste = { bottom: 40 };
    return (
      <KeyboardAvoidingView
        style={[styles.container, teste]}
        behavior="padding"
      >
        <Image
          source={logo}
          style={{ width: 80, height: 80, marginBottom: 50 }}
        />
        <Text>
          Agora precisamos saber do valor e do tempo que você precisa realizar
          essa conquista. {this.state.metaName}
        </Text>
        <Text style={{ marginTop: 50 }}>Qual o valor que você precisa?</Text>
        <TextInput
          keyboardType="number-pad"
          placeholder="Digite o valor..."
          placeholderTextColor="#999"
          value={this.state.value}
          onChangeText={this.handleChange("value")}
          style={styles.inputs}
          returnKeyType="send"
        />

        <Text style={{ marginTop: 50 }}>
          Em quanto tempo EM MESSES quer realizar essa conquista?
        </Text>
        <TextInput
          keyboardType="number-pad"
          placeholder="Digite o valor em messes..."
          placeholderTextColor="#999"
          value={this.state.time}
          onChangeText={this.handleChange("time")}
          style={styles.inputs}
          returnKeyType="send"
        />

        <TouchableOpacity onPress={this.submitForm} style={styles.logOut}>
          <Text style={styles.TextButtonLogout}>Etapa 7 -></Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}
