import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Actionsheet, Box, Button, CheckIcon, Select } from "native-base";
import CustomeTextInput from "./CustomeTextInput";

const CustomeActionSheet = ({ isOpen, onClose, service, setService }) => {
  const [textInputValue, setTextInputValue] = React.useState("");

  const TextFieldList = [
    {
      title: "Name",
      placeHolder: "Name",
      inputState: textInputValue,
      setInputState: setTextInputValue,
    },
    {
      title: "Name",
      placeHolder: "Email/ phone number",
      inputState: textInputValue,
      setInputState: setTextInputValue,
    },
    {
      title: "Name",
      placeHolder: "Age",
      inputState: textInputValue,
      setInputState: setTextInputValue,
    },
    {
      title: "Name",
      placeHolder: "Salary",
      inputState: textInputValue,
      setInputState: setTextInputValue,
    },
    {
      title: "Name",
      placeHolder: "Password",
      inputState: textInputValue,
      setInputState: setTextInputValue,
    },
  ];

  return (
    <Actionsheet isOpen={isOpen} onClose={onClose}>
      <Actionsheet.Content>
        <Box w="100%" h="100%" px={4} justifyContent="center">
          <View style={{ height: "100%" }}>
            {TextFieldList.map((item) => (
              <CustomeTextInput
                textInputValue={item.inputState}
                setTextInputValue={item.setInputState}
                placeHolderNameC={item.placeHolder}
              />
            ))}

            <Select
              selectedValue={service}
              minWidth="200"
              accessibilityLabel="Choose Service"
              placeholder="Choose Service"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
              onValueChange={(itemValue) => setService(itemValue)}
            >
              {[
                { label: "UX Research", value: "ux" },
                { label: "Web Development", value: "web" },
                { label: "Cross Platform Development", value: "cross" },
                { label: "UI Designing", value: "ui" },
                { label: "Backend Development", value: "backend" },
              ].map((item) => (
                <Select.Item label={item.label} value={item.value} />
              ))}
            </Select>

            <Button onPress={() => onClose()} style={[styles.primary_btn]}>
              Added
            </Button>
          </View>
        </Box>
        {/* <Actionsheet.Item>Delete</Actionsheet.Item>
              <Actionsheet.Item isDisabled>Share</Actionsheet.Item>
              <Actionsheet.Item>Play</Actionsheet.Item>
              <Actionsheet.Item>Favourite</Actionsheet.Item>
              <Actionsheet.Item>Cancel</Actionsheet.Item> */}
      </Actionsheet.Content>
    </Actionsheet>
  );
};

export default CustomeActionSheet;

const styles = StyleSheet.create({});
