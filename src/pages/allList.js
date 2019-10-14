import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import api from '../services/api';

export default class AllList extends Component {
    state = {
        breeds: [],
        listOfBreeds: [],
        textShow: -1,

    }

    componentDidMount() {
        this.loadBreeds()
    }

    loadBreeds = () => {
        api.get('list/all')
        .then(response => {
            //Object.keys(response.data.message).map(key => this.state.breedDict[key])
            this.setState({ 
                breeds: response.data.message, 
                listOfBreeds: Object.keys(response.data.message)
             })  
            
            console.log(this.state.breeds) 
        })
        .catch(error => {
          alert(error)
          
        });

    }

    renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            
            <Text style={styles.itemText}>{item}</Text> 
            {
               
                this.state.breeds[item].length != 0  
                ?   <View style={styles.subItemContainer}>
                        {this.state.breeds[item].map((subBreed) => <Text style={styles.subItemText}>{subBreed}</Text>)}
                    </View>
                :   <View></View>
                } 
        </View> 
    )

    render() { 
        return (
            <View style={styles.mainContainer}>
                <FlatList
                    contentContainerStyle={styles.list}
                    data={this.state.listOfBreeds}
                    keyExtractor={(item) => item}
                    renderItem={this.renderItem}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({ 
    mainContainer: { 
        flex: 1,
        justifyContent: "center", 
        backgroundColor: "lightgray", 
        
    },
    list: {
        padding: 8, 
        backgroundColor: "lightgray"  
    },
    itemContainer: { 
        margin: 1,
        backgroundColor: "white", 
        padding: 20,
        marginBottom: 8,
        borderRadius: 12, 
        borderColor: "lightgray" 
    }, 
    itemText: { 
        fontSize: 32, 
        textAlign: "center", 
        
        
    },
    subItemContainer: {
        marginTop: 12,
        margin: 1, 
        padding: 12, 
        borderTopColor: '#000000', 
        borderTopWidth: 1,
    },
    subItemText: { 
        fontSize: 24, 
        
    }



})