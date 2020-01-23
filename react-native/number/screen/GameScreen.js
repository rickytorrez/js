import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, FlatList, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import MainButton from '../components/MainButton';
import BodyText from '../components/BodyText';
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

const renderListItem = (listLength, itemData) => (
    <View style={ styles.listItem }>
        <BodyText># { listLength - itemData.index }</BodyText>
        <BodyText style={ styles.listItemText }>{ itemData.item }</BodyText>
    </View>
);

const GameScreen = (props) => {
    
    const initialGuess = generateRandomBetween(1, 100, props.userChoice)

    // useState will call on the generateRandomBetween and save the value if currentGuess is undefined. 
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    // state to save the guesses provided by the algorithm
    const [pastGuesses, setPastGuesses] = useState([initialGuess.toString()]);

    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const { userChoice, onGameOver } = props;

    // useEffect's function runs 'after' every render cycle for this component
    useEffect(() => {
        if(currentGuess === userChoice){
            onGameOver(pastGuesses.length);
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
            currentLow.current = currentGuess + 1;
        }
        const nextGuess = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextGuess);
        // setNumberofRounds(currentRounds => currentRounds + 1);
        // currentPassedGuesses is our latest state array of guesses and we want to update it 
        // return a new array
        // we pass the new guess at the beggining so the user can see it first

        // using currentGuess wouldn't work bc React won't have update the state or re-built the component yet
        setPastGuesses((currentPassedGuesses) => [nextGuess.toString(), ...currentPassedGuesses]);
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
            <View style={ styles.listContainer }>
                {/* <ScrollView>
                    {pastGuesses.map((guess, index) => renderListItem(guess, pastGuesses.length - index))}
                </ScrollView> */}
                <FlatList 
                    keyExtractor = { (item) => item }
                    data={ pastGuesses }
                    renderItem={ renderListItem.bind(this, pastGuesses.length) }
                />
            </View>
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
    },listContainer: {
        flex: 1,
        width: '75%'
    },
    listItem: {
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 15,
        marginVertical: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderRadius: 20
    },
    
});

export default GameScreen;