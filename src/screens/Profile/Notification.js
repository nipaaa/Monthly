import React, { useState } from "react";

import { StyleSheet, Switch, TouchableOpacity, View } from "react-native";
import AppScreen from "../../Utils/AppScreen";

import RouteHeader from "../../Utils/RouteHeader";
import { HStack, Text, VStack } from "native-base";

const Notification = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <AppScreen>
      <RouteHeader title="Notification Setting" />
      <HStack mt={5} alignItems="center" justifyContent="space-between">
        <Text fontSize="lg" fontWeight="bold">
          Turn on notification
        </Text>
        <Switch
          trackColor={{ false: "#666", true: "#38E5C6" }}
          thumbColor={isEnabled ? "#e6e6e6" : "#fff"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </HStack>

      <VStack>
        <Text fontSize="lg" color={isEnabled ? "#000" : "#e6e6e6"}>
          Notification tone
        </Text>
        <Text fontSize="sm" color={isEnabled ? "#000" : "#e6e6e6"}>
          Default(signal)
        </Text>
      </VStack>

      <VStack mt={5}>
        <Text fontSize="lg" color={isEnabled ? "#000" : "#e6e6e6"}>
          Vibrate
        </Text>
        <Text fontSize="sm" color={isEnabled ? "#000" : "#e6e6e6"}>
          Default
        </Text>
      </VStack>
    </AppScreen>
  );
};

export default Notification;

const styles = StyleSheet.create({});
