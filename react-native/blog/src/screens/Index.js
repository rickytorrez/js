import React, { useContext } from 'react';
import { View, StyleSheet, Text, FlatList, Button, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { Context, Provider } from '../context/BlogContext';

const IndexScreen = ({ navigation }) => {

    const { state, addBlogPost, deleteBlogPost } = useContext(Context);

    return(
        <View>
            <Button 
                title='add post'
                onPress={ addBlogPost }/>
            <FlatList
                keyExtractor={( blogPost ) => blogPost.title }
                data={ state }
                renderItem={({ item }) => {
                    return(
                        <TouchableOpacity 
                            onPress={()=>navigation.navigate('Show', { id: item.id }) }>
                            <View style={ styles.row }>
                                <Text style={ styles.title }>{ item.title } - { item.id }</Text>
                                <TouchableOpacity 
                                    onPress={ () => deleteBlogPost(item.id) }>
                                    <Feather 
                                        style={ styles.icon } 
                                        name='trash'/>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                }}/>
        </View>
    );
};

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: 
            <TouchableOpacity onPress={() => navigation.navigate('Create') }>
                <Feather 
                    name='plus' 
                    style={ styles.plusIcon }/>
            </TouchableOpacity>
    }
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'gray'
    },
    title: {
        fontSize: 18,
    },
    icon: {
        fontSize: 24
    },
    plusIcon: {
        fontSize: 30,
        marginRight: 10
    }
});

export default IndexScreen;