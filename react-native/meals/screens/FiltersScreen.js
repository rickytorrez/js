import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const FiltersScreen = (props) => {
    return (
        <View style={ styles.screen }>
            <Text style={ styles.title }>Available Filters</Text>
            <TouchableOpacity>
                <Text>Vegan</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Gluten Free</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Vegeterian</Text>
            </TouchableOpacity>
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
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default FiltersScreen;