/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button, 
  Image
} from 'react-native';

import {
    Header,
    Colors,
  } from 'react-native/Libraries/NewAppScreen';

export default class App extends Component{
    render() {
        return (
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Dog API</Text>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.button}>
                        <Button title="Teste"/> 
                    </View>  
                    <View style={styles.button}>
                        <Button title="Teste"/> 
                    </View>  
                </View> 
            </View>            
        );
    }
}
  
const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },

  button: { 
    width: 150, 
    height: 150,
    backgroundColor: Colors.dark
  },

  logoimg: { 
    width: 150, 
    height: 150,
    margin: 16,
  }, 
});