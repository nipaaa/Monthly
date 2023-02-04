import { StyleSheet, View } from "react-native";
import { Button, Checkbox, HStack, ScrollView, Text } from "native-base";
import React from "react";
import AppScreen from "../../Utils/AppScreen";
import RouteHeader from "../../Utils/RouteHeader";
import { Input } from "native-base";

const UpdateBudgetOwn = () => {
  const [groupValues, setGroupValues] = React.useState([]);
  return (
    <AppScreen>
      <RouteHeader title="Update suggested budget" />
      <ScrollView>
        <Text my={5} fontSize="md" fontWeight="bold">
          Select categories and add percentage:
        </Text>

        <Checkbox.Group
          onChange={setGroupValues}
          value={groupValues}
          accessibilityLabel="choose numbers"
        >
          <View style={styles.Flex_space_align}>
            <Checkbox my={3} value="Food">
              Food
            </Checkbox>
            <Input variant="underlined" w={"20%"} placeholder="Underlined" />
          </View>
          <View style={styles.Flex_space_align}>
            <Checkbox my={3} value="Rent">
              Rent
            </Checkbox>
            <Input variant="underlined" w={"20%"} placeholder="Underlined" />
          </View>
          <View style={styles.Flex_space_align}>
            <Checkbox my={3} value="Travel">
              Travel
            </Checkbox>
            <Input variant="underlined" w={"20%"} placeholder="Underlined" />
          </View>
          <View style={styles.Flex_space_align}>
            <Checkbox my={3} value="Savings">
              Savings
            </Checkbox>
            <Input variant="underlined" w={"20%"} placeholder="Underlined" />
          </View>
          <View style={styles.Flex_space_align}>
            <Checkbox my={3} value="EmergencyFund">
              Emergency fund
            </Checkbox>
            <Input variant="underlined" w={"20%"} placeholder="Underlined" />
          </View>
          <View style={styles.Flex_space_align}>
            <Checkbox my={3} value="Educatiuon">
              Educatiuon
            </Checkbox>
            <Input variant="underlined" w={"20%"} placeholder="Underlined" />
          </View>
          <View style={styles.Flex_space_align}>
            <Checkbox my={3} value="Medical">
              Medical
            </Checkbox>
            <Input variant="underlined" w={"20%"} placeholder="Underlined" />
          </View>
          <View style={styles.Flex_space_align}>
            <Checkbox my={3} value="Utilities">
              Utilities
            </Checkbox>
            <Input variant="underlined" w={"20%"} placeholder="Underlined" />
          </View>
          <View style={styles.Flex_space_align}>
            <Checkbox my={3} value="Clothing">
              Clothing
            </Checkbox>
            <Input variant="underlined" w={"20%"} placeholder="Underlined" />
          </View>
        </Checkbox.Group>

        <Button backgroundColor="#0ccfab" mt={5}>
          Update
        </Button>
      </ScrollView>
    </AppScreen>
  );
};

export default UpdateBudgetOwn;

const styles = StyleSheet.create({
  Flex_space_align: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
