import React from 'react';
import { View, StyleSheet } from 'react-native';

// store import
import { useSelector } from 'react-redux';

import { CATEGORIES } from '../data/dummydata';
import MealList from '../components/MealList';
import DefaultText from '../components/DefaultText';

const CategoriesMealsScreen = (props) => {

    const catId = props.navigation.getParam('categoryId');

    const availableMeals = useSelector(state => state.meals.filteredMeals);

    const displayMeals = availableMeals.filter(
        (meal) => meal.categoryIds.indexOf(catId) >= 0
    );

    if(displayMeals.length === 0){
        return(
            <View style={ styles.content }>
                <DefaultText>No meals found, check your filters!</DefaultText>
            </View>
        )
    }
    
    return <MealList 
                listData={ displayMeals }
                // navigation needs to be passed down since MealList is a nested component and doesn't have access to that prop
                navigation={ props.navigation } />
};

CategoriesMealsScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
    return {
        headerTitle: selectedCategory.title,
    };
};

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoriesMealsScreen;