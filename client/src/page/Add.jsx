// import React, { useState, useLayoutEffect } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   ScrollView,
//   TouchableOpacity,
//   Alert,
// } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import axios from "axios";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// export default function Add() {
//   const navigation = useNavigation();

//   useLayoutEffect(() => {
//     navigation.setOptions({
//       headerShown: true,
//       title: "MOVELK",
//       headerTitleStyle: {
//         color: "white",
//         fontSize: 20,
//         fontWeight: "bold",
//         paddingHorizontal: "35%",
//       },
//       headerStyle: {
//         backgroundColor: "#FED339",
//         height: 100,
//       },
//     });
//   }, [navigation]);

//   const [busName, setBusName] = useState("");
//   const [To, setTo] = useState("");
//   const [where, setWhere] = useState("");
//   const [Arr, setArr] = useState("");
//   const [Dep, setDEp] = useState("");
//   const [NeArr, setNeArr] = useState("");
//   const [NeDep, setNeDep] = useState("");

//   const handleAddRoute = async () => {
//     try {
//       const token = await AsyncStorage.getItem("token");
//       if (!token) {
//         Alert.alert("Error", "No authentication token found");
//         return;
//       }

//       const response = await axios.post(
//         "http://192.168.1.6:5000/api/auth/createRoute",
//         {
//           Busname: busName,
//           To,
//           where,
//           arrival: Arr,
//           departure: Dep,
//           Nextarrival: NeArr,
//           Nextdeparture: NeDep,
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//             "auth-token": token,
//           },
//         }
//       );

//       if (response.status === 200) {
//         Alert.alert("Success", "Route created successfully");
//         console.log(token);
        
//         // Clear the input fields
//         setBusName("");
//         setTo("");
//         setWhere("");
//         setArr("");
//         setDEp("");
//         setNeArr("");
//         setNeDep("");
//       } else {
//         Alert.alert("Error", response.data.error || "Failed to create route");
//       }
//     } catch (error) {
//       console.error("Error creating route:", error);
//       Alert.alert(
//         "Error",
//         error.response?.data?.error || "An unexpected error occurred"
//       );
//     }
//   };

//   return (
//     <View>
//       <ScrollView>
//         <View style={styles.header}>
//           <Text style={styles.subhedTitel}>Add Bus Route</Text>
//         </View>
//         <View style={styles.container}>
//           <View style={styles.action}>
       
//             <TextInput
//               placeholder="Bus Name"
//               value={busName}
//               onChange={(e) => setBusName(e.nativeEvent.text)}
//               style={styles.textInput}
//             />
//           </View>
//           <View style={styles.action}>
//             <TextInput
//               placeholder="TO"
//               value={To}
//               onChange={(e) => setTo(e.nativeEvent.text)}
//               style={styles.textInput}
//             />
//             <TextInput
//               placeholder="Where"
//               value={where}
//               onChange={(e) => setWhere(e.nativeEvent.text)}
//               style={styles.textInput}
//             />
//           </View>
//           <View style={styles.action}>
//             <TextInput
//               placeholder="Arrival time"
//               value={Arr}
//               onChange={(e) => setArr(e.nativeEvent.text)}
//               style={styles.textInput}
//             />
//             <TextInput
//               placeholder="Depart time"
//               value={Dep}
//               onChange={(e) => setDEp(e.nativeEvent.text)}
//               style={styles.textInput}
//             />
//           </View>
//           <View style={styles.action}>
//             <TextInput
//               placeholder="Next Arrival time"
//               value={NeArr}
//               onChange={(e) => setNeArr(e.nativeEvent.text)}
//               style={styles.textInput}
//             />
//             <TextInput
//               placeholder="Next Depart time"
//               value={NeDep}
//               onChange={(e) => setNeDep(e.nativeEvent.text)}
//               style={styles.textInput}
//             />
//           </View>
//         </View>

//         <View style={styles.button}>
//           <TouchableOpacity onPress={handleAddRoute} style={styles.inBut}>
//             <View>
//               <Text style={styles.textSign}>ADD</Text>
//             </View>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   header: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     paddingHorizontal: 20,
//     paddingBottom: 4,
//   },
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     padding: 16,
//   },
//   action: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginBottom: 16,
//     paddingBottom: 5,
//     marginTop: 15,
//     margin: 10,
//   },
//   textInput: {
//     flex: 1,
//     height: 40,
//     borderColor: "gray",
//     borderWidth: 1,
//     marginHorizontal: 5,
//     paddingHorizontal: 10,
//     borderRadius: 8,
//   },
//   inBut: {
//     width: "70%",
//     backgroundColor: "#ECED04",
//     alignItems: "center",
//     paddingHorizontal: 15,
//     paddingVertical: 15,
//     borderRadius: 8,
//   },
//   button: {
//     alignItems: "center",
//     marginTop: 20,
//     textAlign: "center",
//     margin: 20,
//   },
//   hedTitel: {
//     fontSize: 33,
//   },
//   subhedTitel: {
//     fontSize: 20,
//     textAlign: "center",
//     marginVertical: 10,
//   },
// });


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
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TextInput as PaperTextInput, Provider as PaperProvider, DefaultTheme } from "react-native-paper";

// Custom theme to override TextInput styles
const customTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    // Outline color for the text input
    placeholder: '#a1a1a1', // Placeholder text color
    text: '#000', // Text color
    accent: '#ECED04', // Color for the underline when focused
    label: '#000', // Example label color (Tomato)
  },
  roundness: 8,
};

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

  const handleAddRoute = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (!token) {
        Alert.alert("Error", "No authentication token found");
        return;
      }

      const response = await axios.post(
        "http://192.168.1.6:5000/api/auth/createRoute",
        {
          Busname: busName,
          To,
          where,
          arrival: Arr,
          departure: Dep,
          Nextarrival: NeArr,
          Nextdeparture: NeDep,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "auth-token": token,
          },
        }
      );

      if (response.status === 200) {
        Alert.alert("Success", "Route created successfully");
        
        // Clear the input fields
        setBusName("");
        setTo("");
        setWhere("");
        setArr("");
        setDEp("");
        setNeArr("");
        setNeDep("");
      } else {
        Alert.alert("Error", response.data.error || "Failed to create route");
      }
    } catch (error) {
      console.error("Error creating route:", error);
      Alert.alert(
        "Error",
        error.response?.data?.error || "An unexpected error occurred"
      );
    }
  };

  return (
    <PaperProvider theme={customTheme}>
      <View>
        <ScrollView>
          <View style={styles.header}>
            <Text style={styles.subhedTitel}>Add Bus Route</Text>
          </View>
          <View style={styles.container}>
            <View style={styles.action}>
              <PaperTextInput
                label="Bus Name"
                value={busName}
                onChangeText={text => setBusName(text)}
                style={styles.textInput}
                
              />
            </View>
            <View style={styles.action}>
              <PaperTextInput
                label="TO"
                value={To}
                onChangeText={text => setTo(text)}
                style={styles.textInput}
                
              />
              <PaperTextInput
                label="Where"
                value={where}
                onChangeText={text => setWhere(text)}
                style={styles.textInput}
              
              />
            </View>
            <View style={styles.action}>
              <PaperTextInput
                label="Arrival time"
                value={Arr}
                onChangeText={text => setArr(text)}
                style={styles.textInput}
                
              />
              <PaperTextInput
                label="Depart time"
                value={Dep}
                onChangeText={text => setDEp(text)}
                style={styles.textInput}
                
              />
            </View>
            <View style={styles.action}>
              <PaperTextInput
                label="Next Arrival time"
                value={NeArr}
                onChangeText={text => setNeArr(text)}
                style={styles.textInput}
                
              />
              <PaperTextInput
                label="Next Depart time"
                value={NeDep}
                onChangeText={text => setNeDep(text)}
                style={styles.textInput}
                
              />
            </View>
          </View>

          <View style={styles.button}>
            <TouchableOpacity onPress={handleAddRoute} style={styles.inBut}>
              <View>
                <Text style={styles.textSign}>ADD</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </PaperProvider>
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
    marginHorizontal: 5,
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
