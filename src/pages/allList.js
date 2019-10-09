import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import api from '../services/api';

export default class AllList extends Component {
    state = {
        breeds: [],
        listOfBreeds: [],
        list: ["Test","Test","Test","Test","Test","Test","Test","Test"],
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

    renderItemSubList = ({ item }) => { 
        <View>
            <Text>{item}</Text>
        </View>
    }

    renderItem = ({ item }) => (
        <TouchableOpacity>
            <View style={styles.itemContainer}>
                <Text style={styles.itemText}>{item}</Text>  
            </View>
        </TouchableOpacity>  
    )

    render() { 
        return (
            <View style={styles.mainContainer}>
                <FlatList
                    contentContainerStyle={styles.list}
                    data={this.state.listOfBreeds}
                    keyExtractor={(item, index) => index.toString()}
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
        alignItems: "center",
        margin: 1,
        backgroundColor: "white", 
        padding: 20,
        marginBottom: 8,
        borderRadius: 12, 
        borderColor: "#434343" 
    }, 
    itemText: { 
        fontSize: 32, 
    }
})