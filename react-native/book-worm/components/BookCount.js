import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import PropTypes from 'prop-types';

const BookCount = ({ count, title }) => 
    (
        <View style={ styles.tabButtons }>
            <Text style={ styles.tabText }>{ title }</Text>
            <Text>{ count }</Text>
        </View>
    );
    

export default BookCount;

BookCount.prototype = {
    count: PropTypes.number.isRequired,
    title: PropTypes.string
};

BookCount.defaultProps = {
    title: 'Title'
};

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