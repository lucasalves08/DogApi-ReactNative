import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {
  StyleSheet,
  Image,
  Picker,
  SafeAreaView,
  Dimensions
} from 'react-native';
import api from '../services/api';


export default class ByBreed extends Component {
  state = {
    listOfBreeds: [],
    breed: '',
    imageURL: 'image',
}

componentDidMount() {
    this.loadBreeds()
    this.loadImage('affenpinscher')
}

loadBreeds = () => {
    api.get('https://dog.ceo/api/breeds/list/all')
    .then(response => {
        this.setState({ 
            listOfBreeds: Object.keys(response.data.message)
         })  
    })
    .catch(error => {
      alert(error)
    });
}
loadImage = (breed) => {
    // let response = await api.get(`${breed}/images/random`)
    // let { url } = response.data.message
    // this.setState({
    //     imageURL: url

    // })
    
    this.setState({breed: breed})
    api.get(`${breed}/images/random`)
    .then(response =>  {
        this.setState({
            imageURL: response.data.message, 
        })
    })
    .catch(error => {
        alert(error)
    });
}

  didSelect = (breed) => {
    this.setState({breed: breed});
  };

  render() {
    return (
        <SafeAreaView>
            <Picker 
                selectedValue={this.state.breed}
                onValueChange={this.loadImage}>
                {this.state.listOfBreeds.map((breed) => <Picker.Item label={breed} value={breed}/>)}
            </Picker>
            <Image style={styles.image} source={{uri: this.state.imageURL}}/>
            
        </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
    image: {
        width: Dimensions.get('screen').width, 
        height: 400, 
        

        
    }
})
