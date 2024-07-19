import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login() {
  const navigation = useNavigation();
  const [busnumber, setBusNumber] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
   
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
       
        navigation.navigate('Tab');
      } else {
        setLoading(false); 
      }
    };
    checkToken();
  }, []);

  const logg = () => {
    // console.log(busnumber, password);
    const userData = {
      BusNumber: busnumber,
      password: password,
    };

    axios.post("http://192.168.1.6:5000/api/auth/Login", userData)
      .then(res => {
        console.log(res.data);
        if (res.data.status === "ok") {
          Alert.alert("Logged in successfully");
          AsyncStorage.setItem('token', res.data.data);
          navigation.navigate('Tab');
        }
      })
      .catch(error => {
        console.error(error);
        Alert.alert("Login failed", "Invalid bus number or password.");
      });
  };

  const signUp = () => {
    navigation.navigate("signUp");
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={["rgba(230,811,0,1)", "rgba(230,81,0,8)"]}
        style={{ flex: 1 }}
      >
        <StatusBar hidden />
        <View style={styles.header}>
          <Text style={styles.hedTitel}>Login</Text>
          <Text style={styles.subhedTitel}>
            Please register to create a new account
          </Text>
        </View>
        <View style={styles.footer}>
          <Text>Login</Text>
          <View style={styles.action}>
            <Feather
              name="user"
              size={24}
              color="black"
              style={styles.smallIcon}
            />
            <TextInput
              placeholder="Bus Number eg NC-3535"
              style={styles.textInput}
              onChange={e => setBusNumber(e.nativeEvent.text)}
            />
          </View>
          <Text>Login</Text>
          <View style={styles.action}>
            <Entypo
              name="lock"
              size={24}
              color="black"
              style={styles.smallIcon}
            />
            <TextInput
              secureTextEntry
              placeholder="Password"
              style={styles.textInput}
              onChange={e => setPassword(e.nativeEvent.text)}
            />
          </View>
          <TouchableOpacity onPress={signUp}>
            <View style={{
              justifyContent: 'flex-end',
              alignItems: "flex-end",
              marginTop: 8,
              marginRight: 10,
            }}>
              <Text style={{ fontWeight: 700, fontSize: 16, color: "gray" }}>
                Don't have an account?
              </Text>
            </View>
          </TouchableOpacity>
          <View style={styles.button}>
            <TouchableOpacity onPress={logg} style={styles.inBut}>
              <View>
                <Text style={styles.textSign}>Login</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
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
  footer: {
    flex: 3,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  hedTitel: {
    fontSize: 33,
  },
  subhedTitel: {
    fontSize: 20,
    textAlign: "center",
    marginVertical: 10,
  },
  inputheadder: {
    marginVertical: 4,
    textTransform: "uppercase",
    fontSize: 20,
  },
  smallIcon: {
    marginTop: -10,
    marginRight: 20,
    fontSize: 24,
  },
  action: {
    flexDirection: "row",
    paddingTop: 18,
    paddingBottom: 5,
    marginTop: 15,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#420475",
    borderRadius: 10,
  },
  textInput: {
    flex: 1,
    marginTop: -12,
    color: "#05375a",
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  inBut: {
    width: '70%',
    backgroundColor: '#ECED04',
    alignItems: 'center',
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
