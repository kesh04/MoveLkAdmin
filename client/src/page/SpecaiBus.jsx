import React, { useState, useLayoutEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TextInput as PaperTextInput } from "react-native-paper";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const [Des, setDes] = useState("");

  const handleAddBus = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (!token) {
        Alert.alert("Error", "No authentication token found");
        return;
      }

      const response = await axios.post(
        "http://192.168.1.6:5000/api/auth/addBus",
        {
          Busname: busName,
          OwnerName: Oname,
          Phone: phone,
          location,
          descripe: Des,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "auth-token": token,
          },
        }
      );

      if (response.status === 200) {
        Alert.alert("Success", "Bus added successfully");
        // Clear input fields after successful addition


        console.log(token);
        
        setOName("");
        setBusName("");
        setLocation("");
        setPhone("");
        setDes("");
      } else {
        Alert.alert("Error", response.data.error || "Failed to add bus");
      }
    } catch (error) {
      console.error("Error adding bus:", error);
      Alert.alert(
        "Error",
        error.response?.data?.error || "An unexpected error occurred"
      );
    }
  };

  return (
    <View>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.subhedTitel}>Add Bus</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.action}>
            <PaperTextInput
              label="BUS NAME"
              value={busName}
              onChangeText={text => setBusName(text)}
              style={styles.textInput}
            />
          </View>
          <View style={styles.action}>
            <PaperTextInput
              label="OWNER NAME"
              value={Oname}
              onChangeText={text => setOName(text)}
              style={styles.textInput}
            />
          </View>
          <View style={styles.action}>
            <PaperTextInput
              label="LOCATION"
              value={location}
              onChangeText={text => setLocation(text)}
              style={styles.textInput}
            />
          </View>
          <View style={styles.action}>
            <PaperTextInput
              label="PHONE NUMBER"
              value={phone}
              onChangeText={text => setPhone(text)}
              style={styles.textInput}
            />
          </View>
          <View style={styles.container}>
            <PaperTextInput
              label="DESCRIPTION"
              multiline
              numberOfLines={3}
              value={Des}
              onChangeText={text => setDes(text)}
              style={styles.textarea}
              maxLength={120}
              mode="outlined"
            />
          </View>
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={handleAddBus} style={styles.inBut}>
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
  textarea: {
    textAlignVertical: "top",
    fontSize: 14,
    color: "#333",
    backgroundColor: "#f0f0f0",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  action: {
    marginBottom: 16,
    marginTop: 15,
    margin: 10,
  },
  textInput: {
    height: 40,
    marginVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: "#f0f0f0",
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
    margin: 20,
  },
  subhedTitel: {
    fontSize: 20,
    textAlign: "center",
    marginVertical: 10,
  },
});
 