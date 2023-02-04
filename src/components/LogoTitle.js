import React from "react";
import { Text, TouchableRipple } from "react-native-paper";
import { View } from "react-native";
export default function LogoTitle() {
  const presHandleBar = () => {
    console.log("something is working");
  };
  return (
    <View
      style={{
        flexDirection: "row",
        flex: 1,
        width: "100%",
        padding: 20,
        justifyContent: "space-between",
      }}
    >
      <Text>Logo Title</Text>
      <TouchableRipple onPress={presHandleBar}>
        <Text>something</Text>
      </TouchableRipple>
    </View>
  );
}
