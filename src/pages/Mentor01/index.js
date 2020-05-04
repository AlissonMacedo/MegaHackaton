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
    this.setState({ mentor: "mentor A" });
    User.mentor = this.state.mentor;
    this.props.navigation.navigate("FinishRegister");
  };
  render() {
    return (
      <KeyboardAvoidingView style={[styles.container]} behavior="padding">
        <Image
          source={logo}
          style={{ width: 80, height: 80, marginBottom: 50 }}
        />
        <Text>Mentor A</Text>

        <Image
          source={john}
          style={{ width: 80, height: 80, marginBottom: 50 }}
        />
        <Text style={{ marginTop: 50 }}>
          Este é Mentor A, ele é um incrivel profissinal e poderá lhe guiar em
          processo de aprendizado e ajudar a fazer os melhores investimentos
        </Text>

        <TouchableOpacity onPress={this.submitForm} style={styles.logOut}>
          <Text style={styles.TextButtonLogout}>Selecionar</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}
