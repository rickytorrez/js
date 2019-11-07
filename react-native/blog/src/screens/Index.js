import React, { useContext } from 'react';
import { View, StyleSheet, Text, FlatList, Button } from 'react-native';

import { Context, Provider } from '../context/BlogContext';

const IndexScreen = () => {

    const { state, addBlogPost } = useContext(Context);

    return(
        <View>
            <Text>Index Screen Shown</Text>
            <Button 
                title='add post'
                onPress={ addBlogPost }/>
            <FlatList
                keyExtractor={( blogPost ) => blogPost.title }
                data={ state }
                renderItem={({ item }) => {
                    return <Text>{ item.title }</Text>
                }}/>
        </View>
    )
}

const styles = StyleSheet.create({});

export default IndexScreen;