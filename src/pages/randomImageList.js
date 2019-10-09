import React, {Component} from 'react';
import { StyleSheet, View, Image, Dimensions, TouchableOpacity, FlatList, ActivityIndicator} from 'react-native';
import api from '../services/api';

export default class RandomImageList extends Component {
    state = { 
        images: [],
        loading: false, 
    }
    componentDidMount() {
        this.loadImages()
      }

    loadImages = () => {
        this.setState({loading: true})
        api.get('image/random/12')
        .then(response => {
            this.setState({ images: [... this.state.images, ...response.data.message] })
            this.setState({loading: false})
        })
        .catch(error => {
          alert(error)
          this.setState({loading: false})
        });

    }

    renderItem = ({ item }) => (
        <View styles={styles.itemContainer}>
            <Image 
                style={styles.image}
                source={{uri: item }}/>      
        </View>
    )

    renderFooter = () => { 
        if (!this.state.loading) return null 
        return (
            <View style={styles.loading}>
                <ActivityIndicator />
            </View>
        )
    }

    render() { 
        
        return (
                <View styles={styles.mainContainer}>                 
                <FlatList
                    data={this.state.images}
                    numColumns={3}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={this.renderItem}
                    onEndReached={this.loadImages}
                    onEndReachedThreshold={0.1}
                    ListFooterComponent={this.renderFooter}
                />
                
            </View>
        )
    }

    
}

const styles = StyleSheet.create({ 
    mainContainer: { 
        flex: 1,
        justifyContent: "center", 
        paddingTop: 30,
    },
    loading: { 
        alignSelf: 'center',
        marginVertical: 20,
    },
    itemContainer: { 
        flex: 1,
        flexDirection: "column",
        margin: 1,
    }, 
    image: { 
        justifyContent: "center",
        alignItems: "center",
        height: 150,
        width: Dimensions.get('window').width/3,
    },
   
})