import React from 'react';
import { Platform, FlatList, StyleSheet } from 'react-native';

// store import - useDispatch to dispatch redux actions
import { useSelector, useDispatch } from 'react-redux'; 

// header button
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/UI/HeaderButton';

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

const styles = StyleSheet.create({});

export default ProductOverviewScreen;