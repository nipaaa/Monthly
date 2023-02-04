import { StyleSheet, TextInput } from "react-native";
import React from "react";

const CustomeTextInput = ({
  placeHolderNameC,
  textInputValue,
  setTextInputValue,
}) => {
  const addStyle = {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: "#b5b5b5",
    marginVertical: 5,
  };
  // error

  return (
    <>
      <TextInput
        style={[addStyle]}
        onChangeText={(text) => setTextInputValue(text)}
        value={textInputValue}
        placeholder={placeHolderNameC}
      />
    </>
  );
};

export default CustomeTextInput;

const styles = StyleSheet.create({});
