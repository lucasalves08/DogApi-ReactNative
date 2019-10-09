/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';

const Main = ({ navigation }) => (
      <View style={styles.sectionContainer}>
        <Text style={styles.title}>DOG API</Text>
        <Text style={styles.subtitle}>The internet's biggest collection
of open source dog pictures.</Text>
        <TouchableOpacity activeOpacity = { 0.5 } onPress={() => navigation.navigate('Home')} >
          <Image style={styles.logoimg} source={require('../img/dog_ceo.png')} />
        </TouchableOpacity>
        <Text style={styles.imageDescription}>Click on image to proceed</Text>
      </View> 
 
)

export default Main


  
const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: { 
    fontSize: 32, 
    marginBottom: 16,
    fontWeight: "bold"
    
  },
  subtitle: { 
    padding: 16,
    fontSize: 18, 
    textAlign: "center",
  }, 
  imageDescription: { 
    
  },
  logoimg: { 
    width: 150, 
    height: 150,
    margin: 16,
  }, 
});