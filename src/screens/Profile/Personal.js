import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import AppScreen from "../../Utils/AppScreen";
import {
  Box,
  Button,
  Center,
  HStack,
  Image,
  Input,
  Modal,
  Popover,
  ScrollView,
  Stack,
} from "native-base";
import Feather from "react-native-vector-icons/Feather";

const Personal = ({ navigation }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <AppScreen>
      <HStack mt={5} justifyContent="space-between">
        <TouchableOpacity onPress={() => setShowModal(true)}>
          <Feather
            name="x"
            style={{ fontSize: 20, fontWeight: "bold", color: "#222222" }}
          />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#222222" }}>
          Personal Info
        </Text>
        <Text></Text>
      </HStack>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>
            <Text style={styles.text1}> Discard changes</Text>
          </Modal.Header>
          <Modal.Body>
            {/* <Center> */}
            <Text>Are you sure you want to discard the changes you made?</Text>
            {/* </Center> */}
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setShowModal(false);
                }}
              >
                No thanks
              </Button>
              <Button
                colorScheme="danger"
                onPress={() => {
                  setShowModal(false);
                  navigation.goBack();
                }}
              >
                Discard
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>

      <HStack alignItems="center" mt={5} pt={5}>
        <TouchableOpacity>
          <Popover
            trigger={(triggerProps) => {
              return (
                <Button {...triggerProps} m={0} p={0} borderRadius={100}>
                  <Image
                    borderRadius={100}
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
                </Button>
              );
            }}
          >
            <Popover.Content accessibilityLabel="Delete Customerd" w="80">
              <Popover.Arrow />
              <Popover.CloseButton />
              <Popover.Header>Change</Popover.Header>
              <Popover.Body>
                <Center>
                  <Text style={styles.text}>Choose from Photos</Text>
                  <Text style={styles.text}>Open Camera</Text>
                </Center>
              </Popover.Body>
            </Popover.Content>
          </Popover>
        </TouchableOpacity>

        <Box px={5}>
          <Text style={styles.header_title}>Dihan abir</Text>
          <Text style={styles.header_email}>nahid.muradabir@gmai.com</Text>
        </Box>
      </HStack>

      <ScrollView showsHorizontalScrollIndicator={false} mt={5}>
        <Stack space={4} w="100%">
          <Input size="2xl" placeholder="Name" />
          <Input size="2xl" placeholder="Email/phone number" />
          <Input size="2xl" placeholder="Password" />
          <Input size="2xl" placeholder="Occupattion" />
          <Input size="2xl" placeholder="Age" />
          <Input size="2xl" placeholder="Salary" />
          <Input size="2xl" placeholder="Earning source" />
          <Input size="2xl" placeholder="Family members" />
          <Input size="2xl" placeholder="Personal Interests" />
        </Stack>
      </ScrollView>
    </AppScreen>
  );
};

export default Personal;

const styles = StyleSheet.create({
  text: {
    paddingHorizontal: 10,
    borderColor: "#38E5C6",
    borderWidth: 1,
    width: "80%",
    marginTop: 5,
    borderRadius: 4,
    textAlign: "center",
    padding: 4,
    color: "#38E5C6",
    // backgroundColor
  },

  header_title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  header_margin: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 60,
    marginBottom: 40,
  },
  header_email: {
    color: "#9D9D9D",
  },
  text1: {
    color: "#38E5C6",
    fontSize: 16,
    fontWeight: "bold",
  },
});
