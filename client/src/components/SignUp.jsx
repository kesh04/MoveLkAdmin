// // import { 
// //   View, 
// //   Text, 
// //   SafeAreaView, 
// //   StyleSheet, 
// //   TextInput, 
// //   Keyboard, 
// //   TouchableWithoutFeedback, 
// //   TouchableOpacity, 
// //   Alert
// // } from "react-native";
// // import React, { useState, useRef } from "react";
// // import { LinearGradient } from "expo-linear-gradient";
// // import { StatusBar } from "expo-status-bar";
// // import Icon from "@expo/vector-icons/FontAwesome";
// // import { Entypo } from "@expo/vector-icons";
// // import Error from "react-native-vector-icons/MaterialIcons";
// // import { Feather } from "@expo/vector-icons";
// // import { FontAwesome5 } from "@expo/vector-icons";
// // import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
// // import { useNavigation } from "@react-navigation/native";
// // import axios from "axios"
// // export default function SignUp() {
// //   const navigation = useNavigation();

// //   const [name, setName] = useState("");
// //   const [busName, setBusName] = useState("");
// //   const [busnumber, setbusnumber] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [phone, setPhone] = useState("");

// //   const [nameVerify, setNameVerify] = useState(false);
// //   const [busNameVerify, setBusNameVerify] = useState(false);
// //   const [busnumberlVerify, setbusnumberVerify] = useState(false);
// //   const [passwordVerify, setPasswordVerify] = useState(false);
// //   const [phoneVerify, setPhoneVerify] = useState(false);
// //   const  [pwshow, setPwshow] = useState(false)
   
// //   const nameInputRef = useRef(null);
// //   const busNameInputRef = useRef(null);
// //   const busnumberInputRef = useRef(null);
// //   const passwordInputRef = useRef(null);
// //   const phoneInputRef = useRef(null);

// //   const handleNameChange = (text) => {
// //     setName(text);
// //     setNameVerify(text.length > 1);
// //   };

// //   const handleBusNameChange = (text) => {
// //     setBusName(text);
// //     setBusNameVerify(text.length > 1);
// //   };

// //   const handleEmailChange = (text) => {
// //     setbusnumber(text);
// //     setbusnumberVerify(text.length > 1);
// //   };

// //   const handlePasswordChange = (text) => {
// //     setPassword(text);
// //     setPasswordVerify(text.length > 5);  
// //   };

// //   const handlePhoneChange = (text) => {
// //     const phoneVar = text.replace(/[^0-9]/g, '');
// //     setPhone(phoneVar);
// //     setPhoneVerify(/^\d{10}$/.test(phoneVar));
// //   };

// //   const handleSignUp = () => {
// //     const userData= {
// //       UserName: name,
// //       Busname: busName,
// //       BusNumber: busnumber,
// //       password: password,
// //       Phone: phone,
// //     }
// //     if (nameVerify && busNameVerify && busnumberlVerify && passwordVerify && phoneVerify) {
// //       axios.post("http://192.168.1.6:5000/api/auth/register",userData)
// //       .then((res)=>{console.log(res.data)

// //         if(res.data.status === "ok"){
// //           Alert.alert("Registration Succfull")
// //           navigation.navigate("Login");
// //         }
// //         else{
// //           Alert.alert(JSON.stringify(res.data))
// //         }
// //       })
// //       .catch(e=>console.log(e)) 
// //     }
// //     else{
// //       Alert.alert("Fill datails ")
// //     }
// //   };


// //   const handleLogin = () => {
// //     navigation.navigate("Login");
// //   };

// //   return (
// //     <SafeAreaView style={{ flex: 1 }}>
// //       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
// //         <LinearGradient
// //          colors={["rgba(230,811,0,1)", "rgba(230,81,0,8)"]}
// //           style={{ flex: 1 }}
// //         >
// //           <StatusBar hidden />
// //           <View style={styles.header}>
// //             <Text style={styles.hedTitel}>Register</Text>
// //             <Text style={styles.subhedTitel}>
// //               Please register to create new account
// //             </Text>
// //           </View>
// //           <View style={styles.footer}>
// //             <KeyboardAwareScrollView showsHorizontalScrollIndicator={false}>
// //               <View style={styles.action}>
// //                 <Feather name="user" size={24} color="black" style={styles.smallIcon} />
// //                 <TextInput
// //                   placeholder="Full Name"
// //                   style={styles.textInput}
// //                   returnKeyType="next"
// //                   blurOnSubmit={false}
// //                   value={name}
// //                   onChangeText={handleNameChange}
// //                   ref={nameInputRef}
// //                   onSubmitEditing={() => busNameInputRef.current.focus()}
// //                 />
// //                 {name.length > 0 && (nameVerify ? (
// //                   <Feather name="check-circle" size={20} color="green" style={{ marginTop: -10 }} />
// //                 ) : (
// //                   <Error name="error" color="red" size={20} style={{ marginTop: -10 }} />
// //                 ))}
// //               </View>
// //               {name.length > 0 && !nameVerify && (
// //                 <Text style={{ marginLeft: 20, color: "red" }}>
// //                   Name should be more than 1 character
// //                 </Text>
// //               )}

// //               <View style={styles.action}>
// //                 <FontAwesome5 name="bus" color="black" style={styles.smallIcon} />
// //                 <TextInput
// //                   placeholder="Bus Name"
// //                   style={styles.textInput}
// //                   returnKeyType="next"
// //                   blurOnSubmit={false}
// //                   value={busName}
// //                   onChangeText={handleBusNameChange}
// //                   ref={busNameInputRef}
// //                   onSubmitEditing={() => busnumberInputRef.current.focus()}
// //                 />
// //                 {busName.length > 0 && (busNameVerify ? (
// //                   <Feather name="check-circle" size={20} color="green" style={{ marginTop: -10 }} />
// //                 ) : (
// //                   <Error name="error" color="red" size={20} style={{ marginTop: -10 }} />
// //                 ))}
// //               </View>
// //               {busName.length > 0 && !busNameVerify && (
// //                 <Text style={{ marginLeft: 20, color: "red" }}>
// //                   Name should be more than 1 character
// //                 </Text>
// //               )}

// //               <View style={styles.action}>
// //                 <Icon name="envelope-o" color="black" style={styles.smallIcon} />
// //                 <TextInput
// //                   placeholder="Bus Number"
// //                   style={styles.textInput}
// //                   keyboardType="text"
// //                   returnKeyType="next"
// //                   blurOnSubmit={false}
// //                   value={busnumber}
// //                   onChangeText={handleEmailChange}
// //                   ref={busnumberInputRef}
// //                   onSubmitEditing={() => passwordInputRef.current.focus()}
// //                 />
// //                   {busnumber.length > 0 && (busnumberlVerify ? (
// //                   <Feather name="check-circle" size={20} color="green" style={{ marginTop: -10 }} />
// //                 ) : (
// //                   <Error name="error" color="red" size={20} style={{ marginTop: -10 }} />
// //                 ))}
// //               </View>
// //               {busnumber.length > 0 && ! busnumberlVerify && (
// //                 <Text style={{ marginLeft: 20, color: "red" }}>
// //                   Plase enter valid Bus Nubmer 
// //                 </Text>
// //               )}

// //               <View style={styles.action}>
// //                 <Entypo name="lock" size={24} color="black" style={styles.smallIcon} />
// //                 <TextInput
// //                   placeholder="Password"
// //                   style={styles.textInput}
// //                   secureTextEntry={pwshow}
// //                   returnKeyType="next"
// //                   blurOnSubmit={false}
// //                   value={password}
// //                   onChangeText={handlePasswordChange}
// //                   ref={passwordInputRef}
// //                   onSubmitEditing={() => phoneInputRef.current.focus()}
// //                 />
// //                 <TouchableOpacity onPress={()=>setPwshow(!pwshow)}>
// //                 {password.length <1 ? null : !pwshow ? (
// //                   <Feather name="eye" size={20} color="green" style={{ marginTop: -10,marginRight: -5 }} />
// //                 ) : (
// //                   <Feather name="eye-off" size={20} color="green" style={{ marginTop: -10 , marginRight: -5,}} />
// //                 )}
// //                 </TouchableOpacity>
              
// //               </View>
// //               {password.length > 0 && !passwordVerify && (
// //                 <Text style={{ marginLeft: 20, color: "red" }}>
// //                   Password should be more than 5 characters
// //                 </Text>
// //               )}

// //               <View style={styles.action}>
// //                 <Feather name="smartphone" color="black" style={styles.smallIcon} />
// //                 <TextInput
// //                   placeholder="Phone Number"
// //                   style={styles.textInput}
// //                   keyboardType="numeric"
// //                   returnKeyType="done"
// //                   blurOnSubmit={false}
// //                   value={phone}
// //                   onChangeText={handlePhoneChange}
// //                   maxLength={10}
// //                   ref={phoneInputRef}
// //                   onSubmitEditing={Keyboard.dismiss}
// //                 />
// //                 {phone.length > 0 && (phoneVerify ? (
// //                   <Feather name="check-circle" size={20} color="green" style={{ marginTop: -10 }} />
// //                 ) : (
// //                   <Error name="error" color="red" size={20} style={{ marginTop: -10 }} />
// //                 ))}
// //               </View>
// //               {phone.length > 0 && !phoneVerify && (
// //                 <Text style={{ marginLeft: 20, color: "red" }}>
// //                   Phone number must be exactly 10 digits
// //                 </Text>
// //               )}

// //               <TouchableOpacity onPress={handleLogin}>
// //                 <View style={{ justifyContent: "flex-end", alignItems: "flex-end", marginTop: 8, marginRight: 10 }}>
// //                   <Text style={{ fontWeight: '700', fontSize: 16, color: "gray" }}>
// //                     Already have an account?
// //                   </Text>
// //                 </View>
// //               </TouchableOpacity>
              
// //               <View style={styles.button}>
// //                 <TouchableOpacity onPress={handleSignUp} style={styles.inBut}>
// //                   <View>
// //                     <Text style={styles.textSign}>Sign Up</Text>
// //                   </View>
// //                 </TouchableOpacity>
// //               </View>
// //             </KeyboardAwareScrollView>
// //           </View>
// //         </LinearGradient>
// //       </TouchableWithoutFeedback>
// //     </SafeAreaView>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   header: {
// //     flex: 1,
// //     justifyContent: "center",
// //     alignItems: "center",
// //     paddingHorizontal: 20,
// //     paddingBottom: 4,
// //   },
// //   footer: {
// //     flex: 3,
// //     backgroundColor: "white",
// //     borderTopLeftRadius: 30,
// //     borderTopRightRadius: 30,
// //     paddingHorizontal: 20,
// //     paddingVertical: 30,
// //   },
// //   hedTitel: {
// //     fontSize: 33,
// //   },
// //   subhedTitel: {
// //     fontSize: 20,
// //     textAlign: "center",
// //     marginVertical: 10,
// //   },
// //   smallIcon: {
// //     marginTop: -10,
// //     marginRight: 20,
// //     fontSize: 24,
// //   },
// //   action: {
// //     flexDirection: "row",
// //     paddingTop: 18,
// //     paddingBottom: 5,
// //     marginTop: 15,
// //     paddingHorizontal: 15,
// //     borderWidth: 1,
// //     borderColor: "#420475",
// //     borderRadius: 10,
// //   },
// //   textInput: {
// //     flex: 1,
// //     marginTop: -12,
// //     color: "#05375a",
// //   },
// //   textSign: {
// //     fontSize: 18,
// //     fontWeight: "bold",
// //     color: "black",
// //   },
// //   inBut: {
// //     width: "70%",
// //     backgroundColor: "#ECED04",
// //     alignItems: "center",
// //     paddingHorizontal: 15,
// //     paddingVertical: 15,
// //     borderRadius: 8,
// //   },
// //   button: {
// //     alignItems: "center",
// //     marginTop: 20,
// //     alignItems: "center",
// //     textAlign: "center",
// //     margin: 20,
// //   },
// // });

// import React, { useState, useRef } from "react";
// import { 
//   View, 
//   Text, 
//   SafeAreaView, 
//   StyleSheet, 
//   Keyboard, 
//   TouchableWithoutFeedback, 
//   TouchableOpacity, 
//   Alert
// } from "react-native";
// import { LinearGradient } from "expo-linear-gradient";
// import { StatusBar } from "expo-status-bar";
// import { TextInput as PaperTextInput } from 'react-native-paper';
// import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
// import { useNavigation } from "@react-navigation/native";
// import axios from "axios";

// export default function SignUp() {
//   const navigation = useNavigation();

//   const [name, setName] = useState("");
//   const [busName, setBusName] = useState("");
//   const [busnumber, setbusnumber] = useState("");
//   const [password, setPassword] = useState("");
//   const [phone, setPhone] = useState("");
//   const [to, setTo] = useState("");
//   const [where, setWhere] = useState("");
//   const [Arr, setArr] = useState("");
//   const [Dep, setDEp] = useState("");
//   const [NeArr, setNeArr] = useState("");
//   const [NeDep, setNeDep] = useState("");

//   const [nameVerify, setNameVerify] = useState(false);
//   const [busNameVerify, setBusNameVerify] = useState(false);
//   const [busnumberlVerify, setbusnumberVerify] = useState(false);
//   const [passwordVerify, setPasswordVerify] = useState(false);
//   const [phoneVerify, setPhoneVerify] = useState(false);
//   const [pwshow, setPwshow] = useState(false);

//   const nameInputRef = useRef(null);
//   const busNameInputRef = useRef(null);
//   const busnumberInputRef = useRef(null);
//   const passwordInputRef = useRef(null);
//   const phoneInputRef = useRef(null);

//   const handleNameChange = (text) => {
//     setName(text);
//     setNameVerify(text.length > 1);
//   };

//   const handleBusNameChange = (text) => {
//     setBusName(text);
//     setBusNameVerify(text.length > 1);
//   };

//   const handleEmailChange = (text) => {
//     setbusnumber(text);
//     setbusnumberVerify(text.length > 1);
//   };

//   const handlePasswordChange = (text) => {
//     setPassword(text);
//     setPasswordVerify(text.length > 5);
//   };

//   const handlePhoneChange = (text) => {
//     const phoneVar = text.replace(/[^0-9]/g, '');
//     setPhone(phoneVar);
//     setPhoneVerify(/^\d{10}$/.test(phoneVar));
//   };

//   const handleSignUp = () => {
//     const userData = {
//       UserName: name,
//       Busname: busName,
//       BusNumber: busnumber,
//       password: password,
//       Phone: phone,
//       To: to,
//       Where: where,
//       ArrivalTime: Arr,
//       DepartTime: Dep,
//       NextArrivalTime: NeArr,
//       NextDepartTime: NeDep,
//     }
//     if (nameVerify && busNameVerify && busnumberlVerify && passwordVerify && phoneVerify) {
//       axios.post("http://172.20.10.2:5000/api/auth/register", userData)
//         .then((res) => {
//           console.log(res.data)

//           if (res.data.status === "ok") {
//             Alert.alert("Registration Successful")
//             navigation.navigate("Login");
//           } else {
//             Alert.alert(JSON.stringify(res.data))
//           }
//         })
//         .catch(e => console.log(e))
//     } else {
//       Alert.alert("Fill in all details")
//     }
//   };

//   const handleLogin = () => {
//     navigation.navigate("Login");
//   };

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//         <LinearGradient
//           colors={["rgba(230,811,0,1)", "rgba(230,81,0,8)"]}
//           style={{ flex: 1 }}
//         >
//           <StatusBar hidden />
//           <View style={styles.header}>
//             <Text style={styles.hedTitel}>Register</Text>
//             <Text style={styles.subhedTitel}>
//               Please register to create a new account
//             </Text>
//           </View>
//           <View style={styles.footer}>
//             <KeyboardAwareScrollView showsHorizontalScrollIndicator={false}>
//               <View style={styles.action}>
//                 <PaperTextInput
//                   label="Full Name"
//                   style={styles.textInput}
//                   returnKeyType="next"
//                   blurOnSubmit={false}
//                   value={name}
//                   onChangeText={handleNameChange}
//                   ref={nameInputRef}
//                    mode="outlined"
//                   onSubmitEditing={() => busNameInputRef.current.focus()}
//                 />
//               </View>
//               {name.length > 0 && !nameVerify && (
//                 <Text style={{ marginLeft: 20, color: "red" }}>
//                   Name should be more than 1 character
//                 </Text>
//               )}

//               <View style={styles.action}>
//                 <PaperTextInput
//                   label="Bus Name"
//                   style={styles.textInput}
//                   returnKeyType="next"
//                   blurOnSubmit={false}
//                   value={busName}
//                   onChangeText={handleBusNameChange}
//                   ref={busNameInputRef}
//                    mode="outlined"
//                   onSubmitEditing={() => busnumberInputRef.current.focus()}
//                 />
//               </View>
//               {busName.length > 0 && !busNameVerify && (
//                 <Text style={{ marginLeft: 20, color: "red" }}>
//                   Bus name should be more than 1 character
//                 </Text>
//               )}

//               <View style={styles.action}>
//                 <PaperTextInput
//                   label="Bus Number"
//                   style={styles.textInput}
//                   keyboardType="text"
//                   returnKeyType="next"
//                   blurOnSubmit={false}
//                   value={busnumber}
//                   onChangeText={handleEmailChange}
//                   ref={busnumberInputRef}
//                    mode="outlined"
//                   onSubmitEditing={() => passwordInputRef.current.focus()}
//                 />
//               </View>
//               {busnumber.length > 0 && !busnumberlVerify && (
//                 <Text style={{ marginLeft: 20, color: "red" }}>
//                   Please enter a valid bus number
//                 </Text>
//               )}

//               <View style={styles.action}>
//                 <PaperTextInput
//                   label="Password"
//                   style={styles.textInput}
//                   secureTextEntry={!pwshow}
//                   returnKeyType="next"
//                   blurOnSubmit={false}
//                   value={password}
//                   onChangeText={handlePasswordChange}
//                   ref={passwordInputRef}
//                    mode="outlined"
//                   onSubmitEditing={() => phoneInputRef.current.focus()}
//                   right={<PaperTextInput.Icon name={pwshow ? "eye-off" : "eye"} onPress={() => setPwshow(!pwshow)} />}
//                 />
//               </View>
//               {password.length > 0 && !passwordVerify && (
//                 <Text style={{ marginLeft: 20, color: "red" }}>
//                   Password should be more than 5 characters
//                 </Text>
//               )}

//               <View style={styles.action}>
//                 <PaperTextInput
//                   label="Phone Number"
//                   style={styles.textInput}
//                   keyboardType="numeric"
//                   returnKeyType="done"
//                   blurOnSubmit={false}
//                   value={phone}
//                   onChangeText={handlePhoneChange}
//                   maxLength={10}
//                   ref={phoneInputRef}
                 
//                    mode="outlined"
//                 />
//               </View>
//               {phone.length > 0 && !phoneVerify && (
//                 <Text style={{ marginLeft: 20, color: "red" }}>
//                   Phone number must be exactly 10 digits
//                 </Text>
//               )}
             
            
          

//               <TouchableOpacity onPress={handleLogin}>
//                 <View style={{ justifyContent: "flex-end", alignItems: "flex-end", marginTop: 8, marginRight: 10 }}>
//                   <Text style={{ fontWeight: '700', fontSize: 16, color: "gray" }}>
//                     Already have an account?
//                   </Text>
//                 </View>
//               </TouchableOpacity>

//               <View style={styles.button}>
//                 <TouchableOpacity onPress={handleSignUp} style={styles.inBut}>
//                   <View>
//                     <Text style={styles.textSign}>Sign Up</Text>
//                   </View>
//                 </TouchableOpacity>
//               </View>
//             </KeyboardAwareScrollView>
//           </View>
//         </LinearGradient>
//       </TouchableWithoutFeedback>
//     </SafeAreaView>
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
//   footer: {
//     flex: 3,
//     backgroundColor: "white",
//     borderTopLeftRadius: 30,
//     borderTopRightRadius: 30,
//     paddingHorizontal: 20,
//     paddingVertical: 30,
//   },
//   hedTitel: {
//     fontSize: 33,
//   },
//   subhedTitel: {
//     fontSize: 20,
//     textAlign: "center",
//     marginVertical: 10,
//   },
//   action: {
//     marginTop: 15,
//     marginBottom: 5,
//   },
//   Vaction: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginBottom: 16,
//     paddingBottom: 5,
//     marginTop: 15,
    
//   },
//   textInput: {
//     marginTop: -12,
//     backgroundColor: "transparent",
//   },
//   textSign: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "black",
//   },
//   inBut: {
//     width: "100%",
//     height: 50,
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 10,
//     backgroundColor: "orange",
//   },
//   button: {
//     alignItems: "center",
//     marginTop: 50,
//   },
// });


import React, { useState, useRef } from "react";
import { 
  View, 
  Text, 
  SafeAreaView, 
  StyleSheet, 
  Keyboard, 
  TouchableWithoutFeedback, 
  TouchableOpacity, 
  Alert, 
  Platform
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { TextInput as PaperTextInput } from 'react-native-paper';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

export default function SignUp() {
  const navigation = useNavigation();

 
  const [name, setName] = useState("");
  const [busName, setBusName] = useState("");
  const [busnumber, setbusnumber] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [to, setTo] = useState("");
  const [where, setWhere] = useState("");
  const [Arr, setArr] = useState("");
  const [Dep, setDEp] = useState("");
  const [NeArr, setNeArr] = useState("");
  const [NeDep, setNeDep] = useState("");

  const [nameVerify, setNameVerify] = useState(false);
  const [busNameVerify, setBusNameVerify] = useState(false);
  const [busnumberVerify, setbusnumberVerify] = useState(false);
  const [passwordVerify, setPasswordVerify] = useState(false);
  const [phoneVerify, setPhoneVerify] = useState(false);
  const [toVerify, setToVerify] = useState(false);
  const [whereVerify, setWhereVerify] = useState(false);
  const [arrVerify, setArrVerify] = useState(false);
  const [depVerify, setDepVerify] = useState(false);
  const [neArrVerify, setNeArrVerify] = useState(false);
  const [neDepVerify, setNeDepVerify] = useState(false);
  const [pwshow, setPwshow] = useState(false);

  const nameInputRef = useRef(null);
  const busNameInputRef = useRef(null);
  const busnumberInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const phoneInputRef = useRef(null);
  const toInputRef = useRef(null);
  const whereInputRef = useRef(null);
  const arrInputRef = useRef(null);
  const depInputRef = useRef(null);
  const neArrInputRef = useRef(null);
  const neDepInputRef = useRef(null);




  const handleNameChange = (text) => {
    setName(text);
    setNameVerify(text.length > 1);
  };

  const handleBusNameChange = (text) => {
    setBusName(text);
    setBusNameVerify(text.length > 1);
  };

  const handleBusNumberChange = (text) => {
    setbusnumber(text);
    setbusnumberVerify(text.length > 1);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    setPasswordVerify(text.length > 5);
  };

  const handlePhoneChange = (text) => {
    const phoneVar = text.replace(/[^0-9]/g, '');
    setPhone(phoneVar);
    setPhoneVerify(/^\d{10}$/.test(phoneVar));
  };

  const handleToChange = (text) => {
    setTo(text);
    setToVerify(text.length > 0);
  };

  const handleWhereChange = (text) => {
    setWhere(text);
    setWhereVerify(text.length > 0);
  };

  const handleArrChange = (text) => {
    setArr(text);
    setArrVerify(text.length > 0);
  };

  const handleDepChange = (text) => {
    setDEp(text);
    setDepVerify(text.length > 0);
  };

  const handleNeArrChange = (text) => {
    setNeArr(text);
    setNeArrVerify(text.length > 0);
  };

  const handleNeDepChange = (text) => {
    setNeDep(text);
    setNeDepVerify(text.length > 0);
  };

  const handleSignUp = () => {
    const userData = {
      UserName: name,
      Busname: busName,
      BusNumber: busnumber,
      password: password,
      Phone: phone,
      To: to,
      Where: where,
      arrival: Arr,
      departure: Dep,
      Nextarrival: NeArr,
      Nextdeparture: NeDep,
    };
  
    if (
      nameVerify && 
      busNameVerify && 
      busnumberVerify && 
      passwordVerify && 
      phoneVerify &&
      toVerify &&
      whereVerify &&
      arrVerify &&
      depVerify &&
      neArrVerify &&
      neDepVerify
    ) {
      axios.post("http://192.168.1.122:5000/api/auth/register", userData)
        .then((res) => {
          if (res.data.status === "ok") {
            Alert.alert("Registration Successful");
            navigation.navigate("Login");
          } else {
            Alert.alert(res.data.error || "Registration failed");
          }
        })
        .catch((error) => {
          console.error("Error during registration:", error.response || error.message);
          Alert.alert("Error during registration", error.response?.data?.error || "An unknown error occurred");
        });
    } else {
      Alert.alert("Fill in all details");
    }
  };
  
  const handleLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <LinearGradient
          colors={["rgba(230,811,0,1)", "rgba(230,81,0,8)"]}
          style={{ flex: 1 }}
        >
          <StatusBar hidden />
          <View style={styles.header}>
            <Text style={styles.hedTitel}>Register</Text>
            <Text style={styles.subhedTitel}>
              Please register to create a new account
            </Text>
          </View>
          <View style={styles.footer}>
            <KeyboardAwareScrollView showsHorizontalScrollIndicator={false}>
              <View style={styles.action}>
                <PaperTextInput
                  label="Full Name"
                  style={styles.textInput}
                  returnKeyType="next"
                  blurOnSubmit={false}
                  value={name}
                  onChangeText={handleNameChange}
                  ref={nameInputRef}
                  mode="outlined"
                  onSubmitEditing={() => busNameInputRef.current.focus()}
                />
              </View>
              {name.length > 0 && !nameVerify && (
                <Text style={{ marginLeft: 20, color: "red" }}>
                  Name should be more than 1 character
                </Text>
              )}

              <View style={styles.action}>
                <PaperTextInput
                  label="Bus Name"
                  style={styles.textInput}
                  returnKeyType="next"
                  blurOnSubmit={false}
                  value={busName}
                  onChangeText={handleBusNameChange}
                  ref={busNameInputRef}
                  mode="outlined"
                  onSubmitEditing={() => busnumberInputRef.current.focus()}
                />
              </View>
              {busName.length > 0 && !busNameVerify && (
                <Text style={{ marginLeft: 20, color: "red" }}>
                  Bus name should be more than 1 character
                </Text>
              )}

              <View style={styles.action}>
                <PaperTextInput
                  label="Bus Number"
                  style={styles.textInput}
                  keyboardType="text"
                  returnKeyType="next"
                  blurOnSubmit={false}
                  value={busnumber}
                  onChangeText={handleBusNumberChange}
                  ref={busnumberInputRef}
                  mode="outlined"
                  onSubmitEditing={() => passwordInputRef.current.focus()}
                />
              </View>
              {busnumber.length > 0 && !busnumberVerify && (
                <Text style={{ marginLeft: 20, color: "red" }}>
                  Please enter a valid bus number
                </Text>
              )}

              <View style={styles.action}>
                <PaperTextInput
                  label="Password"
                  style={styles.textInput}
                  secureTextEntry={!pwshow}
                  returnKeyType="next"
                  blurOnSubmit={false}
                  value={password}
                  onChangeText={handlePasswordChange}
                  ref={passwordInputRef}
                  mode="outlined"
                  onSubmitEditing={() => phoneInputRef.current.focus()}
                  right={<PaperTextInput.Icon name={pwshow ? "eye-off" : "eye"} onPress={() => setPwshow(!pwshow)} />}
                />
              </View>
              {password.length > 0 && !passwordVerify && (
                <Text style={{ marginLeft: 20, color: "red" }}>
                  Password should be more than 5 characters
                </Text>
              )}

              <View style={styles.action}>
                <PaperTextInput
                  label="Phone Number"
                  style={styles.textInput}
                  keyboardType="numeric"
                  returnKeyType="next"
                  blurOnSubmit={false}
                  value={phone}
                  onChangeText={handlePhoneChange}
                  ref={phoneInputRef}
                  mode="outlined"
                  onSubmitEditing={() => toInputRef.current.focus()}
                />
              </View>
              {phone.length > 0 && !phoneVerify && (
                <Text style={{ marginLeft: 20, color: "red" }}>
                  Please enter a valid phone number
                </Text>
              )}

              <View style={styles.action}>
                <PaperTextInput
                  label="TO"
                  style={styles.textInput}
                  returnKeyType="next"
                  blurOnSubmit={false}
                  value={to}
                  onChangeText={handleToChange}
                  ref={toInputRef}
                  mode="outlined"
                  onSubmitEditing={() => whereInputRef.current.focus()}
                />
              </View>
              {to.length > 0 && !toVerify && (
                <Text style={{ marginLeft: 20, color: "red" }}>
                  Please enter a valid destination
                </Text>
              )}

              <View style={styles.action}>
                <PaperTextInput
                  label="Where"
                  style={styles.textInput}
                  returnKeyType="next"
                  blurOnSubmit={false}
                  value={where}
                  onChangeText={handleWhereChange}
                  ref={whereInputRef}
                  mode="outlined"
                  onSubmitEditing={() => arrInputRef.current.focus()}
                />
              </View>
              {where.length > 0 && !whereVerify && (
                <Text style={{ marginLeft: 20, color: "red" }}>
                  Please enter a valid origin
                </Text>
              )}

              <View style={styles.action}>
                <PaperTextInput
                  label="Arrival Time"
                  style={styles.textInput}
                  returnKeyType="next"
                  blurOnSubmit={false}
                  value={Arr}
                  onChangeText={handleArrChange}
                  ref={arrInputRef}
                  mode="outlined"
                  onSubmitEditing={() => depInputRef.current.focus()}
                />
              </View>
              {Arr.length > 0 && !arrVerify && (
                <Text style={{ marginLeft: 20, color: "red" }}>
                  Please enter a valid arrival time
                </Text>
              )}

              <View style={styles.action}>
                <PaperTextInput
                  label="Depart Time"
                  style={styles.textInput}
                  returnKeyType="next"
                  blurOnSubmit={false}
                  value={Dep}
                  onChangeText={handleDepChange}
                  ref={depInputRef}
                  mode="outlined"
                  onSubmitEditing={() => neArrInputRef.current.focus()}
                />
              </View>
              {Dep.length > 0 && !depVerify && (
                <Text style={{ marginLeft: 20, color: "red" }}>
                  Please enter a valid departure time
                </Text>
              )}

              <View style={styles.action}>
                <PaperTextInput
                  label="Next Arrival Time"
                  style={styles.textInput}
                  returnKeyType="next"
                  blurOnSubmit={false}
                  value={NeArr}
                  onChangeText={handleNeArrChange}
                  ref={neArrInputRef}
                  mode="outlined"
                  onSubmitEditing={() => neDepInputRef.current.focus()}
                />
              </View>
              {NeArr.length > 0 && !neArrVerify && (
                <Text style={{ marginLeft: 20, color: "red" }}>
                  Please enter a valid next arrival time
                </Text>
              )}

              <View style={styles.action}>
                <PaperTextInput
                  label="Next Depart Time"
                  style={styles.textInput}
                  returnKeyType="done"
                  value={NeDep}
                  onChangeText={handleNeDepChange}
                  ref={neDepInputRef}
                  mode="outlined"
                />
              </View>
              {NeDep.length > 0 && !neDepVerify && (
                <Text style={{ marginLeft: 20, color: "red" }}>
                  Please enter a valid next departure time
                </Text>
              )}

              <View style={{ alignItems: "center" }}>
                <TouchableOpacity
                  onPress={handleSignUp}
                  style={styles.inBut}
                >
                  <Text style={styles.textSign}>Register</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.bottom}>
                <Text style={{ color: "black", fontWeight: "bold" }}>
                  Already have an account?
                </Text>
                <TouchableOpacity onPress={handleLogin}>
                  <Text style={{ color: "blue", fontWeight: "bold" }}>
                    Login
                  </Text>
                </TouchableOpacity>
              </View>
            </KeyboardAwareScrollView>
          </View>
        </LinearGradient>
      </TouchableWithoutFeedback>
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
    flex: 4,
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
  action: {
    flexDirection: "row",
    marginTop: 15,
    borderBottomWidth: 1,
    borderBottomColor: "white",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "black",
    backgroundColor: "white",
  },
  inBut: {
    width: '70%',
    backgroundColor: '#ECED04',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 8,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
});

