import React, { useContext } from 'react';
import { View, StyleSheet, Text, FlatList, Button } from 'react-native';

import BlogContext from '../context/BlogContext';

const IndexScreen = () => {

    const { data, addBlogPost } = useContext(BlogContext);

    return(
        <View>
            <Text>Index Screen Shown</Text>
            <Button 
                title='add post'
                onPress={ addBlogPost }/>
            <FlatList
                keyExtractor={( blogPost ) => blogPost.title }
                data={ data }
                renderItem={({ item }) => {
                    return <Text>{ item.title }</Text>
                }}/>
        </View>
    )
}

const styles = StyleSheet.create({});

export default IndexScreen;