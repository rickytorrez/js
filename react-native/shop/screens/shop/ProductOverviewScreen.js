import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

// store import - useDispatch to dispatch redux actions
import { useSelector, useDispatch } from 'react-redux'; 

// import actions
import * as cartActions from '../../store/actions/cart';

// product item component
import ProductItem from '../../components/shop/ProductItem';

const ProductOverviewScreen = (props) => {

    // useSelector for slice of the state
    const products = useSelector(state => state.products.availableProducts)

    const dispatch = useDispatch();

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
                            });
                        }}
                    onAddToCart = { () => {
                        dispatch(cartActions.addToCart(itemData.item));
                    } }
                /> }
        />
    );
};

ProductOverviewScreen.navigationOptions = {
    headerTitle: 'All Products'
};

const styles = StyleSheet.create({});

export default ProductOverviewScreen;