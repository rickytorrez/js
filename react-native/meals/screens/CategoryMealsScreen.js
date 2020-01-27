import React from 'react';
import { View, Text, Button, StyleSheet, Platform } from 'react-native';

import { CATEGORIES } from '../data/dummydata';
import Colors from '../constants/Colors';

const CategoriesMealsScreen = (props) => {

    const catId = props.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
    
    return (
        <View style={ styles.screen }>
            <Text>CategoriesMealsScreen</Text>
            <Text>{  selectedCategory.title }</Text>
            <Button 
                title='Go to Meal Detail Screen'
                onPress={ () => props.navigation.navigate({ routeName: 'MealDetail' }) }/>
        </View>
    );
};

CategoriesMealsScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
    return {
        headerTitle: selectedCategory.title,
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white'
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoriesMealsScreen;