import { StyleSheet, View } from "react-native";
import { Button, Checkbox, HStack, ScrollView, Text } from "native-base";
import React from "react";
import AppScreen from "../../Utils/AppScreen";
import RouteHeader from "../../Utils/RouteHeader";
import { Input } from "native-base";

const UpdateBudget = () => {
  const [groupValues, setGroupValues] = React.useState([]);
  return (
    <AppScreen>
      <RouteHeader title="Update suggested budget" />
      <ScrollView>
        <Input mt={5} size="2xl" placeholder="Enter Number" />
        <Text my={5} fontSize="md" fontWeight="bold">
          Select categories:
        </Text>

        <Checkbox.Group
          onChange={setGroupValues}
          value={groupValues}
          accessibilityLabel="choose numbers"
        >
          <Checkbox value="Food">Food</Checkbox>

          <Checkbox my={3} value="Rent">
            Rent
          </Checkbox>
          <Checkbox my={3} value="Travel">
            Travel
          </Checkbox>
          <Checkbox my={3} value="Savings">
            Savings
          </Checkbox>
          <Checkbox my={3} value="EmergencyFund">
            Emergency fund
          </Checkbox>
          <Checkbox my={3} value="Educatiuon">
            Educatiuon
          </Checkbox>
          <Checkbox my={3} value="Medical">
            Medical
          </Checkbox>
          <Checkbox my={3} value="Utilities">
            Utilities
          </Checkbox>
          <Checkbox my={3} value="Clothing">
            Clothing
          </Checkbox>
        </Checkbox.Group>

        <Button backgroundColor="#0ccfab" mt={5}>
          Update
        </Button>
      </ScrollView>
    </AppScreen>
  );
};

export default UpdateBudget;

const styles = StyleSheet.create({});
