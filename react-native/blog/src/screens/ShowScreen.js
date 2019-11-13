import React, { useContext } from 'react'
import { View, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { Context } from '../context/BlogContext';


const ShowScreen = ({ navigation }) => {
    
    // pass in the context we want to get our information from
    const { state } = useContext(Context);
    
    const id = navigation.getParam('id');

    // if the id that was provided by navigation is equal to the id on the 
    // blogpost, let's provided it as a blogPost variable
    const blogPost = state.find((blogPost) => blogPost.id === id);

    console.log(blogPost);


    return(
        <View>
            <Text>{ blogPost.title }</Text>
            <Text>{ blogPost.content }</Text>
        </View>
    );
};

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight:
            <TouchableOpacity
                onPress={ () => navigation.navigate('Edit') }>
                <Feather
                    name='edit-2'
                    style={ styles.penIcon } />
            </TouchableOpacity>
    }
}

const styles = StyleSheet.create({
    penIcon: {
        fontSize: 30,
        marginRight: 10    
    }
});

export default ShowScreen;