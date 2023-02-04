import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import SliderExpence from "../components/SliderExpence";
import {
  Actionsheet,
  Box,
  Button,
  Center,
  CheckIcon,
  Image,
  ScrollView,
  Select,
  useDisclose,
} from "native-base";
import ExpenceSlide from "../components/SlideList";
import CustomeActionSheet from "../Utils/CustomeActionSheet";
import DeviceFeature from "../../WillRemove/Camera/Screen/DeviceFeature";
import AppScreen from "../Utils/AppScreen";
import COLORS from "../Utils/Constant";

const Expence = () => {
  const { isOpen, onOpen, onClose } = useDisclose();
  const [service, setService] = React.useState("");

  return (
    <AppScreen>
      <SliderExpence />

      <View style={[styles.add, styles.container]}>
        <Text style={[styles.title]}>Expenses</Text>
        <Button backgroundColor={COLORS.primary} onPress={onOpen}>
          + Add Expenses
        </Button>
      </View>
      <ScrollView
        style={[styles.container]}
        showsVerticalScrollIndicator={false}
      >
        <ExpenceSlide />

        <Center>
          <CustomeActionSheet
            isOpen={isOpen}
            onClose={onClose}
            service={service}
            setService={setService}
          />
        </Center>
      </ScrollView>
    </AppScreen>
  );
};

export default Expence;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
  },

  add: {
    marginVertical: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  button: {
    color: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 15,
    backgroundColor: "#06C5A3",
  },
  primary_btn: {
    backgroundColor: "rgba(56, 229, 198, 1)",
    borderRadius: 20,
    marginTop: 48,
  },
});
