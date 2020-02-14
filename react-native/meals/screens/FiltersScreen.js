import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const FiltersScreen = (props) => {
    return (
        <View style={ styles.screen }>
            <Text style={ styles.title }>Available Filters</Text>
            <View style={ styles.filterContainter }>
                <Text>Gluten-Free </Text>
                <Switch />
            </View>
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
        width: '80%'
    }
});

export default FiltersScreen;