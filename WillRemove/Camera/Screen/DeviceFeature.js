import {
  StyleSheet,
  Button,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import AppScreen from "../../../src/Utils/AppScreen";
import { ScrollView } from "native-base";
import { useDispatch } from "react-redux";
// /es/exports
import * as placeAction from "../../../WillRemove/store/places-action";
import { useNavigation } from "@react-navigation/native";

const DeviceFeature = () => {
  const navigation = useNavigation();

  const [titleValue, setTitleValue] = useState("");
  const [titleValue1, setTitleValue1] = useState("");

  // dispatch
  const dispatch = useDispatch();

  const saveHandler = (e) => {
    // setTitleValue1(titleValue);
    dispatch(placeAction.addplace(titleValue));
    navigation.navigate("MainHome");
  };

  useEffect(() => {}, [titleValue]);

  return (
    <AppScreen>
      <ScrollView>
        <Text
          style={{
            marginVertical: 10,
            fontWeight: "bold",
            fontSize: 20,
            color: "#554994",
          }}
        >
          Dihan Abir
        </Text>
        {/* <TouchableOpacity onPress={() =>  navigation.navigate("Notification")}>
          <Text>Dihan</Text>
        </TouchableOpacity> */}

        <TextInput
          placeholder="Type here to translate!"
          onChangeText={(value) => setTitleValue(value)}
        />
        <Button title="Save Title" onPress={() => saveHandler()} />

        <Text
          style={{
            marginVertical: 10,
            fontWeight: "bold",
            fontSize: 20,
            color: "#554994",
          }}
        >
          {titleValue1}
        </Text>
      </ScrollView>
    </AppScreen>
  );
};

export default DeviceFeature;

const styles = StyleSheet.create({});
