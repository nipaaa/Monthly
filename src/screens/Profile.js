import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import AppScreen from "../Utils/AppScreen";
import { Box, Center, HStack, Image, VStack } from "native-base";

import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";

const Profile = ({ navigation }) => {
  return (
    <AppScreen>
      <HStack alignItems="center" marginTop="30%">
        <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
          <Image
            borderRadius={100}
            style={styles.image}
            resizeMode={"cover"}
            source={{
              uri: "https://nahid-murad-abir.netlify.app/static/media/Dihan%20propic%20.c92ebf07.jpg",
              width: 64,
              height: 64,
              borderRadius: 10,

              borderRadius: 150 / 2,
              overflow: "hidden",
              borderWidth: 3,
              borderColor: "red",
              padding: 10,

              // blurRadius: 64,
            }}
          />
        </TouchableOpacity>
        <Box px={5}>
          <Text style={styles.header_title}>Dihan abir</Text>
          <Text style={styles.header_email}>nahid.muradabir@gmai.com</Text>
        </Box>
      </HStack>
      <VStack space={4} pt={5} mt={5}>
        <TouchableOpacity onPress={() => navigation.navigate("Personal")}>
          <HStack
            py={5}
            px={1}
            borderBottomColor="#e6e6e6"
            borderBottomWidth={1}
            alignItems="center"
            justifyContent="space-between"
          >
            <Text style={styles.setting_title}>
              <Feather name="user" style={{ fontSize: 15, color: "#222222" }} />
              Personal Information
            </Text>
            <AntDesign
              name="right"
              style={{ fontSize: 15, color: "#222222" }}
            />
          </HStack>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Preference")}>
          <HStack
            py={5}
            px={1}
            borderBottomColor="#e6e6e6"
            borderBottomWidth={1}
            alignItems="center"
            justifyContent="space-between"
          >
            <Text style={styles.setting_title}>
              <Feather name="user" style={{ fontSize: 15, color: "#222222" }} />
              Preferences
            </Text>
            <AntDesign
              name="right"
              style={{ fontSize: 15, color: "#222222" }}
            />
          </HStack>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Notification")}>
          <HStack
            py={5}
            px={1}
            borderBottomColor="#e6e6e6"
            borderBottomWidth={1}
            alignItems="center"
            justifyContent="space-between"
          >
            <Text style={styles.setting_title}>
              <Feather name="user" style={{ fontSize: 15, color: "#222222" }} />
              Notification
            </Text>
            <AntDesign
              name="right"
              style={{ fontSize: 15, color: "#222222" }}
            />
          </HStack>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
          <HStack
            py={5}
            px={1}
            borderBottomColor="#e6e6e6"
            borderBottomWidth={1}
            alignItems="center"
            justifyContent="space-between"
          >
            <Text style={styles.setting_title}>
              <Feather name="user" style={{ fontSize: 15, color: "red" }} />
              Logout
            </Text>
            <AntDesign
              name="right"
              style={{ fontSize: 15, color: "#222222" }}
            />
          </HStack>
        </TouchableOpacity>
      </VStack>
    </AppScreen>
  );
};

export default Profile;

const styles = StyleSheet.create({
  header_title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  header_margin: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 60,
    marginBottom: 40,
  },
  header_email: {
    color: "#9D9D9D",
  },
});
