import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useRef, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Textarea from "react-native-textarea";

export default function SpecaiBus() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "MOVELK",
      headerTitleStyle: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        paddingHorizontal: "35%",
      },
      headerStyle: {
        backgroundColor: "#FED339",
        height: 100,
      },
    });
  }, [navigation]);

  const [Oname, setOName] = useState("");
  const [busName, setBusName] = useState("");
  const [location, setblocation] = useState("");
  const [phone, setPhone] = useState("");
  const [Des, setDes] = useState("");

  return (
    <View>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.subhedTitel}>Add Bus Route</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.action}>
            <TextInput
              placeholder="BUS NAME"
              value={busName}
              onChange={(e) => setBusName(e.nativeEvent.text)}
              style={styles.textInput}
            />
          </View>
          <View style={styles.action}>
            <TextInput placeholder="OWNER NAME" 
            value={Oname}
              onChange={e => setOName(e.nativeEvent.text)}
            style={styles.textInput} />
          </View>
          <View style={styles.action}>
            <TextInput placeholder="LOCATION" 
            value={location}
              onChange={e => setblocation(e.nativeEvent.text)}
            style={styles.textInput} />
          </View>
          <View style={styles.action}>
            <TextInput placeholder="PHONE NUMBER" style={styles.textInput}  value={phone} onChange={e => setPhone(e.nativeEvent.text)}/>
          </View>
          <View style={styles.container}>
            <Textarea
              containerStyle={styles.textareaContainer}
              style={styles.textarea}
              maxLength={120}
              value={Des}
              onChange={e => setDes(e.nativeEvent.text)}
              placeholder="description"
              placeholderTextColor="gray"
            />
          </View>
        </View>

        <View style={styles.button}>
          <TouchableOpacity style={styles.inBut}>
            <View>
              <Text style={styles.textSign}>ADD</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 4,
  },

  textareaContainer: {
    height: 180,
    padding: 5,

    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
  },
  textarea: {
    textAlignVertical: "top", // hack android
    height: 170,
    fontSize: 14,
    color: "#333",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  action: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
    paddingBottom: 5,
    marginTop: 15,
    margin: 10,
  },
  textInput: {
    flex: 1,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginHorizontal: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  inBut: {
    width: "70%",
    backgroundColor: "#ECED04",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 8,
  },
  button: {
    alignItems: "center",
    marginTop: 20,
    alignItems: "center",
    textAlign: "center",
    margin: 20,
  },
  hedTitel: {
    fontSize: 33,
  },
  subhedTitel: {
    fontSize: 20,
    textAlign: "center",
    marginVertical: 10,
  },
});
