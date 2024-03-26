import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import ProfilePic from './me.jpg';

const Overview = () => {
  return (
    <View style={styles.outerContainer}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <View style={styles.userContainer}>
            <Text style={styles.greeting}>Hello, Taylor</Text>
            <Image
              source={ProfilePic}
              style={styles.ProfilePic}
            />
          </View>
          <View style={styles.dateAndPaydayContainer}>
            <View style={styles.dateContainer}>
              <Text style={styles.date}>Tuesday,</Text>
              <Text style={styles.date}>March 19, 2024</Text>
            </View>
            <View style={styles.paydayContainer}>
              <Text style={styles.date}>Next payday is in</Text>
              <Text style={styles.date}>10 days</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  safeArea: {
    marginTop: 80,
    marginBottom: 16,
    marginLeft: 16,
    marginRight: 16,
    flex: 1,
    backgroundColor: 'black',
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  greeting: {
    color: 'white',
    fontSize: 40,
    fontFamily: 'Jura-SemiBold',
    letterSpacing: -2
  },
  date: {
    color: 'gray',
    marginTop: 5,
    marginBottom: -5,
    fontSize: 16,
  },
  dateAndPaydayContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateContainer: {
    flexDirection: 'column',
  },
  paydayContainer: {
    alignItems: 'flex-end',
  },

  ProfilePic: {
    width: 50,
    height: 50,
    borderRadius: 25
  },

  userContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  }
});

export default Overview;