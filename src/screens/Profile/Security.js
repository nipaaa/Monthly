import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppScreen from "../../Utils/AppScreen";
import RouteHeader from "../../Utils/RouteHeader";
import { Center, HStack, Input } from "native-base";

const Security = () => {
  return (
    <AppScreen>
      <RouteHeader title="Security code" />

      <Center mt={"100px"}>
        <Text>Enter security code</Text>
      </Center>
      <Center m={"30px"}>
        <HStack>
          <Input
            m={1}
            borderColor="#32DEC0"
            borderWidth={2}
            w="20%"
            size="2xl"
            value="2"
            placeholder=""
            bg="#06C5A3"
          />
          <Input m={1} w="20%" size="2xl" placeholder="" />
          <Input m={1} w="20%" size="2xl" placeholder="" />
          <Input m={1} w="20%" size="2xl" placeholder="" />
        </HStack>
      </Center>

      <Text>Enter security code</Text>
    </AppScreen>
  );
};

export default Security;

const styles = StyleSheet.create({});
