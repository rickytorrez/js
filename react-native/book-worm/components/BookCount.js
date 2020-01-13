import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BookCount = ({ count, title }) => 
    (
        <View style={ styles.tabButtons }>
            <Text style={ styles.tabText }>{ title }</Text>
            <Text>{ count }</Text>
        </View>
    );
    

export default BookCount;

const styles = StyleSheet.create({
    tabButtons: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    tabText: {
        fontSize: 20
    }
});