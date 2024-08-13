import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Tab from './src/custom/Tab';
import Login from "./src/components/Login"
import signUp from "./src/components/SignUp"
import ViewSBus from './src/page/ViewSBus';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator > 
       
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
        <Stack.Screen options={{ headerShown: false }} name="signUp" component={signUp} />
        <Stack.Screen options={{ headerShown: false }} name="Tab" component={Tab} />
        <Stack.Screen  options={{ headerTitle: 'View Special Bus' }}  name="ViewSBus" component={ViewSBus} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
