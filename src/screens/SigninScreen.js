import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import AppScreen from "../Utils/AppScreen";
import { Button } from "native-base";
import COLORS from "../Utils/Constant";

const SigninScreen = ({ navigation }) => {
  const [textInputValue, setTextInputValue] = React.useState("");
  return (
    <AppScreen>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.container}>
          <Text style={[styles.main_title, styles.main_Font]}>Sign in</Text>
          <Text style={[styles.main_titleSecondery, styles.main_Font]}>
            Welcome back!
          </Text>
          <Text
            style={[styles.title_margin_Secondery, styles.main_Font_secondary]}
          >
            Sign in with your email/ phone number and password to continue.
          </Text>

          <View style={styles.container_Input}>
            <TextInput
              style={[
                {
                  height: 40,
                  borderColor: "gray",
                  borderWidth: 1,
                  // placeholderTextColor: "gray",
                },
                styles.input,
              ]}
              onChangeText={(text) => setTextInputValue(text)}
              value={textInputValue}
              placeholder="Email/ phone number"
            />
            <TextInput
              style={[
                {
                  height: 40,
                  borderColor: "gray",
                  borderWidth: 1,
                  marginTop: 16,
                  // placeholderTextColor: "gray",
                },
                styles.input,
              ]}
              onChangeText={(text) => setTextInputValue(text)}
              value={textInputValue}
              placeholder="Password"
            />

            <TouchableOpacity onPress={() => navigation.navigate("Forgot")}>
              <Text
                style={[
                  styles.title_margin_Secondery,
                  styles.main_Font_secondary1,
                ]}
              >
                Forgot password?
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("MainHome")}>
              <Button
                onPress={() => navigation.navigate("MainHome")}
                style={[styles.primary_btn]}
              >
                Sign in
              </Button>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("Singup")}
              style={[styles.signContainer, styles.primaryText]}
            >
              <Text style={[styles.main_Font_secondary1]}>
                Don’t have an account?
              </Text>
              <Text
                style={[styles.main_Font_secondary, styles.main_Font_signup]}
              >
                Log in
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </AppScreen>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
    marginBottom: 100,
  },
  main_title: {
    marginTop: 20,
  },
  main_titleSecondery: {
    marginTop: 60,
  },
  title_margin_Secondery: {
    marginTop: 16,
  },
  main_Font: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  main_Font_secondary: {
    fontSize: 14,
    fontWeight: "400",
    color: "#9D9D9D",
  },
  main_Font_align: { textAlign: "center" },
  main_Font_Signup: { textAlign: "center" },
  container_Input: {
    marginTop: 30,
  },

  input: {
    borderWidth: 0,
    height: 50,
    paddingHorizontal: 15,
    fontSize: 14,

    borderColor: "#D9D9D9",
    borderWidth: 1,
    borderRadius: 10,
  },
  primary_btn: {
    backgroundColor: COLORS.primary,
    borderRadius: 20,
    marginTop: 48,
  },
  main_Font_signup: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.primary,
  },
  signContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  main_Font_secondary1: {
    color: "#000",
    marginRight: 10,
  },
});
