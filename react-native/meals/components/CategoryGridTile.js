import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform, TouchableNativeFeedback } from 'react-native';

const CategoryGridTile = (props) => {

    // styling check for OS on mobile
    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21){
        TouchableCmp = TouchableNativeFeedback;
    };

    return (
        <View style={ styles.gridItemStyle }>
            <TouchableCmp 
                onPress={ props.onSelect } 
                style={{ flex: 1 }}>
                <View style={ {...styles.container, ...{ backgroundColor: props.color }} }>
                    <Text style={ styles.title } numberOfLines= { 2 }>{ props.title }</Text>
                </View>
            </TouchableCmp>
        </View>
    );
};

const styles = StyleSheet.create({
    gridItemStyle: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 15,        
        elevation: 3,
        overflow: 
            Platform.OS === 'android' && Platform.Version >= 21 
                ? 'hidden' 
                : 'visible'
    },
    container: {
        flex: 1,
        borderRadius: 15,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'right'
    }
});

export default CategoryGridTile;