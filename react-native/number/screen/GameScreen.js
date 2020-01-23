import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import MainButton from '../components/MainButton';
import DefaultStyles from '../constants/default-styles';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    if(randomNumber === exclude){
        return generateRandomBetween(min, max, exclude);
    } else {
        return randomNumber;
    }
};

const GameScreen = (props) => {

    // useState will call on the generateRandomBetween and save the value if currentGuess is undefined. 
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoice));
    const [numberOfRounds, setNumberofRounds] = useState(0);

    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const { userChoice, onGameOver } = props;

    // useEffect's function runs 'after' every render cycle for this component
    useEffect(() => {
        if(currentGuess === userChoice){
            onGameOver(numberOfRounds);
        }
    }, [currentGuess, userChoice, onGameOver]);

    const nextGuessHandler = (direction) => {
        if ((direction === 'lower' && currentGuess < props.userChoice) || ( direction === 'greater' && currentGuess > props.userChoice )){
            Alert.alert(
                'Lying B', 
                'Please provide the correct information...',
                [{ test: 'Sorry!', Style: 'cancel' }
            ]);
            return;
        } 
        if (direction === 'lower'){
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess;
        }
        const nextGuess = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextGuess);
        setNumberofRounds(currentRounds => currentRounds + 1);
    };

    return (
        <View style={ styles.screen }>
            <Text style={ DefaultStyles.title }>Opponent's Guess:</Text>
            <NumberContainer>
                { currentGuess }
            </NumberContainer>
            <Card style={ styles.buttonContainer }>
                <MainButton 
                    onPress={ nextGuessHandler.bind(this, 'lower') } >
                    <Ionicons name='md-remove' size={ 24 } color='white' />
                </MainButton>
                <MainButton 
                    onPress={ nextGuessHandler.bind(this, 'greater') }>
                    <Ionicons name='md-add' size={ 24 } color='white' />
                </MainButton>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }
});

export default GameScreen;