import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
const { width, height } = Dimensions.get("window");
import {
  Box,
  Button,
  Center,
  FlatList,
  HStack,
  Image,
  Progress,
  ScrollView,
  Square,
  VStack,
} from "native-base";
import COLORS from "../Utils/Constant";

const img1 =
  "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
const img2 =
  "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
const img3 =
  "https://images.unsplash.com/photo-1543269866-487350d6fa5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
    amount: "100",
    img: img1,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
    amount: "100",
    img: img2,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
    amount: "100",
    img: img3,
  },
];

// const { height } = Dimensions;

const MyBudget = () => {
  const myRef = React.useRef({});
  React.useEffect(() => {
    const styleObj = {
      backgroundColor: COLORS.primary,
      borderRadius: 4,
    }; //@ts-ignore

    myRef.current.setNativeProps({
      style: styleObj,
    });
  }, [myRef]);

  return (
    <View>
      <Center style={styles.budget_main}>
        {/* <Container> */}
        <HStack space={3} marginTop={7}>
          <Square rounded="md" size="44%" height={90} bg={COLORS.secondary}>
            <Text style={[styles.budget_amount, styles.budget_color]}>
              Income
            </Text>
            <Text style={[styles.budget_title, styles.budget_color]}>
              $ 13,000/
              <Text style={[styles.budget_amount, styles.budget_color]}>
                per month
              </Text>
            </Text>
          </Square>
          <Square rounded="md" size="44%" height={90} bg={COLORS.secondary}>
            <Text style={[styles.budget_amount, styles.budget_color]}>
              Spending
            </Text>
            <Text style={[styles.budget_title, styles.budget_color]}>
              $ 1,000/
              <Text style={[styles.budget_amount, styles.budget_color]}>
                per month
              </Text>
            </Text>
          </Square>
        </HStack>

        {/* header scrolll bar  */}
        <View style={styles.budget_details}>
          <ScrollView
            horizontal={true}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          >
            {/* <HStack space={3} justifyContent="center"> */}
            {[
              "Day",
              "Weekly",
              "Monthly",
              "Yearly",
              "Day",
              "Weekly",
              "Monthly",
              "Yearly",
            ].map((i) => {
              return (
                <Center
                  margin={1}
                  h="10"
                  w="20"
                  bg="#fff"
                  rounded="md"
                  shadow={1}
                >
                  <Square>
                    <Text>{i}</Text>
                  </Square>
                </Center>
              );
            })}
            {/* </HStack> */}
          </ScrollView>

          <View style={styles.budget_total_amount}>
            <Center>
              <Text style={[styles.budget_title, styles.budget_title_color]}>
                $ 1,000/
                <Text style={[styles.budget_amount, styles.budget_title_color]}>
                  Basic salary
                </Text>
              </Text>
            </Center>
            <Button
              size="lg"
              variant={"solid"}
              _text={{
                // size: "10",
                color: "#fff",
              }}
              ref={myRef}
              px="3"
              py="1"
            >
              Update
            </Button>
          </View>

          {/* total amount */}
        </View>
        <ScrollView style={styles.scrollView}>
          <FlatList
            data={DATA}
            renderItem={BudgetItem}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
          />

          {/* <BudgetItem /> */}
        </ScrollView>
        <Text style={styles.Bottomtranparent}>Empty</Text>

        {/* </Container> */}
      </Center>
    </View>
  );
};

export default MyBudget;

function BudgetItem({ item }) {
  return (
    <View>
      <HStack m={2}>
        <Center>
          <Image
            resizeMode={"cover"}
            // source={require("@expo/snack-static/react-native-logo.png")}
            source={{
              uri: `${item.img}`,
              width: 64,
              height: 64,
              borderRadius: 10,

              borderRadius: 150 / 2,
              overflow: "hidden",
              borderWidth: 3,
              borderColor: "red",

              // blurRadius: 64,
            }}
          />
        </Center>

        {/* <Center> */}
        <VStack justifyContent="space-between" px={3}>
          <HStack
            w="64"
            h="12"
            rounded="md"
            space={3}
            px={2}
            justifyContent="space-between"
          >
            <Text>{item.title}</Text>

            <Text style={styles.amount}>${item.amount}</Text>
          </HStack>
          <Box w="90%" maxW="400">
            <Progress
              bg="#ECFFFB"
              _filledTrack={{
                bg: COLORS.primary,
              }}
              size="md"
              value={45}
            />
          </Box>
        </VStack>
        {/* </Center> */}
      </HStack>
    </View>
  );
}

const styles = StyleSheet.create({
  budget_main: {
    backgroundColor: COLORS.Third,
    // paddingBottom: 80,
  },

  budget_color: { color: "#fff" },
  budget_title_color: { color: COLORS.primary },
  budget_amount: { fontSize: 12, fontWeight: "500" },
  budget_title: {
    fontSize: 20,
    fontWeight: "bold",
  },

  budget_details: {
    backgroundColor: "#fff",
    marginTop: 20,
    width: "100%",
    paddingTop: 30,

    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
  },
  budget_total_amount: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 20,

    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container: {
    width: "90%",
    alignSelf: "center",
    marginBottom: 100,
  },
  scrollView: {
    width: "100%",
    backgroundColor: "#fff",
    height: height * 1 - height * 0.6,
  },
  //   BudgetItem

  amount: {
    color: COLORS.primary,
    fontSize: 16,
    fontWeight: "bold",
  },
  Bottomtranparent: {
    backgroundColor: "#fff",
    width: "100%",
    padding: 20,
    color: "#fff",
  },
});
