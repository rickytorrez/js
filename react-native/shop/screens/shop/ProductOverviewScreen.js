import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, Platform, FlatList, Button, ActivityIndicator, StyleSheet } from 'react-native';

// store import - useDispatch to dispatch redux actions
import { useSelector, useDispatch } from 'react-redux'; 

// header button
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/UI/HeaderButton';

// import actions
import * as cartActions from '../../store/actions/cart';
import * as productActions from '../../store/actions/products';

// product item component
import ProductItem from '../../components/shop/ProductItem';

import Colors from '../../constants/Colors';

const ProductOverviewScreen = (props) => {    

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    // useSelector for slice of the state
    const products = useSelector(state => state.products.availableProducts)
    const dispatch = useDispatch();

    const loadProducts = useCallback(async() => {

        setError(null);
        setIsLoading(true);
            try {
                await dispatch(productActions.fetchProducts()).then();
            } catch (err){
                setError(err.message);
            }
        setIsLoading(false);
    }, [dispatch, setIsLoading, setError]);

    useEffect(() => {
        const willFocusSub = props.navigation.addListener(
            'willFocus', 
            loadProducts
        );
        // gets rid of subscription when component is unmounted
        return () => {
            willFocusSub.remove()
        };
    }, [loadProducts]);

    // fetches the products initially
    useEffect(() => {
        loadProducts();
    }, [dispatch, loadProducts]);

    const selectItemHandler = (id, title) => {
        props.navigation.navigate( 'ProductDetail', { 
            productId: id,
            productTitle: title
            });
    };

    if(error){
        return (
            <View style={ styles.centered }>
                <Text>An error ocurred.</Text>
                <Button 
                    title='Try again'
                    onPress= { loadProducts }
                    color={ Colors.primary }
                />
            </View>
        );
    };

    if(isLoading){
        return (
            <View style={ styles.centered }>
                <ActivityIndicator 
                    size='large'
                    color={ Colors.primary }
                />
            </View>
        );
    };

    if(!isLoading && products.length === 0){
        return (
            <View style={ styles.centered }>
                <Text>No Products Found. Start Adding Some.</Text>
            </View>
        );
    };

    return (
        <FlatList 
            data={ products }
            keyExtractor={ item => item.id }
            renderItem={ itemData => (
                <ProductItem 
                    title = { itemData.item.title }
                    image = { itemData.item.imageUrl }
                    price = { itemData.item.price }
                    onSelect = { () => {
                        selectItemHandler(itemData.item.id, itemData.item.title)
                    }}
                >
                    <Button 
                        color={ Colors.primary }
                        title="View Details"
                        onPress={ () => {
                            selectItemHandler(itemData.item.id, itemData.item.title)
                        }} 
                    />
                    <Button 
                        color={ Colors.primary }
                        title="Add to cart" 
                        onPress={ () => {
                            dispatch(cartActions.addToCart(itemData.item));
                        } }
                    />
                </ProductItem> 
            )}
        />
    );
};

ProductOverviewScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'All Products',
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={ HeaderButton }>
                <Item 
                    title='Menu'
                    iconName={ Platform.OS === 'android' ? 'md-menu' : 'ios-menu' }
                    onPress={ () => {
                        navData.navigation.toggleDrawer();
                    } }
                />
            </HeaderButtons>
        ),
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={ HeaderButton }>
                <Item 
                    title='Cart'
                    iconName={ Platform.OS === 'android' ? 'md-cart' : 'ios-cart' }
                    onPress={ () => {
                        navData.navigation.navigate('CartScreen')
                    } }
                />
            </HeaderButtons>
        )
    }
};

const styles = StyleSheet.create({
    centered: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center' 
    }
});

export default ProductOverviewScreen;