import React from 'react';
import {View, ScrollView, StyleSheet, Text, Image} from 'react-native';


import {Menu, X} from 'lucide-react-native';


 const sampleImage = 'https://img.freepik.com/free-photo/closeup-shot-bee-chamomile-flower_181624-31930.jpg?t=st=1743091138~exp=1743094738~hmac=66a88a22607001db13de4fc910d32dac109c4de41ff290d8d9d1a1e2efc3a863&w=996';


const ProfileScreen = () => (

  <ScrollView style={styles.content}>
      <View style={styles.imgContainer}>
        <Image source={{uri: sampleImage}} style={styles.contentImage}/>
      </View>
      <View style={styles.selectedDetails}>
          <Text style={styles.title}>Name: <Text style={styles.underlined}>Dennis</Text></Text>
        <Text style={styles.title}>YR/Section: <Text style={styles.underlined}>IT-303</Text></Text>
        <Text style={styles.title}>Course: <Text style={styles.underlined}>BS Information Technology</Text></Text>
      </View>
    </ScrollView>
);



const styles = StyleSheet.create({
  imgContainer: {
    paddingHorizontal: 15,
    paddingVertical: 5
  },
  contentImage: {
    height:250,
    resizeMode: 'stretch',
    objectFit: 'contain'
  },
  underlined: {
    fontWeight: 'normal',
  },
  selectedDetails : {
    paddingHorizontal: 25,
  },
  title:{
    marginRight: 5,
    fontSize: 20,  
    fontWeight: 'bold',
  },
});


export default ProfileScreen;
