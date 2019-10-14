/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet,View,Text,TouchableOpacity, Image, Dimensions } from 'react-native';

const Home = ({ navigation }) => (
  <View>
    <View style={styles.container}>
      <TouchableOpacity style={styles.item} onPress={() => {navigation.navigate('AllList')}}> 
        <Image style={styles.itemIcon} source={require('../img/paw.png')}/>
        <Text style={styles.itemTitle}>List all breeds</Text>
      </TouchableOpacity> 

      <TouchableOpacity style={styles.item} onPress={() => {navigation.navigate('RandomImageList')}}> 
        <Image style={styles.itemIcon} source={require('../img/gallery.png')}/>
        <Text style={styles.itemTitle}>Random Image</Text>
      </TouchableOpacity> 

      <TouchableOpacity style={styles.item} onPress={() => {navigation.navigate('ByBreed')}}> 
        <Image style={styles.itemIcon} source={require('../img/dog.png')}/>
        <Text style={styles.itemTitle}>By breed</Text>
      </TouchableOpacity> 

      <TouchableOpacity style={styles.item} onPress={() => {navigation.navigate('SubBreed')}}> 
        <Image style={styles.itemIcon} source={require('../img/subdog.png')}/>
        <Text style={styles.itemTitle}>By sub-breed</Text>
      </TouchableOpacity> 
      
    </View>
  </View>


)
export default Home;

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    width: Dimensions.get('window').width *0.5, 
    height: Dimensions.get('window').height *0.45,
    borderWidth: 1, 
    borderColor: 'lightgray', 
    alignItems: 'center', 
    justifyContent: "center",
    

  }, 
  itemIcon: { 
    width: 200, 
    height: 150, 
    resizeMode: "contain"

  }, 
  itemTitle: { 
    marginTop: 16,
    fontSize: 18,  

  }
});