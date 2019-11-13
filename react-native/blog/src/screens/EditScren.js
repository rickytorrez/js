import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';

import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({ navigation }) => {

    // context state
    const { state, editBlogPost } = useContext(Context);

    // variable passed down
    const id = navigation.getParam('id');

    // blogPost retrieved from state
    const blogPost = state.find((blogPost) => blogPost.id === id);

    return(
        <BlogPostForm 
            initialValues={{ title: blogPost.title, content: blogPost.content }}
            onSubmit={(title, content) => {
                console.log('hi')
            }}/>
    )
};

const styles = StyleSheet.create({});

export default EditScreen;