import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import * as React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native-paper";
import Home from "../../screens/Home";
import { ScrollView } from "native-base";
import COLORS from "../Utils/Constant";

export default function App() {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={[{ flex: 1 }]}>
        {/* header */}
        <View style={styles.header}>
          <View
            style={[
              styles.container,
              styles.header_content,
              styles.Flex_space_align,
            ]}
          >
            <View style={styles.Flex_space_align}>
              <Image
                style={styles.image}
                resizeMode={"cover"}
                source={{
                  uri: "https://nahid-murad-abir.netlify.app/static/media/Dihan%20propic%20.c92ebf07.jpg",
                  width: 64,
                  height: 64,
                  borderRadius: 10,

                  borderRadius: 150 / 2,
                  overflow: "hidden",
                  borderWidth: 3,
                  borderColor: "red",
                  padding: 10,

                  // blurRadius: 64,
                }}
              />

              <View style={styles.profile_name}>
                <Text style={styles.profile_Full}>Hi, Dihan </Text>
                <Text style={styles.profile_email}>john@gmail.com</Text>
              </View>
            </View>

            <TouchableOpacity
              style={styles.notification}
              onPress={navigation.openDrawer}
            >
              <Ionicons
                name="md-notifications"
                style={{ fontSize: 30, color: "#fff" }}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* header */}

        <View
          style={[styles.Statistic, styles.Flex_space_align, styles.container]}
        >
          <View
            style={[
              styles.statistic_container,
              styles.Flex_space_align,
              { borderTopLeftRadius: 8, borderBottomLeftRadius: 8 },
            ]}
          >
            <Image
              style={styles.image}
              resizeMode={"cover"}
              source={{
                uri: "https://nahid-murad-abir.netlify.app/static/media/Dihan%20propic%20.c92ebf07.jpg",
                width: 38,
                height: 38,
                borderRadius: 10,

                borderRadius: 150 / 2,
                overflow: "hidden",
                borderWidth: 3,
                borderColor: "red",

                // blurRadius: 38,
              }}
            />
            <View>
              <Text style={styles.exp_title}>Income</Text>
              <Text style={styles.amount}>$1000</Text>
            </View>
          </View>

          <View
            style={[
              styles.statistic_container,
              styles.Flex_space_align,
              {
                borderTopRightRadius: 8,
                borderBottomRightRadius: 8,
              },
            ]}
          >
            <Image
              style={styles.image}
              resizeMode={"cover"}
              source={{
                uri: "https://nahid-murad-abir.netlify.app/static/media/Dihan%20propic%20.c92ebf07.jpg",
                width: 38,
                height: 38,
                borderRadius: 10,

                borderRadius: 150 / 2,
                overflow: "hidden",
                borderWidth: 3,
                borderColor: "red",

                // blurRadius: 64,
              }}
            />
            <View>
              <Text style={styles.exp_title}>Income</Text>
              <Text style={styles.amount}>$1000</Text>
            </View>
          </View>
        </View>
        <View style={[styles.Budget_overview, styles.container]}>
          <Text style={styles.exp_title}>
            Budgets <Text style={styles.exp_date}>June, 2022</Text>
          </Text>

          <View style={[styles.Flex_space_align, styles.Budget_header]}>
            <Text style={styles.exp_title}>
              Savings <Text style={styles.exp_date}>Last month</Text>
            </Text>
            <Text style={styles.exp_title}>
              <Text style={styles.ViewMore}>
                View details
                <MaterialCommunityIcons
                  name="chevron-right"
                  style={{ fontSize: 14, color: "#000" }}
                />
              </Text>
            </Text>
          </View>
          <Text style={[styles.exp_title, styles.saved]}>
            You saved <Text style={styles.saved_amount}>$100!</Text>
          </Text>
          <Text style={[styles.exp_title, styles.saved]}>
            Spending <Text style={styles.exp_date}>June, 2022</Text>
          </Text>
        </View>
      </View>
      <Home />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
  },

  header: {
    height: 200,
    backgroundColor: COLORS.primary,
  },

  header_content: {
    justifyContent: "center",
    justifyContent: "center",
    height: "100%",
  },

  profile_name: {
    marginHorizontal: 10,
  },

  profile_Full: {
    fontSize: 20,
    fontWeight: "700",
    color: "#fff",
  },
  profile_email: {
    color: "#fff",
  },

  Flex_space_align: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  image: {
    borderRadius: 150 / 2,
    overflow: "hidden",
    borderWidth: 3,
  },
  statistic_container: {
    alignItems: "center",
    backgroundColor: "#fff",
    width: "50%",
    marginTop: -30,
    padding: 30,

    shadowColor: "#777",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.84,

    elevation: 5,
  },
  Budget_overview: {
    marginTop: 45,
  },
  exp_title: {
    color: "#222222",
    fontSize: 18,
    fontWeight: "bold",
  },
  exp_date: {
    fontSize: 15,
    color: "#9D9D9D",
  },
  ViewMore: {
    color: "#000",
    fontSize: 14,
    fontWeight: "500",
  },
  Budget_header: {
    marginTop: 37,
  },
  saved: {
    marginTop: 22,
    marginBottom: 40,
  },
  saved_amount: {
    color: COLORS.primary,
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
});
