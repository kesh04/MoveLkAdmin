
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

export default function Add() {
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

 
  const [busName, setBusName] = useState("");
  const [To, setTo] = useState("");
  const [where, setWhere] = useState("");
  const [Arr, setArr] = useState("");
  const [Dep, setDEp] = useState("");
  const [NeArr, setNeArr] = useState("");
  const [NeDep, setNeDep] = useState("");

  return (
    <View>
      <ScrollView>
      <View style={styles.header}>
        <Text style={styles.subhedTitel}>
           Add Bus Route
        </Text>
      </View>
      <View style={styles.container}>
      <View style={styles.action}>
        <TextInput placeholder="Bus Name"  value={busName}  onChange={e => setBusName(e.nativeEvent.text)} style={styles.textInput} />
    
      </View>
      <View style={styles.action}>
        <TextInput placeholder="TO"   value={To}  onChange={e => setTo(e.nativeEvent.text)} style={styles.textInput} />
        <TextInput placeholder="Where"   value={where}  onChange={e => setWhere(e.nativeEvent.text)} style={styles.textInput} />
      </View>
      <View style={styles.action}>
        <TextInput placeholder="Arrival time"   value={Arr}  onChange={e => setArr(e.nativeEvent.text)} style={styles.textInput} />
        <TextInput placeholder="Depart time"  value={Dep}  onChange={e => setDEp(e.nativeEvent.text)}  style={styles.textInput} />
      </View>
      <View style={styles.action}>
        <TextInput placeholder="Next Arrival time"   value={NeArr}  onChange={e => setNeArr(e.nativeEvent.text)} style={styles.textInput} />
        <TextInput placeholder="Next Depart time"   value={NeDep}  onChange={e => setNeDep(e.nativeEvent.text)} style={styles.textInput} />
      </View>
    </View>



  <View style={styles.button}>
            <TouchableOpacity  style={styles.inBut}>
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
 


container: {
  flex: 1,
  justifyContent: 'center',
  padding: 16,
},
action: {
  flexDirection: 'row', // Align items in a row
  justifyContent: 'space-between', // Space out items evenly
  marginBottom: 16,
  paddingBottom: 5,
  marginTop: 15,
  margin:10, 
},
textInput: {
  flex: 1,
  height: 40,
  borderColor: 'gray',
  borderWidth: 1,
  marginHorizontal: 5, // Add some horizontal margin between inputs
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
