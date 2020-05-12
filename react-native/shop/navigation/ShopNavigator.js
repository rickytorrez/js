import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerNavigatorItems } from 'react-navigation-drawer';
import { View, Platform, SafeAreaView, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import * as authActions from '../store/actions/auth';

import ProductOverviewScreen from '../screens/shop/ProductOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';
import OrdersScreen from '../screens/shop/OrdersScreen';
import UserProductsScreen from '../screens/user/UserProductsScreen';
import EditProductScreen from '../screens/user/EditProductScreen';
import AuthScreen from '../screens/user/AuthScreen';
import StartUpScreen from '../screens/StartUpScreen';

import Colors from '../constants/Colors';

const defaultNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
    },
    headerTitleStyle: {
        fontFamily: 'open-sans-bold'
    },
    headerBackTitleStyle: {
        fontFamily: 'open-sans'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
};

const ProductNavigator = createStackNavigator(
    {
        ProductOverview: ProductOverviewScreen,
        ProductDetail: ProductDetailScreen,
        CartScreen: CartScreen,
    }, 
    {
        navigationOptions: {
            drawerIcon: (drawerConfig) => (
                <Ionicons 
                    name={ Platform.OS === 'androd' ? 'md-cart' : 'ios-cart' }
                    size={ 23 }
                    color={ drawerConfig.tintColor }
                />
            )
        },
        defaultNavigationOptions: defaultNavOptions
    }
);

const OrdersNavigator = createStackNavigator(
    {
        Orders: OrdersScreen
    },
    {
        navigationOptions: {
            drawerIcon: (drawerConfig) => (
                <Ionicons 
                    name={ Platform.OS === 'androd' ? 'md-list' : 'ios-list' }
                    size={ 23 }
                    color={ drawerConfig.tintColor }
                />
            )
        },
        defaultNavigationOptions: defaultNavOptions
    }
);

const AdminNavigator = createStackNavigator(
    {
        UserProducts: UserProductsScreen,
        EditProduct: EditProductScreen
    },
    {
        navigationOptions: {
            drawerIcon: (drawerConfig) => (
                <Ionicons 
                    name={ Platform.OS === 'androd' ? 'md-create' : 'ios-create' }
                    size={ 23 }
                    color={ drawerConfig.tintColor }
                />
            )
        },
        defaultNavigationOptions: defaultNavOptions
    }
);

const ShopNavigator = createDrawerNavigator(
    {
        Products: ProductNavigator,
        Orders: OrdersNavigator,
        Admin: AdminNavigator
    },
    {
        contentOptions: {
            activeTintColor: Colors.primary
        },
        contentComponent: props => {

            const dispatch = useDispatch();

            return <View style={{ flex: 1, paddingTop: 20 }}>
                <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
                    <DrawerNavigatorItems 
                        { ...props } 
                    />
                    <Button 
                        title='Logout'
                        color={ Colors.primary }
                        onPress={ () => {
                            dispatch(authActions.logout());
                            props.navigation.navigate('Auth');
                        } }
                    />
                </SafeAreaView>
            </View>
        }
    }
);

const AuthNavigator = createStackNavigator({
    Auth: AuthScreen
}, {
    defaultNavigationOptions: defaultNavOptions
    }
);

const MainNavigator = createSwitchNavigator({
    StartUp: StartUpScreen,
    Auth: AuthNavigator,
    Shop: ShopNavigator
});

export default createAppContainer(MainNavigator);