import { View, Text, TouchableOpacity, Alert, ScrollView } from "react-native";
import React, {  useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Profile() {
  const navigation = useNavigation();
  const [users, setUsers] = useState('');

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

  async function getdata (){
    const token = await AsyncStorage.getItem('token')
    // console.log(token);
    axios.post("http://192.168.1.6:5000/api/auth/user", {token:token})
    .then(res=> { 
      // console.log(res.data)
         setUsers(res.data.data)
    })
    }
    useEffect(()=>{
          getdata();
         },[])

         const handleLogout = async () => {
          Alert.alert(
            "Log Out",
            "Are you sure you want to log out?",
            [
              {
                text: "Cancel",
                style: "cancel"
              },
              {
                text: "OK",
                onPress: async () => {
                  const token = await AsyncStorage.getItem('token');
                  await axios.post("http://192.168.1.6:5000/api/auth/logout", { token });
                  await AsyncStorage.removeItem('token');
                  navigation.navigate('Login');
                }
              }
            ]
          );
        };
        
  const handleDeleteAccount = async () => {
    Alert.alert(
      "Delete Account",
      "Are you sure you want to delete your account? This action cannot be undone.",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Delete",
          onPress: async () => {
            const token = await AsyncStorage.getItem('token');
            axios.post("http://192.168.1.6:5000/api/auth/deleteUser", { token })
              .then(async res => {
                if (res.data.status === "ok") {
                  await AsyncStorage.removeItem('token');
                  navigation.navigate('Login');
                  Alert.alert("Account deleted successfully");
                }
              })
              .catch(error => {
                console.error(error);
                Alert.alert("Failed to delete account");
              });
          }
        }
      ]
    );
  };
  return (
    <ScrollView>
      <View style={{ marginHorizontal: 20, marginTop: 10, rowGap: 10 }}>
        <Text style={{textAlign:"center", fontSize:25,textTransform:"uppercase"}}>Account Settings</Text>
        <View
          style={{
            marginHorizontal: 20,
            marginTop: 20,
            borderRadius: 10,
            borderColor: "#FED339",
            borderWidth: 0,
            paddingVertical: 10,
            backgroundColor: "#FED339",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon
            name="user"
            size={20}
            color="black"
            style={{ marginRight: 20 }}
          />
          <Text
            style={{
              fontSize: 20,
              color: "black",
              marginRight: 20,
            }}
          >
          {users.UserName}
          </Text>
        </View>
        <View
          style={{
            marginHorizontal: 20,
            marginTop: 20,
            borderRadius: 10,
            borderColor: "#FED339",
            borderWidth: 0,
            paddingVertical: 10,
            backgroundColor: "#FED339",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon
            name="bus"
            size={20}
            color="black"
            style={{ marginRight: 20 }}
          />
          <Text
            style={{
              fontSize: 20,
              color: "black",
              marginRight: 20,
            }}
          >
            {users.Busname}
          </Text>
        </View>
        <View
          style={{
            marginHorizontal: 20,
            marginTop: 20,
            borderRadius: 10,
            borderColor: "#FED339",
            borderWidth: 0,
            paddingVertical: 10,
            backgroundColor: "#FED339",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon
            name="id-card"
            size={20}
            color="black"
            style={{ marginRight: 20 }}
          />
          <Text
            style={{
              fontSize: 20,
              color: "black",
              marginRight: 20,
            }}
          >
            {users.BusNumber}
          </Text>
        </View>
        <View
          style={{
            marginHorizontal: 20,
            marginTop: 20,
            borderRadius: 10,
            borderColor: "#FED339",
            borderWidth: 0,
            paddingVertical: 10,
            backgroundColor: "#FED339",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon
            name="phone"
            size={20}
            color="black"
            style={{ marginRight: 20 }}
          />
          <Text
            style={{
              fontSize: 20,
              color: "black",
              marginRight: 20,
            }}
          >
             {users.Phone}
          </Text>
        </View>

        <TouchableOpacity
          onPress={handleDeleteAccount}
          style={{
            marginHorizontal: 20,
            marginTop: 20,
            borderRadius: 10,
            borderColor: "#FED339",
            borderWidth: 0,
            paddingVertical: 10,
            backgroundColor: "#FED339",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon
            name="trash-o"
            size={20}
            color="black"
            style={{ marginRight: 20 }}
          />
          <Text
            style={{
              fontSize: 20,
              color: "black",
              marginRight: 20,
              
            }}
          >
            Delete Account
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleLogout}
          style={{
            marginHorizontal: 20,
            marginTop: 20,
            borderRadius: 10,
            borderColor: "#FED339",
            borderWidth: 0,
            paddingVertical: 10,
            backgroundColor: "#FED339",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon
            name="sign-out"
            size={20}
            color="black"
            style={{ marginRight: 20 }}
          />
          <Text
            style={{
              fontSize: 20,
              color: "black",
              marginRight: 20,
            
            }}
          >
            Log Out
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
