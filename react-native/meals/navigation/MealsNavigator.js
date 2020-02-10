import React from 'react';

import { Platform } from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createAppContainer } from 'react-navigation';

import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen'
import FiltersScreen from '../screens/FiltersScreen';
import Colors from '../constants/Colors';

const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    headerTitle: 'A Screen'
};

// meaks stack
const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
    },
    CategoryMeals: {
        screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen
    }, {
    defaultNavigationOptions: defaultStackNavOptions
});

// favorites stack
const FavNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
    }, {
    defaultNavigationOptions: defaultStackNavOptions
});

// configuration of icons and page title for landing screen
const tabsScreenConfig = {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons 
                            name='ios-restaurant'
                            size={ 25 }
                            color={ tabInfo.tintColor }/>
            }
        }
    },
    Favorites: {
        screen: FavNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons
                            name='ios-star'
                            size={ 25 }
                            color={ tabInfo.tintColor } />
            }
        }
    }
};

// android based icons using material ui
const MealsFavTabBottomNagivator = 
    Platform.OS === 'android' 
    ? createMaterialBottomTabNavigator( tabsScreenConfig, {
        activeColor: Colors.accentColor,
        shifting: false
    }) 
    : createBottomTabNavigator( tabsScreenConfig, {
        tabBarOptions: {
            activeTintColor: Colors.accentColor
        }
    });

// filters stack
const FiltersNavigator = createStackNavigator(
    {
        Filters: FiltersScreen
    }, 
    {
        defaultNavigationOptions: defaultStackNavOptions
    }
);

// main navigator
    // nested tabScreenConfig passed through MealsFavTabBottomNagivator
    // nested filters passed in navigator
const MainNavigator = createDrawerNavigator({
    MealsFavs: {
        screen: MealsFavTabBottomNagivator,
        navigationOptions: {
            drawerLabel: 'Meals'
        }
    },
    Filters: {
        screen: FiltersNavigator,
        navigationOptions: {
            drawerLabel: 'Filters'
        }
    },
}, {
    contentOptions: {
        activeTintColor: Colors.accentColor,
        labelStyle: {
            fontFamily: 'open-sans-bold'
        }
    }
});

export default createAppContainer(MainNavigator);