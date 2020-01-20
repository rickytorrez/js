import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';

import Card from '../components/Card';
import Input from '../components/Input';
import Colors from '../constants/colors';

const StartGameScreen = (props) => {

    const[enteredValue, setEnteredValue] = useState('')
    console.log('enteredValue at useState', enteredValue);

    const numberInputHandler = (inputText) => {
        console.log('inputText at numberHandler', inputText);
        setEnteredValue(inputText.replace(/[^0-9]/g, ''))
    };

    return (
        <TouchableWithoutFeedback
            onPress={ () => { 
                Keyboard.dismiss()
             } }>
            <View style={ styles.screen }>
                <Text style={ styles.title }>Start a New Game!</Text>
                <Card style={ styles.cardStyle }>
                    <Text>Select a Number</Text>
                    <Input 
                        style={ styles.input }
                        blurOnSubmit
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType='number-pad'
                        maxLength={2}
                        onChangeText={ numberInputHandler }
                        value={ enteredValue }
                        />
                    <View style={ styles.buttonContainer }>
                        <View style={ styles.button }>
                            <Button 
                                title='Reset'
                                onPress={ () => console.log('reset') }
                                color={ Colors.accent }/>
                        </View>
                        <View style={ styles.button }>
                            <Button 
                                title='Confirm'
                                onPress={ () => console.log('confirm') }
                                color={ Colors.primary }/>
                        </View>
                    </View>
                </Card>
            </View>
        </TouchableWithoutFeedback>
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
    },
    input: {
        width: 50,
        textAlign: 'center'
    }
});

export default StartGameScreen;