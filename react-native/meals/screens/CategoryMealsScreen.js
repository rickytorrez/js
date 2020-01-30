import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummydata';
import MealItem from '../components/MealItem';

const CategoriesMealsScreen = (props) => {

    const catId = props.navigation.getParam('categoryId');

    const displayMeals = MEALS.filter(
        (meal) => meal.categoryIds.indexOf(catId) >= 0
    );

    const renderMealItem = (itemData) => {
        return (
            <View>
                <MealItem 
                    title={ itemData.item.title }
                    duration={ itemData.item.duration }
                    complexity={ itemData.item.complexity.toUpperCase() }
                    affordability={ itemData.item.affordability.toUpperCase() }
                    image={ itemData.item.imageUrl }
                    onSelectMeal={ () => console.log('meal')
                     }/>
            </View>
        );
    }
    
    return (
        <View style={ styles.screen }>
            <FlatList 
                data={ displayMeals }
                keyExtractor={ (item, index) => item.id }
                renderItem={ renderMealItem }
                style={{ width: '90%' }}/>
        </View>
    );
};

CategoriesMealsScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
    return {
        headerTitle: selectedCategory.title,
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