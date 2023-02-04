// import {
//   Alert,
//   StyleSheet,
//   Text,
//   TouchableHighlight,
//   View,
//   SafeArea,
// } from "react-native";
// import React, { useEffect, useState } from "react";
// import AppScreen from "../Utils/AppScreen";

// // local auth in expo
// import * as LocalAuthentication from "expo-local-authentication";
// import { Button } from "react-native";
// import { StatusBar } from "native-base";

// const Fingerprint = () => {
//   const [isBiometricSupport, setIsBiometricSupport] = useState(false);

//   useEffect(() => {
//     (async () => {
//       const compatible = await LocalAuthentication.hasHardwareAsync();
//       setIsBiometricSupport(compatible);
//     })();
//   });

//   const fallBackToDefaultAuth = () => {
//     console.log("fall back to password authentication");
//   };

//   const alertComponent = (title, mess, btnTxt, btnFunc) => {
//     return Alert.alert(title, mess, [
//       {
//         text: btnTxt,
//         onPress: btnFunc,
//       },
//     ]);
//   };

//   const TwoButtonAlert = () =>
//     Alert.alert("Welcome To App", "Are you doing well.. hush!", [
//       {
//         text: "Back",
//         onPress: () => console.log("Cancel Pressed"),
//         style: "cencel",
//       },
//       {
//         text: "OK",
//         onPress: () => console.log("Ok  Pressed"),
//       },
//     ]);

//   const HandleBiometricAuth = async () => {
//     const isBiometricAvaileable = await LocalAuthentication.hasHardwareAsync();

//     if (!isBiometricAvaileable)
//       return alertComponent(
//         "please ENter your passwork",
//         "Biometric is not support in your device",
//         "Ok",
//         () => fallBackToDefaultAuth()
//       );

//     //   check biometric type like fingerprint or face ID
//     let supportBiometric;

//     if (isBiometricAvaileable)
//       supportBiometric =
//         await LocalAuthentication.supportedAuthenticationTypesAsync();

//     // check biometric are saved on locally
//     const saveBiometric = await LocalAuthentication.isEnrolledAsync();
//     if (!saveBiometric)
//       return alertComponent(
//         "Biometric record not saved",
//         "Please login with password",
//         "oky",
//         () => fallBackToDefaultAuth()
//       );

//     const biometricAuth = await LocalAuthentication.authenticateAsync({
//       promptMessage: "Login with Biometric",
//       cancelLabel: "Cancel",
//       disableDeviceFallback: true,
//     });

//     //login in the user in on success
//     if (biometricAuth) {
//       TwoButtonAlert();
//     }
//     console.log({ isBiometricAvaileable });
//     console.log({ supportBiometric });
//     console.log({ saveBiometric });
//     console.log({ biometricAuth });
//   };

//   //   return (
//   //     <SafeArea>
//   //       <View>
//   //         <Text>
//   //           {isBiometricSupport
//   //             ? "You desive is ok for biometricn"
//   //             : "Not okay for bio metric"}
//   //         </Text>
//   //         <TouchableHighlight
//   //           style={{
//   //             height: 60,
//   //             marginTop: 200,
//   //           }}
//   //         >
//   //           <Button
//   //             title="login with biometric"
//   //             color="black"
//   //             onPress={HandleBiometricAuth}
//   //           />
//   //         </TouchableHighlight>
//   //         <StatusBar style="auto" />
//   //       </View>
//   //     </SafeArea>
//   //   );

//   return (
//     <AppScreen>
//       <Text>Fingerprint</Text>
//     </AppScreen>
//   );
// };

// export default Fingerprint;

// const styles = StyleSheet.create({});

import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  TouchableHighlight,
  Alert,
  StatusBar as RnStatusBar,
} from "react-native";
import * as LocalAuthentication from "expo-local-authentication";

export default function Fingerprint() {
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);

  // Check if hardware supports biometrics
  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);
    })();
  });

  const fallBackToDefaultAuth = () => {
    console.log(
      "Wrong fingerprint has given fall back to password authentication"
    );
  };

  const alertComponent = (title, mess, btnTxt, btnFunc) => {
    return Alert.alert(title, mess, [
      {
        text: btnTxt,
        onPress: btnFunc,
      },
    ]);
  };

  const handleBiometricAuth = async () => {
    // Check if hardware supports biometrics
    const isBiometricAvailable = await LocalAuthentication.hasHardwareAsync();

    // Fallback to default authentication method (password) if Fingerprint is not available
    if (!isBiometricAvailable)
      return alertComponent(
        "Please enter your password",
        "Biometric Authentication not supported",
        "OK",
        () => fallBackToDefaultAuth()
      );

    // Check Biometrics types available (Fingerprint, Facial recognition, Iris recognition)
    let supportedBiometrics;
    if (isBiometricAvailable)
      supportedBiometrics =
        await LocalAuthentication.supportedAuthenticationTypesAsync();

    // Check Biometrics are saved locally in user's device
    const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
    if (!savedBiometrics)
      return alertComponent(
        "Biometric record not found",
        "Please login with your password",
        "OK",
        () => fallBackToDefaultAuth()
      );

    // Authenticate use with Biometrics (Fingerprint, Facial recognition, Iris recognition)
    const biometricAuth = await LocalAuthentication.authenticateAsync({
      promptMessage: "Login with Biometrics",
      cancelLabel: "Cancel",
      disableDeviceFallback: false,
    });
    // Log the user in on success
    if (biometricAuth) console.log("success", biometricAuth);

    console.log({ isBiometricAvailable });
    console.log({ supportedBiometrics });
    console.log({ savedBiometrics });
    console.log({ biometricAuth });
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>
          {isBiometricSupported
            ? "Your device is compatible with Biometrics"
            : "Face or Fingerprint scanner is available on this device"}
        </Text>

        <TouchableHighlight
          style={{
            height: 60,
          }}
        >
          <Button
            title="Login with Biometrics"
            color="#fe7005"
            onPress={handleBiometricAuth}
          />
        </TouchableHighlight>

        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: RnStatusBar.currentHeight,
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
