import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import MealItem from './MealItem';

const MealList = (props) => {

    const renderMealItem = (itemData) => {
        return (
            <MealItem 
                title={ itemData.item.title }
                duration={ itemData.item.duration }
                complexity={ itemData.item.complexity.toUpperCase() }
                affordability={ itemData.item.affordability.toUpperCase() }
                image={ itemData.item.imageUrl }
                onSelectMeal={ () => props.navigation.navigate(
                    {
                        routeName: 'MealDetail',
                        params: {
                            mealItemId: itemData.item.id
                        }
                    }
                ) 
            }/>
        );
    };

    return (
        <View style={ styles.list }>
            <FlatList 
                data={ props.listData }
                keyExtractor={ (item, index) => item.id }
                renderItem={ renderMealItem }
                style={{ width: '90%' }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MealList;