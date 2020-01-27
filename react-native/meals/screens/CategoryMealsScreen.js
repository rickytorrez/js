import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CategoriesMealsScreen = (props) => {
    return (
        <View style={ styles.screen }>
            <Text>CategoriesMealsScreen</Text>
            <Button 
                title='Go to Meal Detail Screen'
                onPress={ () => props.navigation.navigate({ routeName: 'MealDetail' }) }/>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoriesMealsScreen;