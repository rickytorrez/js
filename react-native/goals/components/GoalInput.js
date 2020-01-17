import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet, Modal } from 'react-native';

const GoalInput = (props) => {

    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        // clear the input 
        setEnteredGoal('')
    };

    const hideTextInput = () => {
        props.onCancel();
    }

    return (
        <Modal 
            visible={ props.visible }
            animationType='slide'>
            <View style={styles.textContainer}>
                <TextInput 
                    placeholder= 'Course Goal' 
                    style={styles.textInput}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}/>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button 
                            title= 'ADD' 
                            onPress={addGoalHandler} />
                    </View>
                    <View>
                        <Button 
                            title='CANCEL'
                            color='red'
                            onPress={hideTextInput}/>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      textInput: {
        borderBottomColor: 'black',
        borderWidth: 1,
        padding: 10,
        width: '80%',
        marginBottom: 10
      },
      buttonContainer: {
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          width: '60%'
      },
      button: {
          width: '40%'
      }
});

export default GoalInput;