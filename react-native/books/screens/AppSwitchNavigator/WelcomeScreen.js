import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class WelcomeScreen extends React.Component {
    render(){
        return (
            <View style={ styles.container }>
                <Text>WelcomeScreen</Text>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center'
    }
})