import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Animated,
} from "react-native";

import Svg, { G, Circle } from "react-native-svg";
import { AntDesign } from "@expo/vector-icons";
// import { TouchableOpacity } from "react-native-gesture-handler";

const NextButton = ({ persentage }) => {
  const size = 128;
  const stockWidth = 2;
  const center = size / 2;
  const redious = size / 2 - stockWidth / 2;
  const Circumference = 2 * Math.PI * redious;

  const progressAnimated = useRef(new Animated.Value(0)).current;
  const progressRef = useRef(null);

  const animation = (totalVal) => {
    return Animated.timing(progressAnimated, {
      totalVal,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animation(persentage);
  }, [persentage]);

  useEffect(() => {
    progressAnimated.addListener((value) => {
      const strokeDashoffset =
        Circumference - (Circumference * value.value) / 100;

      if (progressRef.current) {
        progressRef.current.setNativeProps({
          strokeDashoffset,
        });
      }
    });
  }, [persentage]);

  console.log(persentage);

  return (
    <View style={styles.container}>
      <Text>NextButton</Text>
      <Svg width={size} height={size}>
        <G rotation="-90" origin={center}>
          <Circle
            stroke="#E6E7E8"
            cx={center}
            cy={center}
            r={redious}
            strokeWidth={stockWidth}
          />
          <Circle
            ref={progressRef}
            stroke="#F4338f"
            cx={center}
            cy={center}
            r={redious}
            strokeWidth={stockWidth}
            strokeDasharray={Circumference}
          />
        </G>
      </Svg>
      <TouchableOpacity style={styles.button} activeOpacity={0.6}>
        <AntDesign name="arrowright" size={32} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default NextButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    position: "absolute",
    backgroundColor: "#f4338f",
    borderRadius: 100,
    padding: 20,
  },
});
