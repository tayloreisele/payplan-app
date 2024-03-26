import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import Overview from './Overview';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
// Import the WelcomeScreen component
import WelcomeScreen from './WelcomeScreen'; // Make sure to create this component

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    'Jura-SemiBold': require('./assets/Jura font/static/Jura-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome"
        component={WelcomeScreen} 
        options={{ headerShown: false }}
        />
        <Stack.Screen name="Overview" component={Overview} />
        <Stack.Screen name='Login' component={LoginScreen}/>
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ title: "Sign Up"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};