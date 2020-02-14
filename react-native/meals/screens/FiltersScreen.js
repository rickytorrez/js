import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, Platform } from 'react-native';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

import Colors from '../constants/Colors';

const FilterSwitch = (props) => {
    return(
        <View style={ styles.filterContainter }>
            <Text>{ props.label }</Text>
            {/* Switch manually manages their state */}
            <Switch 
                trackColor={ {true: Colors.primaryColor} }
                thumbColor={ Platform.OS === 'android' ? Colors.accentColor : '' }
                value={ props.value }
                onValueChange={ props.onChange }    
            />
        </View>
    );
};

const FiltersScreen = (props) => {

    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isDairyFree, setIsDairyFree] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);

    return (
        <View style={ styles.screen }>
            <Text style={ styles.title }>Available Filters</Text>
            <FilterSwitch 
                label='Gluten Free'
                value={ isGlutenFree }
                onChange={ (newValue) => {setIsGlutenFree(newValue)} }    
            />
            <FilterSwitch 
                label='Vegan'
                value={ isVegan }
                onChange={ (newValue) => {setIsVegan(newValue)} }    
            />
            <FilterSwitch 
                label='Dairy Free'
                value={ isDairyFree }
                onChange={ (newValue) => {setIsDairyFree(newValue)} }    
            />
            <FilterSwitch 
                label='Vegetarian'
                value={ isVegetarian }
                onChange={ (newValue) => {setIsVegetarian(newValue)} }    
            />
        </View>
    );
};

FiltersScreen.navigationOptions = (navData) => {
    return{
        headerTitle: 'Filter Meals',
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={ HeaderButton }>
                <Item 
                    title='Menu' 
                    iconName='ios-menu' 
                    onPress={() => { navData.navigation.toggleDrawer() }} />
            </HeaderButtons>
        )
    }
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontFamily: 'open-sans-bold',
        margin: 20,
        fontSize: 22,
        textAlign: 'center'
    },
    filterContainter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 15
    }
});

export default FiltersScreen;