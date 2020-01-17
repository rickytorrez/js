import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';

const GoalInput = (props) => {

    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    return (
        <View style={styles.textContainer}>
            <TextInput 
                placeholder= 'Course Goal' 
                style={styles.textInput}
                onChangeText={goalInputHandler}
                value={enteredGoal}/>
            <Button 
                title= 'ADD' 
                onPress={ props.onAddGoal.bind(this, enteredGoal) } />
        </View>
    );
};

const styles = StyleSheet.create({
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      textInput: {
        borderBottomColor: 'black',
        borderWidth: 1,
        padding: 10,
        width: '80%'
      }
});

export default GoalInput;