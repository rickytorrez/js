import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const GameOverScreen = (props) => {

    console.log(props);
    

    return (
        <View style={ styles.screen }>
            <Text>The game is over!</Text>
            <Text>Number of rounds it took you to win:</Text>
            <Text>{ props.rounds }</Text>
            <Text>Number was:</Text>
            <Text>{ props.userNumber }</Text>
            <Button 
                title='Restart the game'
                onPress={ props.newGame }/>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default GameOverScreen;