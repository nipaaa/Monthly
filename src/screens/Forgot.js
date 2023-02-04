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

const Forgot = ({ navigation }) => {
  const [textInputValue, setTextInputValue] = React.useState("");
  return (
    <AppScreen>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.container}>
          <Text style={[styles.main_titleSecondery, styles.main_Font]}>
            Forgot password
          </Text>
          <Text
            style={[styles.title_margin_Secondery, styles.main_Font_secondary]}
          >
            Please, enter your email address. You will receive a link to create
            a new password via email.
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
              placeholder="Email"
            />

            <TouchableOpacity onPress={() => navigation.navigate("MainHome")}>
              <Button
                onPress={() => navigation.navigate("MainHome")}
                style={[styles.primary_btn, styles.mt]}
              >
                Sign in
              </Button>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("MainHome")}>
              <Button
                onPress={() => navigation.navigate("MainHome")}
                style={[styles.primary_btn1]}
              >
                <Text style={styles.buttontext}>Try another way</Text>
              </Button>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("Signin")}
              style={[styles.signContainer, styles.primaryText]}
            >
              <Text style={[styles.main_Font_secondary1]}>Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </AppScreen>
  );
};

export default Forgot;

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
    height: 64,
    paddingHorizontal: 20,
    fontSize: 16,

    borderColor: "#D9D9D9",
    shadowColor: "#D9D9D9",
    shadowOffset: {
      width: 0,
      height: 12,
    },

    elevation: 1,

    borderRadius: 10,
  },
  primary_btn: {
    backgroundColor: COLORS.primary,
    borderRadius: 20,
    marginTop: 8,
    marginBottom: 10,
  },

  primary_btn1: {
    borderWidth: 1,
    backgroundColor: "transparent",
    borderColor: "#319DA0",
    borderRadius: 20,
    marginTop: 8,
    marginBottom: 10,
  },
  buttontext: {
    color: "#319DA0",
  },
  mt: {
    marginTop: 40,
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
