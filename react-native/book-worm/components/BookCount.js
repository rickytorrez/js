import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class BookCount extends React.Component {

    render(){
        return (
            <View style={ styles.tabButtons }>
                <Text style={ styles.tabText }>{ this.props.title }</Text>
                <Text>{ this.props.count }</Text>
            </View>
        );
    };
};

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