import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { HStack } from "native-base";

import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

const RouteHeader = ({ title }) => {
  const navigation = useNavigation();
  return (
    <HStack mt={5} justifyContent="space-between">
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign
          name="left"
          style={{ fontSize: 20, fontWeight: "bold", color: "#222222" }}
        />
      </TouchableOpacity>
      <Text style={{ fontSize: 20, fontWeight: "bold", color: "#222222" }}>
        {title}
      </Text>
      <Text></Text>
    </HStack>
  );
};

export default RouteHeader;

const styles = StyleSheet.create({});
