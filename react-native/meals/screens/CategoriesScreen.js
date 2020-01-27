import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';

import { CATEGORIES } from '../data/dummydata';

const renderGridItem = (itemData) => {
    return (
        <View style={ styles.gridItemStyle }>
            <Text>{ itemData.item.title }</Text>
        </View>
    );
};

const CategoriesScreen = (props) => {

    return ( 
        <FlatList 
            keyExtractor={ (item, index) => item.id }
            data={ CATEGORIES }
            renderItem={ renderGridItem }
            numColumns={ 2 } />
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridItemStyle: {
        flex: 1,
        margin: 15,
        height: 150
    }
});

export default CategoriesScreen;