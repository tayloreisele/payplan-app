import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to PayPlan</Text>
      <Button
        title="Log In"
        onPress={() => navigation.navigate('Login')} // Assuming 'Login' is the name of your login screen
      />
      <Button
        title="Sign Up"
        onPress={() => navigation.navigate('SignUp')} // Assuming 'SignUp' is the name of your sign-up screen
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default WelcomeScreen;