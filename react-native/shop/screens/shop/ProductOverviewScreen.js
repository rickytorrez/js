import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

// store import
import { useSelector } from 'react-redux'; 

const ProductOverviewScreen = (props) => {

    // useSelector for slice of the state
    const products = useSelector(state => state.products.availableProducts)

    return (
        <FlatList 
            data={ products }
            keyExtractor={ item => item.id }
            renderItem={ itemData => <Text>{ itemData.item.title }</Text> }
        />
    );
};

ProductOverviewScreen.navigationOptions = {
    headerTitle: 'All Products'
};

const styles = StyleSheet.create({});

export default ProductOverviewScreen;