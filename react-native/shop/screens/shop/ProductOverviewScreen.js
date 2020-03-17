import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

// store import
import { useSelector } from 'react-redux'; 

// product item component
import ProductItem from '../../components/shop/ProductItem';

const ProductOverviewScreen = (props) => {

    // useSelector for slice of the state
    const products = useSelector(state => state.products.availableProducts)

    return (
        <FlatList 
            data={ products }
            keyExtractor={ item => item.id }
            renderItem={ itemData => 
                <ProductItem 
                    title = { itemData.item.title }
                    image = { itemData.item.imageUrl }
                    price = { itemData.item.price }
                    onViewDetail = { () => {
                        props.navigation.navigate( 'ProductDetail', { 
                            productId: itemData.item.id,
                            productTitle: itemData.item.title
                            })
                        } 
                    }
                    onAddToCart = { () => {} }
                /> }
        />
    );
};

ProductOverviewScreen.navigationOptions = {
    headerTitle: 'All Products'
};

const styles = StyleSheet.create({});

export default ProductOverviewScreen;