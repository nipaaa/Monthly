import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Center, Text } from "native-base";
import React, { useState } from "react";
import AppScreen from "../../Utils/AppScreen";
import RouteHeader from "../../Utils/RouteHeader";
import AntDesign from "react-native-vector-icons/AntDesign";
import { HStack, Switch, VStack } from "native-base";

const Preference = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <AppScreen>
      <RouteHeader title="Preference" />

      <TouchableOpacity onPress={() => navigation.navigate("Security")}>
        <HStack mt={5} alignItems="center" justifyContent="space-between">
          <VStack>
            <Text fontSize="lg" fontWeight="bold">
              Security code
            </Text>
            <Text fontSize="sm" color="#666">
              Set security code to lock the app
            </Text>
          </VStack>
          <Switch
            trackColor={{ false: "#666", true: "#38E5C6" }}
            thumbColor={isEnabled ? "#e6e6e6" : "#fff"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </HStack>
      </TouchableOpacity>

      <HStack mt={5} alignItems="center" justifyContent="space-between">
        <VStack>
          <TouchableOpacity
            onPress={() => isEnabled && navigation.navigate("Fingerprint")}
          >
            <Text color="#9D9D9D" fontSize="lg" fontWeight="bold">
              Fingerprint {isEnabled && "click"}
            </Text>
          </TouchableOpacity>
          <Text fontSize="sm" color="#9D9D9D">
            Allow to use fingerprint to unlock the app
          </Text>
        </VStack>
        <Switch
          trackColor={{ false: "#666", true: "#38E5C6" }}
          thumbColor={isEnabled ? "#e6e6e6" : "#fff"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </HStack>

      <HStack mb={5} mt={5} alignItems="center" justifyContent="space-between">
        <VStack>
          <Text fontSize="lg" fontWeight="bold">
            Allow screenshot
          </Text>
        </VStack>
        <Switch
          trackColor={{ false: "#666", true: "#38E5C6" }}
          thumbColor={isEnabled ? "#e6e6e6" : "#fff"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </HStack>

      <Text fontSize="sm" mt={5} pt={5} fontWeight="bold">
        Other Preferences
      </Text>

      <TouchableOpacity onPress={() => navigation.navigate("UpdateBudget")}>
        <HStack mt={4} alignItems="center" justifyContent="space-between">
          <Text fontSize="md" fontWeight="bold">
            Update suggested budget
          </Text>
          <AntDesign name="right" style={{ fontSize: 15, color: "#222222" }} />
        </HStack>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("UpdateBudgetOwn")}>
        <HStack mt={4} alignItems="center" justifyContent="space-between">
          <Text fontSize="md" fontWeight="bold" color="#222222">
            Update own budget
          </Text>
          <AntDesign name="right" style={{ fontSize: 15, color: "#222222" }} />
        </HStack>
      </TouchableOpacity>
    </AppScreen>
  );
};

export default Preference;

const styles = StyleSheet.create({});
