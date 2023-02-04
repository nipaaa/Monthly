import {
  StyleSheet,
  Text,
  Image,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";

const OnBoardItem = ({ data }) => {
  const { width, height } = useWindowDimensions();

  const item = data.item;
  return (
    <View styles={[styles.container, { width }]}>
      <Text>OnBoardItem</Text>
      <Image
        source={{
          uri: "https://nahid-murad-abir.netlify.app/static/media/Dihan%20propic%20.c92ebf07.jpg",
          width: width,
          height: height,
        }}
        style={[styles.image, { flex: 0.7, width, resizeMode: "contain" }]}
      />

      <View style={{ flex: 0.3 }}>
        <Text style={[styles.title]}>{item.title}</Text>
        <Text style={[styles.description, { width }]}>{item.description}</Text>
      </View>
    </View>
  );
};

export default OnBoardItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "red",
  },

  image: {
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    // fontWeight: 800,
  },
  description: {
    fontSize: 14,
    // fontWeight: 700,
  },
});
