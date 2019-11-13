import React, { useState } from 'react';
import { View, Button, Text, TextInput, StyleSheet } from 'react-native';

const BlogPostForm = ({ onSubmit, initialValues }) => {

    // two pieces of state - title and content
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

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
                title='Save Blog Post'
                onPress={ () => onSubmit(title, content)} />
        </View>
    );
};

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
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

export default BlogPostForm;