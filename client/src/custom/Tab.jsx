import React, { useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Main from "../page/Home";
import Profile from "../page/Profile";
import { Entypo, FontAwesome, Fontisto } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';
import add from "../page/Add"
import SpecaiBus from "../page/SpecaiBus";
const Tab = () => {
    const Tab = createBottomTabNavigator(); 
    return (
      <Tab.Navigator screenOptions={{
        tabBarOptions: {
          showLabel: false,
        },
      }}>
        <Tab.Screen
          name="Home"
          component={Main}
          options={{
            tabBarLabel: () => null,
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="home" size={25} color="#FED339" />
              ) : (
                <Entypo
                  name="home"
                  size={25}
                  color="#808080"
                />
              ),
            
          }}
        />
          <Tab.Screen
          name="Route"
          component={add}
          options={{
            tabBarLabel: () => null,
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <MaterialIcons name="add-location" size={30} color="#FED339" />
             
              ) : (
                <MaterialIcons name="add-location" size={30} color="#808080" />
              ),
            
          }}
        />
        <Tab.Screen
          name="specail"
          component={SpecaiBus}
          options={{
            tabBarLabel: () => null,
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="plus" size={35} color="#FED339" />
              ) : (
                <Entypo
                  name="plus"
                  size={35}
                  color="#808080"
                />
              ),
            
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: () => null,
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Fontisto name="player-settings" size={25} color="#FED339" />
              ) : (
                <Fontisto
                  name="player-settings"
                  size={25}
                  color="#808080"
                />
              ),
            
          }}
        />

      
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({})

export default Tab;
