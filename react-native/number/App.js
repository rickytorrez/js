import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header';
import StartGameScreen from './screen/StartGameScreen';
import GameScreen from './screen/GameScreen';
import GameOverScreen from './screen/GameOverScreen';

export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);  
  console.log('guess rounds', guessRounds);

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  };

  const gameOverHandler = (numberOfRounds) => {
    setGuessRounds(numberOfRounds);
  };

  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };

  let content = <StartGameScreen onStartGame={ startGameHandler }/>

  // if userNumber is truish, it is initially undefined since there's no number in it
  if(userNumber && guessRounds <= 0){
    content = <GameScreen userChoice={ userNumber } onGameOver={ gameOverHandler }/>
  } else if (guessRounds > 0){
    content = <GameOverScreen rounds={ guessRounds } userNumber={ userNumber } newGame={ configureNewGameHandler }/>
  };

  return (
    <View style={ styles.screen }>
      <Header 
        title='Guess a Number' />
      { content }
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
