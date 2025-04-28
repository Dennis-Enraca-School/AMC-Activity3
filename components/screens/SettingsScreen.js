import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, Text, Switch} from 'react-native';
import {Menu, X, Settings} from 'lucide-react-native';




const SettingScreen = () => (

  <View style={styles.container}>
  

          <Settings 
            size = {24}
            color ='#6200ee'

          />
        <Text style={styles.header}>
       
          Settings
        </Text>
        <SafeAreaView style={styles.switchContainer}>
          <Text style={styles.text,styles.grid}>
            Display Profile
          </Text>
          <Switch
            trackColor={{ false: '#767577', true: '#800080' }}
            ios_backgroundColor="#3e3e3e"
            style={styles.grid}
            value={true}
            onValueChange={(setIsEnabled) => previousState => !previousState}
          />
        </SafeAreaView>
        <SafeAreaView style={styles.switchContainer}>
          <Text style={styles.text,styles.grid}>
            Dark Mode
          </Text>
          <Switch
            trackColor={{ false: '#767577', true: '#64b145' }}
            ios_backgroundColor="#3e3e3e"
            style={styles.grid}
            onValueChange={() => previousState => !previousState}

          />
        </SafeAreaView>
    </View>
);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  grid: {
    marginHorizontal: '4px',
    marginVertical: '3px'
  },
  text: {
    textAlign: 'center',
  },
  switchContainer: {
    flexDirection: 'row',
  },
  header: {
    marginTop: '5px',
    fontWeight: 'Bold',
    marginBottom:'20px',
    fontSize: 18,
    color: '#800080',
  },
});



export default SettingScreen;

