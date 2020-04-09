import React from 'react';
import { Platform, Text, FlatList, StyleSheet } from 'react-native';

// header button
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/UI/HeaderButton';

import { useSelector } from 'react-redux';

const OrdersScreen = (props) => {

    const orders = useSelector(state => state.orders.orders);
    console.log(orders);
    

    return (
        <FlatList 
            data={ orders }
            keyExtractor={ item => item.id }
            renderItem={ itemData => <Text>{ itemData.item.totalAmount }</Text> }
        />
    )
};

OrdersScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Your Orders',
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
    }
};

const styles = StyleSheet.create({});

export default OrdersScreen;