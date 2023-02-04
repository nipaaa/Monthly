import * as React from "react";
import { Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/Home";
import SigninScreen from "../screens/SigninScreen";
import SignUpScreen from "../screens/SignUpScreen";
import Onboarding from "../screens/Onboarding";
import Forgot from "../screens/Forgot";
import OTP from "../screens/OTP";

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

const HomeDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="MainHome"
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="MainHome" component={HomeScreen} />
      <Drawer.Screen name="Signin" component={SigninScreen} />
      <Drawer.Screen name="Singup" component={SignUpScreen} />
      <Drawer.Screen name="OnBoard" component={Onboarding} />
      <Drawer.Screen name="Forgot" component={Forgot} />
      <Drawer.Screen name="OTP" component={OTP} />
    </Drawer.Navigator>
  );
};

export default HomeDrawer;
