import React, { useState, useContext } from 'react';
import { View, TextInput, Text, StyleSheet, Button } from 'react-native';

import { Context } from '../context/BlogContext';

const CreateScreen = ({ navigation }) => {

    // two pieces of state - title and content
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    // context - destructure the function that we need for this component
    const {addBlogPost } = useContext(Context);

    return(
        <View style={ styles.mainLayout }>
            <Text style={ styles.label }>Enter Title:</Text>
            <TextInput 
                style={ styles.input }
                value={ title }
                onChangeText={ (newValue) => setTitle(newValue) }
                />
            <Text style={ styles.label }>Enter Content:</Text>
            <TextInput 
                style={ styles.input }
                value={ content }
                onChangeText={ (newValue) => setContent(newValue) }/>
            <Button 
                title='Create Post'
                onPress={ () => {
                    addBlogPost(title, content, () => {
                        navigation.navigate('Index');
                    });
                }}/>
        </View>
    );
};

const styles = StyleSheet.create({
    mainLayout: {
        marginTop: 10,
        marginHorizontal: 5
    },
    label: {
        fontSize: 20,
    },
    input: {
        marginVertical: 10,
        padding: 10,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default CreateScreen;