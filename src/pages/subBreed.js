import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Picker,
  SafeAreaView,
  Dimensions
} from 'react-native';
import api from '../services/api';


export default class SubBreed extends Component {

  state = {
    breed: '',
    subBreed: '',
    imageUrl: '',
    subBreeds: [],
    listOfBreeds: [],

  }

  componentDidMount() {
    this.loadBreeds() 
  }

  loadBreeds = () => {
    api.get('https://dog.ceo/api/breeds/list/all')
    .then(response => {
        this.setState({ 
            breeds: response.data.message, 
            listOfBreeds: Object.keys(response.data.message)
         })  
    })
    .catch(error => {
      alert(error)
    });

  }

  getSubBreeds = (breed) => { 
    this.setState({breed: breed})
    api.get(`${breed}/list`)
      .then(response => {
        this.setState({ subBreeds: response.data.message})
      })
      .catch(error => { 
        alert(error)
      })
    
  }
  getImage = (subBreed) => { 
    this.setState({subBreed: subBreed})
    api.get(`${this.state.breed}/${subBreed}/images/random`)
      .then(response => {
        this.setState({imageUrl: response.data.message})
        alert('TESTE')
      })
      .catch(error =>{
        alert(error)
      })
  }

  render() {
    return (
        <SafeAreaView>
          <View style={styles.pickerContainer}>
            <Picker 
              selectedValue={this.state.breed}
              onValueChange={this.getSubBreeds}
              style={styles.picker}> 
             {this.state.listOfBreeds.map((breed) => <Picker.Item label={breed} value={breed}/>)}
            </Picker>
            <Picker 
              selectedValue={this.state.subBreed}
              onValueChange={this.getImage}
              style={styles.picker}> 
              {
                this.state.subBreeds.length != 0 
                ? this.state.subBreeds.map((subBreed) => <Picker.Item label={subBreed} value={subBreed}/>)
                : <Picker.Item label='do not have' value=''/> 
              }
            </Picker>
          </View>
          
          <Text>{this.state.imageUrl}</Text>
            
        </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  pickerContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  picker: { 
    width: Dimensions.get('screen').width/2
  },

})
