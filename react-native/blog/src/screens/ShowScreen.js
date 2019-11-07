import React, { useContext } from 'react'
import { View, Button, Text, StyleSheet } from 'react-native';

import { Context } from '../context/BlogContext';

const ShowScreen = ({ navigation }) => {
    
    // pass in the context we want to get our information from
    const { state } = useContext(Context);
    
    const id = navigation.getParam('id');

    // if the id that was provided by navigation is equal to the id on the 
    // blogpost, let's provided it as a blogPost variable
    const blogPost = state.find((blogPost) => blogPost.id === id)

    return(
        <View>
            <Text>{ blogPost.title }</Text>
            <Text>{ blogPost.id }</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ShowScreen;