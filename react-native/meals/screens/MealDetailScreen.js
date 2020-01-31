import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { MEALS } from '../data/dummydata';
import HeaderButton from '../components/HeaderButton';

const MealDetailScreen = (props) => {

    const mealId = props.navigation.getParam('mealItemId');

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);
    
    return (
        <View style={ styles.screen }>
            <Text>{ selectedMeal.title }</Text>
        </View>
    );
};

MealDetailScreen.navigationOptions = (navigationData) => {
    const mealId = navigationData.navigation.getParam('mealItemId');
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);
    return {
        headerTitle: selectedMeal.title,
        headerRight: () => 
            <HeaderButtons
                HeaderButtonComponent={ HeaderButton }>
                <Item 
                    title='Favorite'
                    iconName='ios-star'
                    onPress={ () => {
                        console.log('mark as fave') 
                        }
                    }
                />
            </HeaderButtons>
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MealDetailScreen;