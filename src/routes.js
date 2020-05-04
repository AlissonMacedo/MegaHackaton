import React from "react";

import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import { Image } from "react-native";

import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";

import Home from "./pages/Home";

import Messages from "./pages/Messages";
import AuthLoadingScreen from "./pages/AuthLoadingScreen";
import Profile from "./pages/Profile";

import Register01 from "./pages/Register01";
import Register02 from "./pages/Register02";
import Register03 from "./pages/Register03";
import Register04 from "./pages/Register04";
import Register05 from "./pages/Register05";
import Register06 from "./pages/Register06";
import Register07 from "./pages/Register07";
import Register08 from "./pages/Register08";
import Register09 from "./pages/Register09";
import Register10 from "./pages/Register10";
import Register11 from "./pages/Register11";

import Mentor01 from "./pages/Mentor01";
import Mentor02 from "./pages/Mentor02";
import Mentor03 from "./pages/Mentor03";

import FinishRegister from "./pages/FinishRegister";

import ChatSchreen from "./pages/ChatScreen";

const AppStack = createStackNavigator({
  Messages: Messages,
  Chat: ChatSchreen,
  Profile: Profile,
});

const AppStack2 = createStackNavigator({
  Home: Home,

  Register01: Register01,
  Register02: Register02,
  Register03: Register03,
  Register04: Register04,
  Register05: Register05,
  Register06: Register06,
  Register07: Register07,
  Register08: Register08,
  Register09: Register09,
  Register10: Register10,
  Register11: Register11,

  Mentor01: Mentor01,
  Mentor02: Mentor02,
  Mentor03: Mentor03,

  FinishRegister: FinishRegister,
});

const AuthStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
    },
  },
  CreateAccount,
});

AppStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = navigation.state.index === 0;

  return {
    tabBarVisible,
  };
};

const TabNavigator = createBottomTabNavigator(
  {
    Chats: AppStack,
    Home: AppStack2,
    Propfile: Profile,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let imageName = require("./assets/comments.png");

        return (
          <Image
            source={imageName}
            style={{ width: 25, resizeMode: "contain", tintColor }}
          />
        );
      },
    }),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray",
    },
  }
);

console.ignoredYellowBox = ["Warning:"];

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      TabNavigator,
      Auth: AuthStack,
    },
    {
      initialRouteName: "AuthLoading",
    }
  )
);

export default Routes;
