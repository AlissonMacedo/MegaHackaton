import React from "react";

import {
  View,
  Text,
  Image,
  AsyncStorage,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Dimensions,
} from "react-native";
import firebase from "firebase";
import profile from "../../assets/profile.png";
import User from "../../../User";

import styles from "../../styles";
console.ignoredYellowBox = ["Warning:"];

export default class Home extends React.Component {
  state = {
    users: [],
    dbRef: firebase.database().ref("mentors"),
  };

  _isMounted = false;

  handleFinishRegister = (async) => {
    this.props.navigation.navigate("Register02");
  };

  componentWillUnmount() {
    this._isMounted = false;
    this.state.dbRef.off();
  }

  render() {
    const { height, width } = Dimensions.get("window");
    return (
      <SafeAreaView style={styles.container}>
        <Text
          style={{
            fontSize: 30,
            marginVertical: 10,
            marginLeft: 10,
            fontWeight: "bold",
          }}
        >
          Home
        </Text>
        <View style={{ flex: 1, backgroundColor: "#654", width: width }}>
          <View
            style={{
              width: width,
              height: 200,
              backgroundColor: "#7159c1",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={this.handleFinishRegister}
              style={{
                width: 160,
                height: 160,
                backgroundColor: "#eee",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 8,
              }}
            >
              <Image
                source={require("../../assets/home.png")}
                style={{ width: 50, height: 50 }}
              />
              <Text style={{ fontSize: 15 }}>Finalizar cadastro</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                width: 160,
                height: 160,
                backgroundColor: "#eee",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 8,
              }}
            >
              <Image
                source={require("../../assets/home.png")}
                style={{ width: 50, height: 50 }}
              />
              <Text>Falar com tutor</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: width,
              height: 200,
              backgroundColor: "#7159c1",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={{
                width: 160,
                height: 160,
                backgroundColor: "#eee",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 8,
              }}
            >
              <Image
                source={require("../../assets/home.png")}
                style={{ width: 50, height: 50 }}
              />
              <Text style={{ fontSize: 20 }}>Estudo de Finanças</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                width: 160,
                height: 160,
                backgroundColor: "#eee",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 8,
              }}
            >
              <Image
                source={require("../../assets/home.png")}
                style={{ width: 50, height: 50 }}
              />
              <Text>Falar com tutor</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

Home.navigationOptions = {
  header: null,
  title: "Home",
  tabBarLabel: "Home",
  tabBarIcon: ({ tintColor }) => (
    <Image
      source={require("../../assets/home.png")}
      style={{ width: 25, resizeMode: "contain", tintColor }}
    />
  ),
  tabBarOptions: {
    activeTintColor: "tomato",
    inactiveTintColor: "gray",
  },
};
