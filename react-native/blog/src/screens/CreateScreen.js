import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';

import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const CreateScreen = ({ navigation }) => {

    // context - destructure the function that we need for this component
    const { addBlogPost } = useContext(Context);
    
    return(
        <BlogPostForm 
            onSubmit={(title, content) => {
                addBlogPost(title, content, 
                    () => navigation.navigate('Index'))
            }}/>
    )
    
};

const styles = StyleSheet.create({});

export default CreateScreen;