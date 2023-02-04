import * as React from "react";
import { Button, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/Home";
import SigninScreen from "../screens/SigninScreen";
import SignUpScreen from "../screens/SignUpScreen";
import Onboarding from "../screens/Onboarding";
import Profile from "../screens/Profile";
import Notification from "../screens/Profile/Notification";
import Personal from "../screens/Profile/Personal";
import Preference from "../screens/Profile/Preference";
import UpdateBudget from "../screens/Profile/UpdateBudget";
import UpdateBudgetOwn from "../screens/Profile/UpdateBudgetOwn";
import Security from "../screens/Profile/Security";
import Fingerprint from "../screens/Fingerprint";

const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Profile_Main"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Profile_Main" component={Profile} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="Personal" component={Personal} />
      <Stack.Screen name="Preference" component={Preference} />
      <Stack.Screen name="UpdateBudget" component={UpdateBudget} />
      <Stack.Screen name="UpdateBudgetOwn" component={UpdateBudgetOwn} />
      <Stack.Screen name="Security" component={Security} />
      <Stack.Screen name="Fingerprint" component={Fingerprint} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
