import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

import HomeScreen from "../screens/Home";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Statistic from "../screens/Statistic";
import Onboarding from "../screens/Onboarding";
import HomeDrawer from "./HomeDrawer";
import BudgetScreen from "../screens/BudgetScreen";
import Expence from "../screens/Expence";
import Profile from "../screens/Profile";
import ProfileStack from "./ProfileStack";
import COLORS from "../Utils/Constant";

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Statistics"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          elevation: 0,
          backgroundColor: "#ffffff",
          borderTopRightRadius: 15,
          borderTopLeftRadius: 15,
          height: 70,
        },
      }}
      tabBarOptions={{
        showLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeDrawer}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <MaterialCommunityIcons
                name="home"
                style={{
                  fontSize: 30,
                  color: focused ? COLORS.primary : "#748c94",
                }}
              />
              <Text
                style={{
                  color: focused ? COLORS.primary : "#748c94",
                  fontSize: 12,
                }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Budget"
        component={BudgetScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <MaterialCommunityIcons
                name="account-cash-outline"
                style={{
                  fontSize: 30,
                  color: focused ? COLORS.primary : "#748c94",
                }}
              />
              <Text
                style={{
                  color: focused ? COLORS.primary : "#748c94",
                  fontSize: 12,
                }}
              >
                Budget
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Expenses"
        component={Expence}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <MaterialCommunityIcons
                name="book-account"
                style={{
                  fontSize: 30,
                  color: focused ? COLORS.primary : "#748c94",
                }}
              />
              <Text
                style={{
                  color: focused ? COLORS.primary : "#748c94",
                  fontSize: 12,
                }}
              >
                Expenses
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Statistics"
        component={Statistic}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <MaterialCommunityIcons
                name="google-analytics"
                style={{
                  fontSize: 30,
                  color: focused ? COLORS.primary : "#748c94",
                }}
              />
              <Text
                style={{
                  color: focused ? COLORS.primary : "#748c94",
                  fontSize: 12,
                }}
              >
                Statistics
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <MaterialCommunityIcons
                name="account"
                style={{
                  fontSize: 30,
                  color: focused ? COLORS.primary : "#748c94",
                }}
              />
              <Text
                style={{
                  color: focused ? COLORS.primary : "#748c94",
                  fontSize: 12,
                }}
              >
                Profile
              </Text>
            </View>
          ),
        }}
      />

      {/* <Tab.Screen name="Main" component={MainScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size, focused }) => (
                        <MaterialCommunityIcons name="plus" color={focused ? '#fff' : '#fff'} size={40}
                            style={{
                                // top: -30,
                                justifyContent: 'center',
                                // alignītems: 'center',
                                borderRadius: 35,
                                backgroundColor: '#4D1B5B',
                                padding: 1,
                                shadowColor: 'green',
                                shadowOffset: {
                                    width: 15,
                                    height: 15
                                },
                                shadowOpacity: .5,
                                shadowRadius: 3.5,

                            }}
                        />
                    ),
                }}
            /> */}
      {/* <Tab.Screen name="About" component={AboutScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{justifyContent: 'center' }} >
                            <MaterialCommunityIcons name="details" style={{ fontSize: 30, color: focused ? '#4D1B5B' : '#748c94' }} />
                            <Text style={{ color: focused ? '#4D1B5B' : '#748c94', fontSize: 12 }}>
                                About
                            </Text>

                        </View>
                    )
                }}
            /> */}
    </Tab.Navigator>
  );
}
