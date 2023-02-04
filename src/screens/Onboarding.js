import React, { useState, useRef } from "react";
import { StyleSheet, Text, View, Animated } from "react-native";
import { FlatList } from "react-native";
import OnBoardingData from "../Utils/Onboarding";
import OnBoardItem from "../components/OnBoardItem";
import Pagination from "../components/Pagination";
import NextButton from "../components/NextButton";

const Onboarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollX = useRef(new Animated.Value(0)).current;
  const slideRef = useRef(null);

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <View style={styles.container}>
      <FlatList
        data={OnBoardingData}
        renderItem={(item) => <OnBoardItem data={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        keyExtractor={(item) => item.id}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false,
          }
        )}
        scrollEventThrottle={32}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slideRef}
      />
      <Pagination data={OnBoardingData} scrollX={scrollX} />
      <NextButton
        persentage={(currentIndex + 1) * (100 / OnBoardingData.length)}
      />
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
