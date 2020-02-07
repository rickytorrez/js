import React from 'react';

import { CATEGORIES, MEALS } from '../data/dummydata';
import MealList from '../components/MealList';

const CategoriesMealsScreen = (props) => {

    const catId = props.navigation.getParam('categoryId');

    const displayMeals = MEALS.filter(
        (meal) => meal.categoryIds.indexOf(catId) >= 0
    );
    
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

export default CategoriesMealsScreen;