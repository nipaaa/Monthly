import * as React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

// redux
import { combineReducers, applyMiddleware } from "redux";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import { usePreventScreenCapture } from "expo-screen-capture";

import Onboarding from "./src/screens/Onboarding";
import { NativeBaseProvider } from "native-base";
import MyTabs from "./src/components/tab";
import Home from "./screens/Home.js";
import DeviceFeature from "./WillRemove/Camera/Screen/DeviceFeature";
import placesReducer from "./WillRemove/store/places-reducer";
import { useState } from "react";

const rootReducer = combineReducers({
  places: placesReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  const [isPreventCaptureScrenshot, setIsPreventScreenShot] = useState(true);
  isPreventCaptureScrenshot && usePreventScreenCapture();
  usePreventScreenCapture();

  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          {/* <Onboarding /> */}
          {/* <Home /> */}
          {/* <DeviceFeature /> */}
          <MyTabs />
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}
