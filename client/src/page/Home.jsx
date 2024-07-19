


import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet, Text, View, Switch, SafeAreaView, Alert } from 'react-native';
import * as Location from 'expo-location';
import { useNavigation } from "@react-navigation/native";
const Home = () => {
    const [switchValue, setSwitchValue] = useState(false);
    const [location, setLocation] = useState(null);
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
  
    const toggleSwitch = async (value) => {
        setSwitchValue(value);

        if (value) {
         
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert('Permission to access location was denied');
                return;
            }

         
            let currentLocation = await Location.getCurrentPositionAsync({});
            setLocation(currentLocation);
        } else {
          
            setLocation(null);
        }
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.text}>
                    {switchValue ? `Location On\nLatitude: ${location?.coords.latitude}\nLongitude: ${location?.coords.longitude}` : "Location Off"}
                </Text>
                <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={switchValue ? '#f5dd4b' : '#f4f3f4'}
                    style={{ marginTop: 40 }}
                    onValueChange={toggleSwitch}
                    value={switchValue}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    }
});

export default Home;
