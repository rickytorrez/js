import React, { useState, useEffect } from 'react';
import { 
    View,
    Platform, 
    FlatList, 
    Text,
    ActivityIndicator, 
    StyleSheet 
} from 'react-native';

// header button
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/UI/HeaderButton';

import { useSelector, useDispatch } from 'react-redux';

import OrderItem from '../../components/shop/OrderItem';
import * as ordersActions from '../../store/actions/orders';
import Colors from '../../constants/Colors';

const OrdersScreen = (props) => {

    const [isLoading, setIsLoading] = useState(false);

    const orders = useSelector(state => state.orders.orders);
    const dispatch = useDispatch();

    useEffect(() => {
        setIsLoading(true);
        dispatch(ordersActions.setOrders())
            // once it's done and we have a response
            .then(() => {
                setIsLoading(false)
            });
    }, [dispatch]);

    if(isLoading){
        return(
            <View style={ styles.centered }>
                <ActivityIndicator 
                    size='large'
                    color={ Colors.primary }
                />
            </View>
        );
    };

    if(orders.length === 0){
        return(
            <View style={ styles.ifCheck }>
                <Text>No orders found, check out the items avaiable!</Text>
            </View>
        )
    };

    return (
        <FlatList 
            data={ orders }
            keyExtractor={ item => item.id }
            renderItem={ itemData => (
                <OrderItem 
                    amount={ itemData.item.totalAmount } 
                    date={ itemData.item.readableDate }
                    items={ itemData.item.items }
                />
            ) 
        }
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

const styles = StyleSheet.create({
    centered: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    ifCheck: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default OrdersScreen;