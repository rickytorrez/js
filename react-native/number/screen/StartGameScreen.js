import React from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

import Card from '../components/Card'

const StartGameScreen = (props) => {
    return (
        <View style={ styles.screen }>
            <Text style={ styles.title }>Start a New Game!</Text>
            <Card style={ styles.cardStyle }>
                <Text>Select a Number</Text>
                <TextInput />
                <View style={ styles.buttonContainer }>
                    <View style={ styles.button }>
                        <Button 
                            title='Reset'
                            onPress={ () => console.log('reset') }
                            color='#c717fc'/>
                    </View>
                    <View style={ styles.button }>
                        <Button 
                            title='Confirm'
                            onPress={ () => console.log('confirm') }
                            color='#f7287b'/>
                    </View>
                </View>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create ({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    cardStyle: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button: {
        width: 100
    }
});

export default StartGameScreen;