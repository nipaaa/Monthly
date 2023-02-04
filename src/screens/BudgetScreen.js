// import { StyleSheet, Text, View } from "react-native";
// import React from "react";
// import AppScreen from "../Utils/AppScreen";

import { Dimensions } from "react-native";

// const BudgetScreen = () => {
//   return (
//     <AppScreen>
//       <View style={styles.Budget_Main}>
//         <Text>BudgetScreen</Text>

//         {/* header */}

//         <View style={styles.header}>

//         </View>
//       </View>
//     </AppScreen>
//   );
// };

// export default BudgetScreen;

// const styles = StyleSheet.create({
//   Budget_Main: {},
// });
import * as React from "react";
import { View, useWindowDimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import SuggestBudget from "../components/SuggestBudget";
import { Icon } from "native-base";
import COLORS from "../Utils/Constant";
import MyBudget from "../components/MyBudget";

const renderScene = SceneMap({
  first: SuggestBudget,
  second: MyBudget,
});
const renderTabBar = (props) => (
  <TabBar
    {...props}
    renderIcon={({ route, focused, color }) => (
      <Icon name={focused ? "abums" : "albums-outlined"} color={color} />
    )}
    indicatorStyle={{ backgroundColor: "#FFFFFF" }}
    style={{ backgroundColor: COLORS.primary }}
  />
);
export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Suggested budget" },
    { key: "second", title: "MyBudget" },
  ]);

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}
