import { View, StyleSheet, TouchableOpacity } from "react-native";
import * as React from "react";
import { Text } from "react-native-paper";
import { Dimensions } from "react-native";

import { LineChart } from "react-native-chart-kit";
import COLORS from "../Utils/Constant";
import AppScreen from "../Utils/AppScreen";
import { Center, HStack, ScrollView, Square, VStack } from "native-base";
import { useEffect } from "react";
import { useState } from "react";

export default function Statistic() {
  const screenWidth = Dimensions.get("window").width;
  const [period, setPeriod] = useState("");
  const [period1, setPeriod1] = useState([
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
  ]);

  const pressHandler = () => {
    setPeriod("okay");
    setPeriod1([
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
    ]);
  };

  useEffect(() => {}, [period1, period]);
  return (
    <AppScreen>
      <Center>
        <Text style={styles.chartTitle}> Statistics </Text>
      </Center>
      {/* header */}
      <HStack justifyContent="flex-end">
        <Text style={[styles.btn_left, styles.btn_common]}>
          Suggested budget
        </Text>
        <Text style={[styles.btn_right, styles.btn_common]}>My budget</Text>
      </HStack>
      <HStack justifyContent="space-evenly">
        <TouchableOpacity onPress={pressHandler}>
          <Text style={[styles.btn_day, styles.btn_c, styles.btn_common]}>
            Day
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={pressHandler}>
          <Text style={[styles.btn_day, styles.btn_c, styles.btn_common]}>
            Week
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={pressHandler}>
          <Text style={[styles.btn_day, styles.btn_c, styles.btn_common]}>
            Month
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={pressHandler}>
          <Text style={[styles.btn_day, styles.btn_c, styles.btn_common]}>
            Year
          </Text>
        </TouchableOpacity>
      </HStack>
      <View>
        <Text style={styles.chartTitle}>Bezier Line Chart</Text>
        <LineChart
          data={{
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            datasets: [
              {
                data: period1,
              },
            ],
          }}
          width={Dimensions.get("window").width} // from react-native
          height={220}
          yAxisLabel="$"
          yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#fff",
            backgroundGradientFrom: "#fff",
            backgroundGradientTo: "#fff",
            decimalPlaces: 3, // optional, defaults to 2dp
            color: (opacity = 0.3) => COLORS.primary,
            labelColor: (opacity = 1) => `#41224A`,
            style: {
              borderRadius: 16,
              stroke: "#666",
            },
            propsForDots: {
              r: "6",
              strokeWidth: 1,
              stroke: COLORS.secondary,
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 2,
          }}
        />
      </View>
      <ScrollView
        horizontal={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        {/* <HStack space={3} justifyContent="center"> */}
        {[
          "Food",
          "Tuition",
          "Living",
          "Educatation",
          "Clothes",
          "Others",
          "Loan",
        ].map((i) => {
          return (
            <TouchableOpacity onPress={pressHandler}>
              <Center
                margin={1}
                h="10"
                w="20"
                bg="#fff"
                rounded="md"
                // shadow={1}
              >
                <Square>
                  <Text>{i}</Text>
                </Square>
              </Center>
            </TouchableOpacity>
          );
        })}
        {/* </HStack> */}
      </ScrollView>
      <View>
        <Text>Recent Expenses</Text>
      </View>
      <View>
        <Text>Recent Expenses</Text>
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  singleItem: {
    height: 80,
    backgroundColor: COLORS.purple,
    marginTop: 10,
  },
  chartTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    padding: 10,
    margin: 10,
  },
  btn_common: {
    padding: 9,
    borderColor: "#9D9D9D",
    color: "#9D9D9D",
    fontSize: 12,
  },
  btn_left: {
    borderWidth: 1,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  btn_right: {
    borderWidth: 1,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },
  btn_c: {
    marginTop: 20,
  },
  btn_day: {
    borderBottomWidth: 2,
    borderColor: "#000",
    color: "#000",
  },
});
