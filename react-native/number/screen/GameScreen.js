import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const generateRandomBetween = (min, max, exclued) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    if(randomNumber === exclued){
        return generateRandomBetween(min, max, exclude);
    } else {
        return randomNumber;
    }
};

const GameScreen = (props) => {

    // useState will call on the generateRandomBetween and save the value if currentGuess is undefined. 
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoice))

    return (
        <View>
            <Text>GameScreen</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default GameScreen;